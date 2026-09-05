import numpy as np
import pandas as pd
from pathlib import Path
import tensorflow as tf
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix,
)

DATA_DIR = Path("ml/data")
MODEL_DIR = Path("ml/models")

FEATURES = [
    "temperature_C",
    "dewpoint_C",
    "pressure_hPa",
    "wind_speed_kmh",
    "wind_direction_deg",
    "relative_humidity_pct",
]

WINDOW_SIZE = 24

# Synthetic anomaly settings
ANOMALY_RATIO = 0.03
ANOMALY_STD = 4.5

print("=" * 70)
print("RAKSHASETU - LSTM AUTOENCODER ACCURACY VALIDATION")
print("=" * 70)

# ------------------------------------------------------------
# Load model
# ------------------------------------------------------------

model = tf.keras.models.load_model(
    MODEL_DIR / "lstm_autoencoder.keras"
)

# ------------------------------------------------------------
# Load 2024 test data
# ------------------------------------------------------------

df = pd.read_csv(DATA_DIR / "test.csv")
df["timestamp"] = pd.to_datetime(df["timestamp"])

values = df[FEATURES].values.astype("float32")

print("2024 TEST ROWS:", len(values))

# ------------------------------------------------------------
# Create clean baseline windows
# ------------------------------------------------------------

n_windows = len(values) - WINDOW_SIZE + 1

windows = np.lib.stride_tricks.sliding_window_view(
    values,
    window_shape=(WINDOW_SIZE, len(FEATURES))
)

X_clean = windows.reshape(
    n_windows,
    WINDOW_SIZE,
    len(FEATURES)
).astype("float32")

# ------------------------------------------------------------
# Inject synthetic anomalies
# ------------------------------------------------------------

rng = np.random.default_rng(42)

X_anomaly = X_clean.copy()

n_anomaly = int(len(X_anomaly) * ANOMALY_RATIO)

anomaly_indices = rng.choice(
    len(X_anomaly),
    size=n_anomaly,
    replace=False
)

# Inject anomaly into temperature feature
temperature_std = np.std(
    X_clean[:, :, 0]
)

for idx in anomaly_indices:
    X_anomaly[idx, :, 0] += ANOMALY_STD * temperature_std

print("TOTAL WINDOWS:", len(X_anomaly))
print("INJECTED ANOMALIES:", n_anomaly)

# ------------------------------------------------------------
# Ground truth
# ------------------------------------------------------------

y_true = np.zeros(len(X_anomaly), dtype=int)
y_true[anomaly_indices] = 1

# ------------------------------------------------------------
# Reconstruction
# ------------------------------------------------------------

print()
print("Calculating reconstruction errors...")

reconstructed = model.predict(
    X_anomaly,
    batch_size=64,
    verbose=1
)

errors = np.mean(
    np.square(X_anomaly - reconstructed),
    axis=(1, 2)
)

# ------------------------------------------------------------
# Load TRAINING thresholds
# ------------------------------------------------------------

thresholds = pd.read_csv(
    "ml/outputs/anomaly_thresholds.csv"
)

threshold_95 = float(
    thresholds.loc[
        thresholds["threshold"] == "95_percentile",
        "value"
    ].iloc[0]
)

threshold_99 = float(
    thresholds.loc[
        thresholds["threshold"] == "99_percentile",
        "value"
    ].iloc[0]
)

# ------------------------------------------------------------
# Binary anomaly prediction
# Use P95 as anomaly threshold
# ------------------------------------------------------------

y_pred = (
    errors >= threshold_95
).astype(int)

# ------------------------------------------------------------
# Metrics
# ------------------------------------------------------------

accuracy = accuracy_score(y_true, y_pred)
precision = precision_score(
    y_true,
    y_pred,
    zero_division=0
)
recall = recall_score(
    y_true,
    y_pred,
    zero_division=0
)
f1 = f1_score(
    y_true,
    y_pred,
    zero_division=0
)

cm = confusion_matrix(
    y_true,
    y_pred
)

print()
print("=" * 70)
print("ACCURACY RESULTS")
print("=" * 70)

print(f"Accuracy : {accuracy:.4f} ({accuracy * 100:.2f}%)")
print(f"Precision: {precision:.4f} ({precision * 100:.2f}%)")
print(f"Recall   : {recall:.4f} ({recall * 100:.2f}%)")
print(f"F1 Score : {f1:.4f} ({f1 * 100:.2f}%)")

print()
print("=" * 70)
print("CONFUSION MATRIX")
print("=" * 70)

print("                 Predicted")
print("              Normal  Anomaly")
print(f"Actual Normal  {cm[0,0]:6d}  {cm[0,1]:7d}")
print(f"Actual Anomaly {cm[1,0]:6d}  {cm[1,1]:7d}")

print()
print("=" * 70)
print("THRESHOLDS")
print("=" * 70)

print("TRAIN P95:", threshold_95)
print("TRAIN P99:", threshold_99)

print()
print("=" * 70)
print("VALIDATION COMPLETE")
print("=" * 70)
