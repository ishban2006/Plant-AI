const Plant = require("../models/plant");
const { predict } = require("../utils/mlService");

const predictPlant = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload an image."
            });
        }

        const classId = await predict(req.file);
        const plant = await Plant.findOne({
            number: classId
        });

        if (!plant) {
            return res.status(404).json({
                success: false,
                message: "Plant not found."
            });
        }

        return res.status(200).json({
            success: true,
            classId,
            plant
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = { predictPlant };