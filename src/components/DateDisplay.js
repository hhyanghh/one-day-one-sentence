import React, { useState, useEffect } from "react";

import classes from "./DateDisplay.module.css";

const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    updateDate();
  }, []);

  const updateDate = () => {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = today.toLocaleDateString("ko-KR", options);
    setCurrentDate(formattedDate);
  };

  return (
    <div>
      <h3 className={classes.date}>{currentDate}</h3>
    </div>
  );
};

export default DateDisplay;
