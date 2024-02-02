import { useState, useEffect } from "react";
import "./style.css";

export const Clock = () => {
  const [promptDate, setPromptDate] = useState();
  const [promptTime, setPromptTime] = useState();

  const date = new Date();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPromptDate(
        date.toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
      setPromptTime(date.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [date]);

  return (
    <p className="clock">
      Today is&nbsp;
      <strong className="clock__prompt">
        {promptDate}, {promptTime}
      </strong>
    </p>
  );
};
