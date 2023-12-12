import React from "react";

import SentenceDisplay from "./components/SentenceDisplay";
import DateDisplay from "./components/DateDisplay";

import classes from "./App.module.css";

function App() {
  // assets/img 폴더에 있는 이미지 파일 목록
  const imageList = [
    "bg_01.JPG",
    "bg_02.JPG",
    "bg_03.JPG",
    // ... (다른 이미지들 추가)
  ];
  // 랜덤 이미지를 선택하는 함수
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    return `./assets/img/${imageList[randomIndex]}`;
  };

  const backgroundImageStyle = {
    backgroundImage: `url("${getRandomImage()}")`,
  };

  console.log(backgroundImageStyle);
  return (
    <div className={classes.App} style={backgroundImageStyle}>
      <DateDisplay />
      <SentenceDisplay />
    </div>
  );
}

export default App;
