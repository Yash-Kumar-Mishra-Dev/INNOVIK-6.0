import numpy as np
import pandas as pd
from pathlib import Path
import tensorflow as tf

DATA_DIR = Path("ml/data")
MODEL_DIR = Path("ml/models")
OUTPUT_DIR = Path("ml/outputs")

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

FEATURES = [
    "temperature_C",
    "dewpoint_C",
    "pressure_hPa",
    "wind_speed_kmh",
    "wind_direction_deg",
    "relative_humidity_pct",
]

WINDOW_SIZE = 24


def create_windows(values):
    n_windows = len(values) - WINDOW_SIZE + 1

    windows = np.lib.stride_tricks.sliding_window_view(
        values,
        window_shape=(WINDOW_SIZE, len(FEATURES))
    )

    return windows.reshape(
        n_windows,
        WINDOW_SIZE,
        len(FEATURES)
    ).astype("float32")


def reconstruction_errors(model, values):
    X = create_windows(values)

    reconstructed = model.predict(
        X,
        batch_size=64,
        verbose=1
    )

    errors = np.mean(
        np.square(X - reconstructed),
        axis=(1, 2)
    )

    return X, errors


print("=" * 70)
print("RAKSHASETU LSTM AUTOENCODER - PROPER ANOMALY EVALUATION")
print("=" * 70)

# ------------------------------------------------------------
# Load trained model
# ------------------------------------------------------------

print()
print("Loading trained LSTM Autoencoder...")

model = tf.keras.models.load_model(
    MODEL_DIR / "lstm_autoencoder.keras"
)

print("MODEL LOADED")


# ------------------------------------------------------------
# 1. TRAINING DATA ? THRESHOLD GENERATION
# ------------------------------------------------------------

print()
print("=" * 70)
print("STEP 1: TRAINING RECONSTRUCTION ERRORS")
print("=" * 70)

train_df = pd.read_csv(
    DATA_DIR / "train.csv"
)

train_df["timestamp"] = pd.to_datetime(
    train_df["timestamp"]
)

train_values = train_df[FEATURES].values.astype("float32")

print("TRAIN ROWS:", len(train_values))
print("FEATURES:", len(FEATURES))

print()
print("Creating training windows...")

X_train, train_errors = reconstruction_errors(
    model,
    train_values
)

print("TRAIN WINDOWS:", X_train.shape)

print()
print("TRAINING RECONSTRUCTION ERROR STATISTICS")
print("-" * 70)

print("MIN:", float(np.min(train_errors)))
print("MAX:", float(np.max(train_errors)))
print("MEAN:", float(np.mean(train_errors)))
print("MEDIAN:", float(np.median(train_errors)))
print("STD:", float(np.std(train_errors)))


# ------------------------------------------------------------
# Thresholds MUST come from TRAINING data
# ------------------------------------------------------------

threshold_95 = float(
    np.percentile(train_errors, 95)
)

threshold_99 = float(
    np.percentile(train_errors, 99)
)

print()
print("TRAIN P95 THRESHOLD:", threshold_95)
print("TRAIN P99 THRESHOLD:", threshold_99)


# ------------------------------------------------------------
# Save training threshold information
# ------------------------------------------------------------

thresholds = pd.DataFrame({
    "threshold": [
        "95_percentile",
        "99_percentile"
    ],
    "value": [
        threshold_95,
        threshold_99
    ],
    "source": [
        "2018-2022 training reconstruction errors",
        "2018-2022 training reconstruction errors"
    ]
})

thresholds.to_csv(
    OUTPUT_DIR / "anomaly_thresholds.csv",
    index=False
)


# ------------------------------------------------------------
# 2. 2024 TEST DATA
# ------------------------------------------------------------

print()
print("=" * 70)
print("STEP 2: 2024 TEST EVALUATION")
print("=" * 70)

test_df = pd.read_csv(
    DATA_DIR / "test.csv"
)

test_df["timestamp"] = pd.to_datetime(
    test_df["timestamp"]
)

test_values = test_df[FEATURES].values.astype("float32")

print("TEST ROWS:", len(test_values))
print("FEATURES:", len(FEATURES))

print()
print("Calculating 2024 reconstruction errors...")

X_test, test_errors = reconstruction_errors(
    model,
    test_values
)

print("TEST WINDOWS:", X_test.shape)


# ------------------------------------------------------------
# Test statistics
# ------------------------------------------------------------

print()
print("=" * 70)
print("2024 TEST RECONSTRUCTION ERROR STATISTICS")
print("=" * 70)

print("MIN:", float(np.min(test_errors)))
print("MAX:", float(np.max(test_errors)))
print("MEAN:", float(np.mean(test_errors)))
print("MEDIAN:", float(np.median(test_errors)))
print("STD:", float(np.std(test_errors)))


# ------------------------------------------------------------
# 3. CLASSIFICATION
# ------------------------------------------------------------

timestamps = test_df["timestamp"].iloc[
    WINDOW_SIZE - 1:
].reset_index(drop=True)

result = pd.DataFrame({
    "timestamp": timestamps,
    "reconstruction_error": test_errors,
})

result["status"] = np.select(
    [
        result["reconstruction_error"] >= threshold_99,
        result["reconstruction_error"] >= threshold_95,
    ],
    [
        "CRITICAL",
        "WARNING",
    ],
    default="NORMAL"
)

result["threshold_p95"] = threshold_95
result["threshold_p99"] = threshold_99


# ------------------------------------------------------------
# 4. Summary
# ------------------------------------------------------------

normal_count = int(
    (result["status"] == "NORMAL").sum()
)

warning_count = int(
    (result["status"] == "WARNING").sum()
)

critical_count = int(
    (result["status"] == "CRITICAL").sum()
)

print()
print("=" * 70)
print("2024 ANOMALY SUMMARY")
print("=" * 70)

print("NORMAL:", normal_count)
print("WARNING:", warning_count)
print("CRITICAL:", critical_count)
print("TOTAL:", len(result))

print()
print("WARNING + CRITICAL:", warning_count + critical_count)


# ------------------------------------------------------------
# 5. Save results
# ------------------------------------------------------------

result.to_csv(
    OUTPUT_DIR / "2024_anomaly_scores.csv",
    index=False
)

print()
print("=" * 70)
print("EVALUATION COMPLETE")
print("=" * 70)

print(
    "RESULTS:",
    OUTPUT_DIR / "2024_anomaly_scores.csv"
)

print(
    "THRESHOLDS:",
    OUTPUT_DIR / "anomaly_thresholds.csv"
)

print()
print("Threshold source: 2018-2022 TRAINING DATA")
print("Test data was NOT used to calculate thresholds.")
