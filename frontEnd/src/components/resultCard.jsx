export default function ResultCard({ result }) {
    if (!result) return null;
    return (
        <div>

            <h2>{result.commonName}</h2>
            <h3>{result.botanicalName}</h3>

            <ul>
                {result.benefits.map((benefit,index)=>
                    <li key={index}>
                        {benefit}
                    </li>
                )}
            </ul>

        </div>
    );
}