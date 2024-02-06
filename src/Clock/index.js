import { useCurrentDate } from "./useCurrentDate";
import { ClockContainer, ClockPrompt } from "./styled";

export const Clock = () => {
  const formattedDate = useCurrentDate();

  return (
    <ClockContainer>
      Today is&nbsp;
      <ClockPrompt>{formattedDate}</ClockPrompt>
    </ClockContainer>
  );
};
