import { LoadingSpinner } from "./LoadingSpinner/styled";
import { LoadingText, LoadingAnimation, StyledLoading } from "./styled";

export const Loading = () => (
  <StyledLoading data-testid="loading">
    <LoadingAnimation>
      <LoadingText>
        Loading currency rates ...
        <LoadingSpinner />
      </LoadingText>
    </LoadingAnimation>
  </StyledLoading>
);
