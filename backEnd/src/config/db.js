const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/PantAI";
const atlasURL = process.env.MONGO_ATLAS_URL;

module.exports.configDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected to Database");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}