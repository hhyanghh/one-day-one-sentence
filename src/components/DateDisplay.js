import React, { useState, useEffect } from "react";

const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // 페이지 로딩 시 현재 날짜 설정
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
    <div style={{ textAlign: "right", margin: "10px" }}>
      <p>{currentDate}</p>
    </div>
  );
};

export default DateDisplay;
