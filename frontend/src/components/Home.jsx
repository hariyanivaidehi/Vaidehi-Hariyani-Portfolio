import React, { useState, useEffect } from 'react';

const roles = [
  "Frontend Web Developer",
  "Python & Flask Explorer",
  "MERN Stack Developer",
  "Responsive UI/UX Designer"
];

export default function Home({ onNavigate }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentFullRole = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        setSpeed(90);

        if (displayText === currentFullRole) {
          timer = setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
        setSpeed(45);

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setSpeed(120);
          return;
        }
      }

      timer = setTimeout(handleType, speed);
    };

    timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, speed]);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Availability Status Badge */}
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>Available for Opportunities & Projects</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            Hi, I'm <span className="gradient-text">Vaidehi Hariyani</span>
          </h1>

          {/* Typewriter Dynamic Subtitle */}
          <div className="hero-typewriter-box">
            <span>I build solutions as a </span>
            <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{displayText}</span>
            <span className="hero-cursor">|</span>
          </div>

          {/* Bio text */}
          <p className="hero-bio">
            A passionate BCA graduate and Frontend Developer with 6 months of professional agency internship experience. 
            Specialized in crafting modern web applications with <strong>React.js</strong>, <strong>Tailwind CSS</strong>, 
            <strong>Python Flask</strong>, and <strong>PHP/MySQL</strong> with an obsession for high performance and sleek UX.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <button
              onClick={() => onNavigate('projects')}
              className="btn-primary"
            >
              <i className="fa-solid fa-code"></i>
              <span>View Projects</span>
            </button>

            <a
              href="https://drive.google.com/file/d/1V4vL-QuCKgKweWjihxPaVpTWAjEt3Vg-/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="btn-secondary"
            >
              <i className="fa-regular fa-paper-plane"></i>
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a
              href="https://github.com/hariyanivaidehi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-btn"
              title="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/vaidehi-hariyani-15b0a4381"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-btn"
              title="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="mailto:hariyanivaidehi1@gmail.com"
              className="social-circle-btn"
              title="Email Vaidehi"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

          {/* Key Stats Counter Strip */}
          <div className="hero-stats-grid">
            <div className="stat-item glass-card">
              <div className="stat-number gradient-text">6+</div>
              <div className="stat-label">Months Internship</div>
            </div>

            <div className="stat-item glass-card">
              <div className="stat-number gradient-text">3+</div>
              <div className="stat-label">Featured Projects</div>
            </div>

            <div className="stat-item glass-card">
              <div className="stat-number gradient-text">10+</div>
              <div className="stat-label">Tech Stack Tools</div>
            </div>

            <div className="stat-item glass-card">
              <div className="stat-number gradient-text">100%</div>
              <div className="stat-label">Responsive Layouts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
