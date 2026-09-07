import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationExperience from './components/EducationExperience';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth navigation when navbar button is clicked
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll spy to highlight current active section in the navbar
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app-root">
      {/* Ambient background glowing spots */}
      <div className="bg-ambient">
        <div className="glow-spot-1"></div>
        <div className="glow-spot-2"></div>
        <div className="glow-spot-3"></div>
      </div>

      {/* Floating Modern Header */}
      <Navbar activeSection={activeSection} onNavClick={handleNavigate} />

      {/* Main Single-Page Sections Flow */}
      <main>
        <Home onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects />
        <EducationExperience />
        <Contact />
      </main>

      {/* Modern Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="brand-dot"></span>
              <span style={{ fontWeight: 700, color: '#fff', fontSize: '16px' }}>
                Vaidehi Hariyani
              </span>
              <span style={{ color: 'var(--text-dim)', fontSize: '14px' }}>
                • Built with React 19, Python Flask & Node.js
              </span>
            </div>

            <p className="footer-copy">
              © {new Date().getFullYear()} Vaidehi Hariyani. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="footer-scroll-top"
              title="Scroll back to top"
              aria-label="Scroll back to top"
            >
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
