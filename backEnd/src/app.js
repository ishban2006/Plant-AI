const express = require("express");
const cors = require("cors");

const path = require("path");
require("dotenv").config();

const app = express();

const {dispError} = require("./config/middleware");

const predictRoute = require("./expressRoutes/predict");

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174"
    ],
    credentials: true
}));
app.use(express.urlencoded({extended : true}));     //To parse data of an id

app.use(express.json());
app.use("/predict", predictRoute);

app.get("/", (req, res) => {
    res.send("BackEnd Working!!!");
});

// Display errors
app.use(dispError);

// Starting the server
const port = process.env.PORT || 8080;
const {configDB} = require("./config/db");
const init = async () => {
    try {
        await configDB();           // First connect Database
        
        app.listen(port, () => {
            console.log(`server is listening to port ${port}`);
        });
    } catch (err) {
        console.error("Failed to start server:", err);
    }
};

init();