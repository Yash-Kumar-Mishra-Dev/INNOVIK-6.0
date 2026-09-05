import pandas as pd
from pathlib import Path
from sklearn.preprocessing import StandardScaler
import joblib

IN_DIR = Path(".\ml\data\era5_processed")
OUT_DIR = Path(".\ml\data")
OUT_DIR.mkdir(parents=True, exist_ok=True)

files = sorted(IN_DIR.glob("*.csv"))
df = pd.concat([pd.read_csv(f) for f in files], ignore_index=True)

df["timestamp"] = pd.to_datetime(df["timestamp"])
df = df.sort_values("timestamp").reset_index(drop=True)

features = [
    "temperature_C",
    "dewpoint_C",
    "pressure_hPa",
    "wind_speed_kmh",
    "wind_direction_deg",
    "relative_humidity_pct",
]

train = df[df["timestamp"].dt.year <= 2022].copy()
val = df[df["timestamp"].dt.year == 2023].copy()
test = df[df["timestamp"].dt.year == 2024].copy()

scaler = StandardScaler()
train[features] = scaler.fit_transform(train[features])
val[features] = scaler.transform(val[features])
test[features] = scaler.transform(test[features])

train.to_csv(OUT_DIR / "train.csv", index=False)
val.to_csv(OUT_DIR / "validation.csv", index=False)
test.to_csv(OUT_DIR / "test.csv", index=False)

joblib.dump(scaler, OUT_DIR / "era5_scaler.joblib")

print("=" * 70)
print("ERA5 TRAIN / VALIDATION / TEST SPLIT")
print("=" * 70)
print("TRAIN:", len(train), train.timestamp.min(), "TO", train.timestamp.max())
print("VAL:  ", len(val), val.timestamp.min(), "TO", val.timestamp.max())
print("TEST: ", len(test), test.timestamp.min(), "TO", test.timestamp.max())
print("FEATURES:", features)
print("SCALER: ml/data/era5_scaler.joblib")
print("=" * 70)
