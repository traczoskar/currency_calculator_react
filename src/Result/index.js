import "./style.css";

export const Result = ({ result }) => (
    <p className="result">
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)} PLN ={" "}
                <strong>{result.targetAmount.toFixed(2)} {result.currency}</strong>
            </>
        )}
    </p>
);
