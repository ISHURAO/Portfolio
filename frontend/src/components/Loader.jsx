import React, { useEffect, useState } from 'react';
import '../styles/loader.css';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="loader" className={`loader ${!isVisible ? 'hide' : ''}`}>
      <div className="ld-logo">IY</div>
      <div className="ld-track">
        <div className="ld-bar" style={{ width: `${Math.min(progress, 100)}%` }} />
      </div>
      <div className="ld-txt">LOADING</div>
    </div>
  );
}
