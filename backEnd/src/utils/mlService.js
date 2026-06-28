const axios = require("axios");
const FormData = require("form-data");

async function predict(file) {
    const form = new FormData();

    form.append(
        "file",
        file.buffer,
        file.originalname
    );

    const response = await axios.post(
        process.env.PYTHON_API,
        form,
        {
            headers: form.getHeaders()
        }
    );

    return response.data.class;
}

module.exports = { predict };