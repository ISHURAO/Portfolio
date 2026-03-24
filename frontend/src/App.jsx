import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './styles/app.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cursor tracking
    const dot = document.getElementById('cur-dot');
    const ring = document.getElementById('cur-ring');
    const trail = document.getElementById('cur-trail');

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (dot) {
        dot.style.left = clientX + 'px';
        dot.style.top = clientY + 'px';
      }
      if (ring) {
        ring.style.left = clientX + 'px';
        ring.style.top = clientY + 'px';
      }
      if (trail) {
        trail.style.left = clientX + 'px';
        trail.style.top = clientY + 'px';
      }
    };

    const handleMouseEnter = () => {
      document.body.classList.add('c-hover');
    };

    const handleMouseLeave = () => {
      document.body.classList.remove('c-hover');
    };

    const handleMouseDown = () => {
      document.body.classList.add('c-click');
    };

    const handleMouseUp = () => {
      document.body.classList.remove('c-click');
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 1500);

    // Progress bar
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      const prog = document.getElementById('prog');
      if (prog) {
        prog.style.width = scrollPercent + '%';
      }
    };

    window.addEventListener('scroll', updateProgress);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <div className="app">
      {isLoading && <Loader />}
      
      {/* Custom Cursor */}
      <div id="cur-dot" className="cursor-dot" />
      <div id="cur-ring" className="cursor-ring" />
      <div id="cur-trail" className="cursor-trail" />

      {/* Progress Bar */}
      <div id="prog" className="progress-bar" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="content">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certs">
          <Certificates />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="blog">
          <Blog />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
