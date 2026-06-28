const multer = require("multer");
const storage = multer.memoryStorage();

module.exports.upload = multer({ storage });

module.exports.dispError = (err, req, res, next) => {
    let {statusCode = 500, message = "Something Went Wrong"} = err;

    return res.status(statusCode).json({ message });
}