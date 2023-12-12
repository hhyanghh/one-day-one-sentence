import React, { useState, useEffect } from "react";
import { sentences } from "../data/sentences";

const SentenceDisplay = () => {
  const [currentSentence, setCurrentSentence] = useState("");

  useEffect(() => {
    // 페이지 로딩 시 랜덤한 문장 설정
    setRandomSentence();
  }, []);

  const setRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    setCurrentSentence(sentences[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h1>{currentSentence}</h1>
    </div>
  );
};

export default SentenceDisplay;
