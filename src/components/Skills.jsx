import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend & UI',
      icon: 'fa-solid fa-code',
      iconColor: 'var(--primary)',
      skills: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'JavaScript (ES6+)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ]
    },
    {
      title: 'Backend & Frameworks',
      icon: 'fa-solid fa-server',
      iconColor: 'var(--secondary)',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' }
      ]
    },
    {
      title: 'Database & Protocols',
      icon: 'fa-solid fa-database',
      iconColor: 'var(--accent-emerald)',
      skills: [
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Hls.js / Video', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: 'fa-solid fa-toolbox',
      iconColor: 'var(--accent-amber)',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <i className="fa-solid fa-layer-group"></i> Technical Arsenal
          </span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A versatile toolkit across frontend interfaces, backend services, databases, and deployment platforms.
          </p>
        </div>

        <div className="skills-category-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-card glass-card">
              <div className="category-header">
                <div className="category-icon-box" style={{ background: 'rgba(255,255,255,0.05)', color: category.iconColor }}>
                  <i className={category.icon}></i>
                </div>
                <h4>{category.title}</h4>
              </div>

              <div className="skill-tags-cloud">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="tech-badge">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      loading="lazy" 
                      style={{ 
                        filter: skill.name === 'Express.js' || skill.name === 'GitHub' || skill.name === 'Flask' ? 'invert(1)' : 'none' 
                      }}
                    />
                    <span>{skill.name}</span>
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
