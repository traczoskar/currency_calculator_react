import { useState, useEffect } from "react";
import { ClockContainer, ClockPrompt } from "./styled";

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  const formattedDate = date.toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ClockContainer>
      Today is&nbsp;
      <ClockPrompt>{formattedDate}</ClockPrompt>
    </ClockContainer>
  );
};
