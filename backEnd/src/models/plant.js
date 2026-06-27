const {Schema} = require("mongoose");
const {model} = require("mongoose");

const plantSchema = new Schema({
    number: {
        type: Number,
        required: true,
        unique: true,
    },
    common_name:String,
    botanical_name:String,
    medicinal_benefits : [
        {
            benefit : String,
        }
    ],
    family: String,
})


const plant = new model("plant", plantSchema);

module.exports = {plant};