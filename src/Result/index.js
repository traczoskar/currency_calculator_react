import {
  ResultContainer,
  SourceAmount,
  ResultInfo,
  TargetAmount,
  Flag,
} from "./styled";

export const Result = ({ result }) => (
  <div>
    {result && (
      <ResultContainer>
        <SourceAmount>{result.sourceAmount.toFixed(2)} PLN</SourceAmount>
        <ResultInfo>After calculation:</ResultInfo>
        <TargetAmount>
          {result.targetAmount.toFixed(2)} {result.currency}
        </TargetAmount>
        <Flag src={result.flag} alt="Flag" />
      </ResultContainer>
    )}
  </div>
);
