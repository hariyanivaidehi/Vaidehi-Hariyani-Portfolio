import React from 'react';

export default function Skills() {
  return (
    <article className="skills" data-page="skills">
      <header>
        <h2 className="h2 article-title">My Skills</h2>
      </header>
      <section className="skill">
        {/* Frontend Skills */}
        <div className="skills-category scroll-anim anim-slide-left">
          <h4>Frontend</h4>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
              <p>HTML5</p>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
              <p>CSS3</p>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript(ES6+)" />
              <p>JavaScript(ES6+)</p>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills-category scroll-anim anim-slide-right">
          <h4>Backend</h4>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
              <p>PHP</p>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
              <p>MySQL</p>
            </div>
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="skills-category scroll-anim anim-slide-left">
          <h4>Frameworks & Libraries</h4>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <p>React</p>
            </div>
            <div className="skill-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" />
              <p>Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="skills-category scroll-anim anim-slide-right">
          <h4>Tools</h4>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
              <p>Git</p>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{ filter: 'invert(1)' }} />
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
