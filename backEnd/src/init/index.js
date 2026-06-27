/* Initialize DataBase */
const mongoose = require("mongoose");
const pData = require("./data");
const Plant = require("../models/plant");
require("dotenv").config();

main()
    .then(() => {
        console.log("Connected to DataBase");
    })
    .catch((err) => {
        console.log(err);
    });

const atlasURL = process.env.MONGO_ATLAS_URL;
async function main() {
    await mongoose.connect(atlasURL);
}

const initDB = async () => {
    await Plant.deleteMany({});
    await Plant.insertMany(pData.data);
    console.log("Data initialized");
};

initDB();