// SplashScreen.js
import React, { useEffect } from 'react';
import './SplashScreen.css'; // 스타일 추가
import start from './assets/start.png';

const SplashScreen = ({ onSplashFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSplashFinish();
    }, 2000); // 3초 후에 메인 화면으로 전환

    return () => clearTimeout(timer);
  }, [onSplashFinish]);

  return (
    <div className="splash-screen">
      <img className="splash-img" src={start} alt="start"></img>
    </div>
  );
};

export default SplashScreen;
