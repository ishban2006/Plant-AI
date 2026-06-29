# 🌿 PlantAI

PlantAI is an AI-powered web application that identifies medicinal plants from uploaded images using a deep learning model. Users can upload a plant image, and the application predicts the plant species before displaying detailed information such as its common name, botanical name, family, and medicinal benefits.

The project combines a React frontend, an Express.js backend, a FastAPI-based machine learning service, and MongoDB Atlas for storing plant information. The machine learning model is built using PyTorch and integrates seamlessly with the web application to provide fast and accurate plant identification.

## Features

* 🌱 AI-powered plant identification from uploaded images
* 📷 Image upload with live preview
* 🤖 Deep learning-based prediction using a ConvNeXt Tiny model
* 📖 Displays:

  * Common Name
  * Botanical Name
  * Plant Family
  * Medicinal Benefits
* ⚡ Fast API communication between the frontend, backend, and ML model
* ☁️ MongoDB Atlas integration for plant information storage
* 📱 Responsive and modern user interface

## Tech Stack

### Frontend

* React.js
* Axios
* CSS

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

## Project Workflow

1. The user uploads a plant image.
2. The React frontend sends the image to the Express backend.
3. The backend forwards the image to the FastAPI prediction service.
4. The deep learning model predicts the plant class.
5. The backend retrieves the corresponding plant information from MongoDB Atlas.
6. The identified plant details are returned and displayed to the user.
