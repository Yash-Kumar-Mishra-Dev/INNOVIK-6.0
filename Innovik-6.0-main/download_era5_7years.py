import cdsapi
import calendar
import os
import time

DATA_DIR = "era5_data"
os.makedirs(DATA_DIR, exist_ok=True)

c = cdsapi.Client()

VARIABLES = [
    "2m_dewpoint_temperature",
    "surface_pressure",
    "10m_u_component_of_wind",
    "10m_v_component_of_wind",
    "2m_temperature",
]

QUARTERS = {
    1: ["01", "02", "03"],
    2: ["04", "05", "06"],
    3: ["07", "08", "09"],
    4: ["10", "11", "12"],
}

for year in range(2018, 2025):

    for quarter, months in QUARTERS.items():

        output_file = os.path.join(
            DATA_DIR,
            f"era5_india_{year}_q{quarter}.nc"
        )

        if os.path.exists(output_file):
            print(f"SKIP: {output_file} already exists")
            continue

        print("=" * 70)
        print(f"STARTING: {year} Q{quarter}")
        print(f"Months: {months}")
        print("=" * 70)

        # Create valid day list for each month
        days_by_month = {}

        for month in months:
            month_number = int(month)
            days_by_month[month] = [
                f"{day:02d}"
                for day in range(
                    1,
                    calendar.monthrange(year, month_number)[1] + 1
                )
            ]

        # CDS request
        request = {
            "product_type": "reanalysis",
            "variable": VARIABLES,
            "year": str(year),
            "month": months,
            "day": sorted(
                set(
                    day
                    for days in days_by_month.values()
                    for day in days
                )
            ),
            "time": [
                f"{hour:02d}:00"
                for hour in range(24)
            ],
            "area": [37, 68, 6, 97],
            "data_format": "netcdf",
        }

        try:
            c.retrieve(
                "reanalysis-era5-single-levels",
                request,
                output_file
            )

            print(f"SUCCESS: {output_file}")

        except Exception as e:
            print(f"FAILED: {year} Q{quarter}")
            print("ERROR:", e)

            # Remove incomplete file if created
            if os.path.exists(output_file):
                try:
                    os.remove(output_file)
                except:
                    pass

            print("Waiting 30 seconds before continuing...")
            time.sleep(30)

print("=" * 70)
print("7-YEAR ERA5 DOWNLOAD PROCESS FINISHED")
print("=" * 70)
