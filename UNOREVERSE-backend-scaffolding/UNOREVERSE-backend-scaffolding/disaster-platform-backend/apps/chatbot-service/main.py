from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(
    title="Chatbot & NLP Service",
    description="Multilingual conversational assistant for disaster guidance",
    version="1.0.0",
)

class ChatMessage(BaseModel):
    citizen_id: str
    message: str
    language: str = "en"

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "chatbot-service"}

@app.post("/citizen/chat")
def process_chat(msg: ChatMessage):
    # Placeholder for chatbot logic (Rasa / LLM translation)
    return {
        "reply": f"Received your message in {msg.language}. This is a placeholder response.",
        "resolved": False
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8002)
