# 🌿 PlantAI

PlantAI is an AI-powered web application that identifies medicinal plants from uploaded images using a deep learning model. Users can upload a plant image, and the application predicts the plant species before displaying detailed information such as its common name, botanical name, plant family, and medicinal benefits.

The application follows a multi-service architecture consisting of a React frontend, an Express.js backend, a FastAPI-based machine learning service, and MongoDB Atlas for storing plant information. The deep learning model is built using PyTorch and integrates seamlessly with the web application to provide fast and accurate plant identification.

---

## Live Demo

* 🌐 **Frontend:** https://plant-ai-frontend.onrender.com
* ⚙️ **Backend API:** https://plant-ai-backend-03iz.onrender.com
* 🤖 **Machine Learning API:** https://plant-ai-jywm.onrender.com

---

## Features

* 🌱 AI-powered medicinal plant identification from uploaded images
* 📷 Image upload with live preview
* 🤖 Deep learning-based prediction using a ConvNeXt Tiny model
* 📖 Displays:

  * Common Name
  * Botanical Name
  * Plant Family
  * Medicinal Benefits
* ⚡ Fast communication between the frontend, backend, and ML service
* ☁️ MongoDB Atlas integration for plant information storage
* 📱 Responsive and modern user interface
* 🔍 Prediction pipeline powered by FastAPI and PyTorch

---

## Tech Stack

### Frontend

* React.js
* Axios
* CSS3

### Backend

* Node.js
* Express.js
* Multer
* MongoDB Atlas
* Mongoose

### Machine Learning

* FastAPI
* PyTorch
* TorchVision
* Pillow
* ConvNeXt Tiny

---

## Project Workflow

1. User uploads a plant image from the React frontend.
2. The image is sent to the Express.js backend.
3. The backend forwards the image to the FastAPI prediction service.
4. The PyTorch model predicts the plant class.
5. The backend queries MongoDB Atlas using the predicted class ID.
6. Plant details are returned to the frontend.
7. The frontend displays the identified plant along with its botanical information and medicinal benefits.

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/PlantAI.git
cd PlantAI
```

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Machine Learning Service

```bash
cd model
pip install -r requirements.txt
uvicorn app:app --reload
```

---

## Environment Variables

### Backend (.env)

```env
MONGO_URI=your_mongodb_connection_string
PORT=8080
ML_API_URL=your_fastapi_url
```

### Frontend (.env)

```env
VITE_API_URL=your_backend_url
```

### Machine Learning Service (.env)

```env
MODEL_PATH=path_to_trained_model
```

---

## Screenshots

Add screenshots or GIFs here:

* Landing Page
* Image Upload
* Prediction Result
* Plant Details
* Mobile View

---

## Future Improvements

* Plant Disease Detection
* Confidence Score Visualization
* Multiple Plant Detection in a Single Image
* Plant Care Recommendations
* Nearby Nursery Recommendations
* User Search History
* Favorite Plants Collection

---

## Author

**Ishaan Bansal**
