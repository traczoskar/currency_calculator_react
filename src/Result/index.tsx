import { ResultData } from "../types/types";
import {
  ResultContainer,
  SourceAmount,
  ResultInfo,
  TargetAmount,
} from "./styled";

interface ResultProps {
  result: ResultData;
}

export const Result: React.FC<ResultProps> = ({ result }) => (
  <div>
    {result && (
      <ResultContainer data-testid="result-container">
        <SourceAmount>{result.sourceAmount.toFixed(2)} PLN</SourceAmount>
        <ResultInfo>After calculation:</ResultInfo>
        <TargetAmount data-testid="result">
          {result.targetAmount} {result.currency}
        </TargetAmount>
      </ResultContainer>
    )}
  </div>
);
