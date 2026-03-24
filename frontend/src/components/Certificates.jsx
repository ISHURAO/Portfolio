import React, { useEffect, useState } from 'react';
import { getCerts } from '../utils/api';
import '../styles/certificates.css';

export default function Certificates() {
  const [certs, setCerts] = useState([
    {
      id: 1,
      name: 'React Developer',
      issuer: 'Coursera',
      date: '2023-06',
      badge: '🏆',
    },
    {
      id: 2,
      name: 'Node.js Backend',
      issuer: 'Udemy',
      date: '2023-03',
      badge: '⭐',
    },
    {
      id: 3,
      name: 'MongoDB Master',
      issuer: 'Udemy',
      date: '2023-01',
      badge: '🎯',
    },
  ]);

  useEffect(() => {
    getCerts()
      .then((res) => setCerts(res.data))
      .catch(() => console.log('Using default certs'));
  }, []);

  return (
    <section id="certs" className="certificates">
      <div className="container">
        <div className="s-tag">Credentials</div>
        <h2 className="s-title">
          My <em>Certifications</em>
        </h2>
        <div className="s-div"></div>

        <div className="cert-grid">
          {certs.map((cert) => (
            <div key={cert.id} className={`cert-card p-${cert.issuer.toLowerCase()}`}>
              <div className="cert-badge">{cert.issuer}</div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-date">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
