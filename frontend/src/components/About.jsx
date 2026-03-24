import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="s-tag">About Me</div>
        <h2 className="s-title">
          I'm a <em>Full-Stack Developer</em> with 5+ years of experience
        </h2>
        <div className="s-div"></div>

        <div className="about-grid">
          <div className="about-text">
            <p className="ab-p">
              I'm passionate about building web applications that solve real-world problems. With expertise in modern JavaScript frameworks and backend technologies, I create seamless user experiences combined with robust server-side solutions.
            </p>

            <p className="ab-p">
              My journey in web development started with a curiosity about how things work on the internet, and has evolved into a professional pursuit of excellence in full-stack development.
            </p>

            <div className="ab-chips">
              <span className="chip">React</span>
              <span className="chip">Node.js</span>
              <span className="chip">MongoDB</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Express.js</span>
              <span className="chip">Next.js</span>
            </div>
          </div>

          <div className="about-stats">
            <div className="ab-card">
              <div className="ab-n">50+</div>
              <div className="ab-l">Projects Completed</div>
            </div>
            <div className="ab-card">
              <div className="ab-n">30+</div>
              <div className="ab-l">Happy Clients</div>
            </div>
            <div className="ab-card">
              <div className="ab-n">5+</div>
              <div className="ab-l">Years Experience</div>
            </div>
            <div className="ab-card">
              <div className="ab-n">100%</div>
              <div className="ab-l">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
