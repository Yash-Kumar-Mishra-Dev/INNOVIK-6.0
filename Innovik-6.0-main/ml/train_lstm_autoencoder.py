import numpy as np
import pandas as pd
from pathlib import Path
import tensorflow as tf
from tensorflow.keras import layers, Model
import joblib

# ============================================================
# CONFIG
# ============================================================

DATA_DIR = Path("ml/data")
MODEL_DIR = Path("ml/models")
OUTPUT_DIR = Path("ml/outputs")

MODEL_DIR.mkdir(parents=True, exist_ok=True)
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
LATENT_DIM = 32
BATCH_SIZE = 64
EPOCHS = 30
LEARNING_RATE = 0.001

# ============================================================
# LOAD DATA
# ============================================================

print("=" * 70)
print("RAKSHASETU LSTM AUTOENCODER")
print("=" * 70)

train_df = pd.read_csv(DATA_DIR / "train.csv")
val_df = pd.read_csv(DATA_DIR / "validation.csv")

train_df["timestamp"] = pd.to_datetime(train_df["timestamp"])
val_df["timestamp"] = pd.to_datetime(val_df["timestamp"])

train_values = train_df[FEATURES].values.astype("float32")
val_values = val_df[FEATURES].values.astype("float32")

print("TRAIN ROWS:", len(train_values))
print("VAL ROWS:", len(val_values))
print("FEATURES:", len(FEATURES))
print("WINDOW:", WINDOW_SIZE)

# ============================================================
# CREATE TIME WINDOWS
# ============================================================

def create_windows(data, window_size):
    n_windows = len(data) - window_size + 1

    windows = np.lib.stride_tricks.sliding_window_view(
        data,
        window_shape=(window_size, data.shape[1])
    )

    windows = windows.reshape(n_windows, window_size, data.shape[1])

    return windows.astype("float32")


X_train = create_windows(train_values, WINDOW_SIZE)
X_val = create_windows(val_values, WINDOW_SIZE)

print("TRAIN WINDOWS:", X_train.shape)
print("VAL WINDOWS:", X_val.shape)

# ============================================================
# LSTM AUTOENCODER
# ============================================================

inputs = layers.Input(
    shape=(WINDOW_SIZE, len(FEATURES)),
    name="input_sequence"
)

# Encoder
x = layers.LSTM(
    64,
    return_sequences=True,
    name="encoder_lstm_1"
)(inputs)

x = layers.LSTM(
    LATENT_DIM,
    return_sequences=False,
    name="encoder_lstm_2"
)(x)

latent = layers.Dense(
    LATENT_DIM,
    activation="linear",
    name="latent_vector"
)(x)

# Decoder
x = layers.RepeatVector(
    WINDOW_SIZE,
    name="repeat_latent"
)(latent)

x = layers.LSTM(
    LATENT_DIM,
    return_sequences=True,
    name="decoder_lstm_1"
)(x)

x = layers.LSTM(
    64,
    return_sequences=True,
    name="decoder_lstm_2"
)(x)

outputs = layers.TimeDistributed(
    layers.Dense(len(FEATURES)),
    name="reconstruction"
)(x)

autoencoder = Model(
    inputs,
    outputs,
    name="RakshaSetu_LSTM_Autoencoder"
)

autoencoder.compile(
    optimizer=tf.keras.optimizers.Adam(
        learning_rate=LEARNING_RATE
    ),
    loss="mse"
)

autoencoder.summary()

# ============================================================
# CALLBACKS
# ============================================================

callbacks = [
    tf.keras.callbacks.EarlyStopping(
        monitor="val_loss",
        patience=5,
        restore_best_weights=True
    ),

    tf.keras.callbacks.ModelCheckpoint(
        MODEL_DIR / "lstm_autoencoder.keras",
        monitor="val_loss",
        save_best_only=True
    ),

    tf.keras.callbacks.CSVLogger(
        OUTPUT_DIR / "training_history.csv"
    )
]

# ============================================================
# TRAIN
# ============================================================

print()
print("=" * 70)
print("STARTING TRAINING")
print("=" * 70)

history = autoencoder.fit(
    X_train,
    X_train,
    validation_data=(X_val, X_val),
    epochs=EPOCHS,
    batch_size=BATCH_SIZE,
    shuffle=False,
    callbacks=callbacks,
    verbose=1
)

# ============================================================
# SAVE FINAL MODEL
# ============================================================

autoencoder.save(
    MODEL_DIR / "lstm_autoencoder_final.keras"
)

print()
print("=" * 70)
print("TRAINING COMPLETE")
print("=" * 70)
print("Best model:")
print(MODEL_DIR / "lstm_autoencoder.keras")
print()
print("Final model:")
print(MODEL_DIR / "lstm_autoencoder_final.keras")
print()
print("Training history:")
print(OUTPUT_DIR / "training_history.csv")
