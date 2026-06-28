import "../styles/result.css";

export default function ResultCard({
    result,
    setImage,
    setResult,
}) {
    if (!result) return null;

    function identifyAnother() {
        setImage(null);
        setResult(null);
    }

    return (
        <div className="resultCard">

            <h1 className="plantName">
                🌿 {result.common}
            </h1>

            <p className="botanicalName">
                {result.bota}
            </p>

            <div className="divider"></div>

            <div className="resultRow">
                <span className="label">Family</span>
                <span className="value">{result.family}</span>
            </div>

            <div className="divider"></div>

            <div className="benefitSection">

                <h3>Medicinal Benefits</h3>

                <ul className="benefits">
                    {result.medB.map((benefit, index) => (
                        <li key={index}>
                            {benefit}
                        </li>
                    ))}
                </ul>

            </div>

            <button
                className="newPlantBtn"
                onClick={identifyAnother}
            >
                🌱 Identify Another Plant
            </button>

        </div>
    );
}