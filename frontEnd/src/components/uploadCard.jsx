import "../styles/upload.css";

export default function UploadCard({ image, setImage, loading, setLoading, setResult }) {
    function handleImage(e) {
        const file = e.target.files[0];
        if(file){
            setImage(file);
        }
    }

    const removeImage = () => {
        setImage(null);
    };

    const preview = image ? URL.createObjectURL(image) : null;

    return (
        <div className="uploadBox">

            <h2>Upload Plant Image</h2>
            <p className="hint">
            Supported formats: JPG • PNG • JPEG
            </p>

            {!image && (
                <label htmlFor="plantImage" className="uploadLabel">
                    Click here to upload a plant image
                </label>
            )}
            <input id="plantImage" className="uploadInput" type="file" accept="image/*" onChange={handleImage} />
            
            {preview && (
                <>
                    <img className="preview" alt="Plant Image" src={preview} />

                    <div className="imageInfo">
                        <h3>✅ Image Selected</h3>
                        <p>{image.name}</p>

                        <div className="imageActions">
                            <label htmlFor="plantImage" className="changeBtn">
                                Change Image
                            </label>

                            <button className="removeBtn" onClick={removeImage}>
                                Remove
                            </button>
                        </div>

                    </div>

                    <button className="identifyBtn" disabled={loading}>
                        {loading ? "Analyzing..." : "Identify Plant"}
                    </button>
                </>
            )}

        </div>
    );
}