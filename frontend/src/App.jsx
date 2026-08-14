import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import EducationExperience from './components/EducationExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll handler on navbar click
  const handleNavClick = (sectionId) => {
    const targetElement = document.querySelector(`article[data-page="${sectionId}"]`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // 1. Setup IntersectionObserver to sync navbar links with scroll
    const pageObserverOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px', // Trigger when section occupies the upper-middle of viewport
      threshold: 0
    };

    const pageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const pageName = entry.target.getAttribute('data-page');
          if (pageName) setActiveSection(pageName);
        }
      });
    }, pageObserverOptions);

    const pages = document.querySelectorAll('article[data-page]');
    pages.forEach(page => pageObserver.observe(page));

    // 2. Setup IntersectionObserver to trigger scroll entrance animations
    const animObserverOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          animObserver.unobserve(entry.target); // Trigger only once
        }
      });
    }, animObserverOptions);

    // Initial check and dynamic query for animation elements
    const animElements = document.querySelectorAll('.scroll-anim');
    animElements.forEach(el => animObserver.observe(el));

    // Cleanup observers on unmount
    return () => {
      pageObserver.disconnect();
      animObserver.disconnect();
    };
  }, []);

  return (
    <main>
      {/* Sticky Contacts Sidebar */}
      <Sidebar />

      {/* Main Content Scroll Panel */}
      <div className="main-content">
        {/* Floating Sticky Glassmorphic Navbar */}
        <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

        {/* Stack of Sections flowing continuously (no visual gaps) */}
        <Home />
        <About />
        <Skills />
        <EducationExperience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
