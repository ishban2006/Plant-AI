/* Initialize DataBase */
const mongoose = require("mongoose");
const pData = require("./data");
const Plant = require("../models/plant");

require("dotenv").config();

const atlasURL = process.env.MONGO_ATLAS_URL;

async function main() {
    await mongoose.connect(atlasURL);
    console.log("Connected to Database");

    await initDB(); 
}

main().catch((err) => {
    console.log(err);
});

const initDB = async () => {
    const plants = pData.data.map((plant, index) => ({
        ...plant,
        number: index,
    }));

    await Plant.insertMany(plants);

    console.log("Data initialized");

    await mongoose.connection.close();
};