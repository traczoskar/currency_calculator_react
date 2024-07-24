import { useCurrentDate } from "../hooks/useCurrentDate";
import { ClockContainer, ClockPrompt } from "./styled";

export const Clock = () => {
  const date = useCurrentDate();

  const formattedDate = date.toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <ClockContainer data-testid="clock">
      Today is&nbsp;
      <ClockPrompt>{formattedDate}</ClockPrompt>
    </ClockContainer>
  );
};
