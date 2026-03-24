import React from 'react';
import '../styles/skills.css';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL', 'GraphQL'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Webpack'],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="s-tag">Expertise</div>
        <h2 className="s-title">
          My <em>Skills</em>
        </h2>
        <div className="s-div"></div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="skill-cat-title">{cat.category}</h3>
              <div className="skill-items">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
