const express = require("express");
const router = express.Router();

const { upload } = require("../config/middleware");
const { predictPlant } = require("../controllers/predict");

router.post(
    "/",
    upload.single("file"),
    predictPlant
);

module.exports = router;