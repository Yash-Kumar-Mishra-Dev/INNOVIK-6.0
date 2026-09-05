from main import score_priority, MissionPayload

payload = MissionPayload(
    incident_id="INC-123",
    required_resources=["ambulance", "fire-truck"],
    features={"temperature": 105, "version": "v1"}
)

response = score_priority(payload)
print("TEST SUCCESS! Result:", response.dict())
