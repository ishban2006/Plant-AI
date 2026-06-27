const {Schema} = require("mongoose");
const {model} = require("mongoose");

const plantSchema = new Schema({
    number: {
        type: Number,
        unique: true,
    },
    common: String,
    bota: String,
    medB : [String],
    family: String,
})

const Plant = new model("Plant", plantSchema);

module.exports = Plant;