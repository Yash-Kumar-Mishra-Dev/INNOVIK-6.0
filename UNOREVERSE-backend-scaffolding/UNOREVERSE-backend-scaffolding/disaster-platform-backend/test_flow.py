import urllib.request
import urllib.error
import json
import time

url = "http://localhost:3001/api/v1/mission"
payload = {
    "incident_id": "INC-TEST-001",
    "required_resources": ["ambulance", "medic"],
    "sensor_data": [
        {"type": "thermal", "value": 110},
        {"type": "optical", "status": "clear"}
    ]
}

req = urllib.request.Request(url, method="POST")
req.add_header('Content-Type', 'application/json')
data = json.dumps(payload).encode('utf-8')

print(f"Sending POST request to {url}...")
try:
    with urllib.request.urlopen(req, data=data) as response:
        response_body = response.read().decode('utf-8')
        print(f"Status Code: {response.status}")
        print("Response Body:")
        print(json.dumps(json.loads(response_body), indent=2))
        print("\n--- TEST SUCCESSFUL ---")
except urllib.error.URLError as e:
    print(f"Request failed: {e}")
