// src/components/SentenceDisplay.js

import React, { useState, useEffect } from "react";
import { sentences } from "../data/sentences";

import classes from "./SentenceDisplay.module.css";

const SentenceDisplay = () => {
  const [currentSentence, setCurrentSentence] = useState("");

  useEffect(() => {
    // 로컬 스토리지에서 저장된 데이터 불러오기
    const storedData = JSON.parse(localStorage.getItem("sentenceData"));

    // 저장된 데이터가 있고, 오늘 날짜와 저장된 데이터의 날짜가 같으면 저장된 문장 사용
    if (storedData && isSameDay(new Date(storedData.date), new Date())) {
      setCurrentSentence(storedData.sentence);
    } else {
      // 페이지 로딩 시 새로운 문장 설정
      setRandomSentence();
    }
  }, []);

  const setRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const newSentence = sentences[randomIndex];

    // 새로운 문장과 현재 날짜를 저장
    const newData = {
      sentence: newSentence,
      date: new Date().toISOString().split("T")[0], // 현재 날짜를 "YYYY-MM-DD" 형식으로 변환
    };

    setCurrentSentence(newSentence);
    // 로컬 스토리지에 데이터 저장
    localStorage.setItem("sentenceData", JSON.stringify(newData));
  };

  // 두 날짜가 같은 날인지 확인하는 함수
  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <div>
      <h1 className={classes.sentence}>{currentSentence}</h1>
    </div>
  );
};

export default SentenceDisplay;
