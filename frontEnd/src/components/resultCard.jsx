import "../styles/result.css";

export default function ResultCard({ result }) {
    if (!result) return null;

    return (
        <div className="resultCard">

            <div className="success">
                🌿 Plant Identified Successfully
            </div>

            <div className="infoSection">
                <h4>Common Name</h4>
                <p>{result.common}</p>
            </div>

            <div className="infoSection">
                <h4>Botanical Name</h4>
                <p className="botanical">{result.bota}</p>
            </div>

            <div className="infoSection">
                <h4>Family</h4>
                <p>{result.family}</p>
            </div>

            <div className="infoSection">
                <h4>Medicinal Benefits</h4>

                <ul className="benefits">
                    {result.medB.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}