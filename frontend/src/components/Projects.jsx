import React, { useEffect, useState } from 'react';
import { getProjects } from '../utils/api';
import '../styles/projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend',
      features: ['Product Catalog', 'Stripe Payment', 'User Authentication'],
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 2,
      name: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      features: ['Real-time Sync', 'Collaboration', 'Dark Mode'],
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 3,
      name: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics and insights',
      features: ['Data Visualization', 'Real-time Data', 'Export Reports'],
      tech: ['Next.js', 'D3.js', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ]);

  useEffect(() => {
    // Fetch projects from API
    getProjects()
      .then((res) => setProjects(res.data))
      .catch(() => console.log('Using default projects'));
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="s-tag">My Work</div>
        <h2 className="s-title">
          Featured <em>Projects</em>
        </h2>
        <div className="s-div"></div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-glow"></div>

              <div className="project-header">
                <div className="project-icon">📱</div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                  <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>

                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
