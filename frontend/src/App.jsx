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
import './styles/app.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <div className="app">
      {isLoading && <div id="loader" className="loader active" />}
      
      {/* Custom Cursor */}
      <div id="cur-dot" className="cursor-dot" />
      <div id="cur-ring" className="cursor-ring" />
      <div id="cur-trail" className="cursor-trail" />

      {/* Progress Bar */}
      <div id="prog" className="progress-bar" />

      {/* Background Orbs */}
      <div className="background-orbs" />

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
