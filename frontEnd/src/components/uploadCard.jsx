import "../styles/upload.css";
import axios from "axios";

export default function UploadCard({
    image,
    setImage,
    loading,
    setLoading,
    setResult,
}) {

    function handleImage(e) {
        const file = e.target.files[0];

        if (file) {
            setImage(file);
        }
    }

    function removeImage() {
        setImage(null);
    }

    async function identifyPlant() {
        if (!image) return;

        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("file", image);

            const response = await axios.post(
                "http://localhost:8080/predict",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setResult(response.data.plant);

        } catch (err) {
            console.error(err);
            alert("Unable to identify plant.");
        } finally {
            setLoading(false);
        }
    }

    const preview = image ? URL.createObjectURL(image) : null;

    return (
        <div className="uploadBox">

            <h2>Upload Plant Image</h2>

            <p className="hint">
                Supported formats: JPG • PNG • JPEG
            </p>

            {!image ? (
                <>
                    <label
                        htmlFor="plantImage"
                        className="uploadLabel"
                    >
                        Click here to upload a plant image
                    </label>

                    <input
                        id="plantImage"
                        className="uploadInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                    />
                </>
            ) : (
                <>
                    <img
                        className="preview"
                        src={preview}
                        alt="Plant"
                    />

                    <div className="imageActions">

                        <label
                            htmlFor="plantImage"
                            className="changeBtn"
                        >
                            Change Image
                        </label>

                        <input
                            id="plantImage"
                            className="uploadInput"
                            type="file"
                            accept="image/*"
                            onChange={handleImage}
                        />

                        <button
                            className="removeBtn"
                            onClick={removeImage}
                        >
                            Remove
                        </button>

                    </div>

                    <button
                        className="identifyBtn"
                        onClick={identifyPlant}
                        disabled={loading}
                    >
                        {loading ? "Analyzing..." : "Identify Plant"}
                    </button>
                </>
            )}

        </div>
    );
}