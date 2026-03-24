import React, { useEffect } from 'react';
import '../styles/hero.css';

export default function Hero() {
  useEffect(() => {
    const words = ['Full Stack Developer', 'Frontend Expert', 'Backend Specialist'];
    let wordIndex = 0;
    let charIndex = 0;
    const typingElement = document.querySelector('.h-typing');

    const type = () => {
      if (charIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(() => {
          charIndex = 0;
          typingElement.textContent = '';
          wordIndex = (wordIndex + 1) % words.length;
          type();
        }, 2000);
      }
    };

    setTimeout(type, 500);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="h-badge">
          <span className="h-dot"></span>
          Available for work
        </div>

        <h1 className="h-name">
          <span>Hi, I'm</span>
          <span className="grad">Ishu Yadav</span>
        </h1>

        <p className="h-role">Building amazing digital experiences</p>

        <div className="h-typing"></div>

        <div className="h-btns">
          <button className="btn-g">View My Work</button>
          <button className="btn-o">Download CV</button>
        </div>

        <div className="h-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="soc">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="soc">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="soc">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="h-img-ring">
          <div className="h-img-inner">
            <div className="h-img-fallback">IY</div>
          </div>
        </div>
      </div>

      <div className="h-grid"></div>
      <div className="h-orb orb1"></div>
      <div className="h-orb orb2"></div>
    </section>
  );
}
