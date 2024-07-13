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
      <ResultContainer>
        <SourceAmount>{result.sourceAmount.toFixed(2)} PLN</SourceAmount>
        <ResultInfo>After calculation:</ResultInfo>
        <TargetAmount>
          {result.targetAmount.toFixed(2)} {result.currency}
        </TargetAmount>
      </ResultContainer>
    )}
  </div>
);
