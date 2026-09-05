import os
import asyncio
import logging
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
import uvicorn
import json

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="AI/Anomaly Service", version="1.0.0")

KAFKA_BROKER = os.getenv("KAFKA_BROKER", "localhost:9092")
KAFKA_TOPIC_SENSING_FUSED = os.getenv("KAFKA_TOPIC_SENSING_FUSED", "sensing.fused")
SCORING_STRATEGY_DEFAULT = os.getenv("SCORING_STRATEGY_DEFAULT", "formula")
CONFIDENCE_THRESHOLD = float(os.getenv("CONFIDENCE_THRESHOLD", "0.8"))

# ---------------- Models ----------------
class AnomalyRequest(BaseModel):
    zone: str
    reports_per_hour: int
    sensor_value: float

class AnomalyResponse(BaseModel):
    is_anomaly: bool
    confidence_score: float

class MissionPayload(BaseModel):
    incident_id: str
    required_resources: list[str]
    features: dict = {}

class PriorityResponse(BaseModel):
    computed_priority: float
    actual_priority: float
    priority_method: str
    confidence: float

class RetrainRequest(BaseModel):
    dataset_id: str | None = None

# ---------------- Endpoints ----------------
@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.post("/api/v1/anomaly/detect", response_model=AnomalyResponse)
def detect_anomaly(req: AnomalyRequest):
    # Dummy logic for anomaly detection
    is_anomaly = req.reports_per_hour > 50 or req.sensor_value > 90.0
    return {"is_anomaly": is_anomaly, "confidence_score": 0.85 if is_anomaly else 0.1}

@app.post("/ai/priority/score", response_model=PriorityResponse)
def score_priority(payload: MissionPayload):
    # Formula logic
    formula_score = len(payload.required_resources) * 10.0
    
    # Mock learned logic
    learned_available = True
    learned_score = formula_score * 1.2
    learned_confidence = 0.85

    method = SCORING_STRATEGY_DEFAULT
    final_score = formula_score
    confidence = 1.0

    if method == "learned" or learned_available:
        if learned_confidence >= CONFIDENCE_THRESHOLD:
            method = "learned"
            final_score = learned_score
            confidence = learned_confidence
        else:
            method = "formula"
            confidence = 1.0

    return PriorityResponse(
        computed_priority=final_score,
        actual_priority=final_score,
        priority_method=method,
        confidence=confidence
    )

@app.post("/ai/priority/retrain")
def retrain_model(req: RetrainRequest, background_tasks: BackgroundTasks):
    def training_job():
        logger.info(f"Starting retraining pipeline... dataset={req.dataset_id}")
        import time
        time.sleep(5)
        logger.info("Retraining completed.")
        
    background_tasks.add_task(training_job)
    return {"status": "queued", "message": "Retraining job queued"}

# ---------------- Kafka Consumer ----------------
async def consume_sensing_events():
    logger.warning("Kafka consumer disabled due to Python 3.13 aiokafka compatibility issues. Mocking consumer loop.")
    while True:
        await asyncio.sleep(10)

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(consume_sensing_events())

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

