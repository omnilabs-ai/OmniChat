from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import time
from typing import Optional

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:61000", "http://localhost:5173"],  # Only allow this specific origin
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Pydantic models for request and response
class ChatRequest(BaseModel):
    message: str
    model: Optional[str] = "gpt-3.5-turbo"

class TokenUsage(BaseModel):
    prompt_tokens: int
    completion_tokens: int
    total_tokens: int

class ChatResponse(BaseModel):
    id: int
    message: str
    model: str
    timestamp: float
    tokens_used: TokenUsage

class Message(BaseModel):
    text: str

# Sample conversation history to simulate a database
conversations = []

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/api/messages")
async def create_message(message: Message):
    time.sleep(3)
    return {"message": f"Received: {message.text}"}

@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        # Simulate processing time
        time.sleep(1)
        
        # Create a mock response
        response = ChatResponse(
            id=len(conversations) + 1,
            message=f"This is a test response to: {request.message}",
            model=request.model,
            timestamp=time.time(),
            tokens_used=TokenUsage(
                prompt_tokens=50,
                completion_tokens=30,
                total_tokens=80
            )
        )
        
        conversations.append(response)
        return response

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
