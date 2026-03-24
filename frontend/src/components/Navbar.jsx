import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobMenuOpen, setMobMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certs', href: '#certs' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">ISHU</div>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-hire" onClick={(e) => handleNavClick(e, '#contact')}>
        Hire Me
      </a>

      <button
        className={`hamburger ${mobMenuOpen ? 'open' : ''}`}
        onClick={() => setMobMenuOpen(!mobMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {mobMenuOpen && (
        <div className="mob-menu open">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
