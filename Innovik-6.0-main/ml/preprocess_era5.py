import xarray as xr
import numpy as np
import pandas as pd
from pathlib import Path

ROOT = Path(".")
ERA5_DIR = ROOT / "era5_data"
OUT_DIR = ROOT / "ml" / "data" / "era5_processed"
OUT_DIR.mkdir(parents=True, exist_ok=True)

files = sorted(ERA5_DIR.glob("era5_india_*.nc"))

print("=" * 70)
print("RAKSHASETU ERA5 PREPROCESSING")
print("=" * 70)
print(f"Files found: {len(files)}")

for i, path in enumerate(files, 1):

    out_file = OUT_DIR / f"{path.stem}_processed.csv"

    if out_file.exists():
        print(f"[{i}/{len(files)}] SKIP: {path.name}")
        continue

    print()
    print(f"[{i}/{len(files)}] Processing: {path.name}")

    ds = xr.open_dataset(path)

    # Spatial average over India grid
    t2m = ds["t2m"].mean(dim=["latitude", "longitude"]).values
    d2m = ds["d2m"].mean(dim=["latitude", "longitude"]).values
    sp = ds["sp"].mean(dim=["latitude", "longitude"]).values
    u10 = ds["u10"].mean(dim=["latitude", "longitude"]).values
    v10 = ds["v10"].mean(dim=["latitude", "longitude"]).values

    time = pd.to_datetime(ds["valid_time"].values)

    # Unit conversions
    temperature_C = t2m - 273.15
    dewpoint_C = d2m - 273.15
    pressure_hPa = sp / 100.0

    # Wind speed
    wind_speed_kmh = np.sqrt(u10**2 + v10**2) * 3.6

    # Wind direction
    wind_direction_deg = (
        (np.degrees(np.arctan2(-u10, -v10)) + 360) % 360
    )

    # Relative humidity from temperature and dewpoint
    rh = 100 * np.exp(
        (17.625 * dewpoint_C / (243.04 + dewpoint_C))
        - (17.625 * temperature_C / (243.04 + temperature_C))
    )
    relative_humidity_pct = np.clip(rh, 0, 100)

    df = pd.DataFrame({
        "timestamp": time,
        "temperature_C": temperature_C,
        "dewpoint_C": dewpoint_C,
        "pressure_hPa": pressure_hPa,
        "wind_speed_kmh": wind_speed_kmh,
        "wind_direction_deg": wind_direction_deg,
        "relative_humidity_pct": relative_humidity_pct,
    })

    df.to_csv(out_file, index=False)

    ds.close()

    print(f"Saved: {out_file}")
    print(f"Rows: {len(df)}")

print()
print("=" * 70)
print("PREPROCESSING COMPLETE")
print("=" * 70)
