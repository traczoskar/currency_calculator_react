import { useState, useEffect } from "react";
import "./style.css";

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="clock">
      Today is&nbsp;
      <strong className="clock__prompt">
        {date.toLocaleString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </strong>
    </p>
  );
};
