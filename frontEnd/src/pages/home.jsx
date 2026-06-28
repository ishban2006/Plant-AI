import { useState } from "react";
import UploadCard from "../components/uploadCard";
import ResultCard from "../components/resultCard";

import "../styles/home.css";

function Home() {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    return (
        <div className="home">
            <div className="container">

                {!result ? (
                    <>
                        <h1 className="heading">🌿 Plant AI</h1>

                        <p className="subHeading">
                            Upload a plant image and identify it instantly.
                        </p>

                        <UploadCard
                            image={image}
                            setImage={setImage}
                            loading={loading}
                            setLoading={setLoading}
                            setResult={setResult}
                        />
                    </>
                ) : (
                    <ResultCard
                        result={result}
                        setImage={setImage}
                        setResult={setResult}
                    />
                )}

            </div>
        </div>
    );
}

export default Home;