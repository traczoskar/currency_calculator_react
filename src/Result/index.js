import "./style.css";

export const Result = ({ result }) => {
  return (
    <div>
      {result !== undefined && (
        <div className="result">
          <p className="result__pln">{result.sourceAmount.toFixed(2)} PLN</p>
          <p className="result__info">After calculation:</p>
          <p>
            <strong className="result__exchanged">
              {result.targetAmount.toFixed(2)} {result.currency}
            </strong>
          </p>
          <img className="result__flag" src={result.flag} alt="Flag" />
        </div>
      )}
    </div>
  );
};
