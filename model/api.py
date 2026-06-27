from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException, UploadFile, File
from inference import load_model, predict
from PIL import Image
import io


@asynccontextmanager
async def lifespan(app: FastAPI):
    load_model("checkpoint.pt")  # loads once at startup
    yield

app = FastAPI(lifespan=lifespan)

@app.post("/predict")
async def classify(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")
        class_id = predict(image)
        return {"class": class_id}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))