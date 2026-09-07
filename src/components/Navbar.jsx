import React, { useState, useEffect } from 'react';

export default function Navbar({ activeSection, onNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleItemClick = (id) => {
    onNavClick(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <div 
        className="navbar-container"
        style={{
          boxShadow: isScrolled ? '0 12px 35px rgba(0,0,0,0.7)' : '0 8px 24px rgba(0,0,0,0.4)',
          borderColor: isScrolled ? 'rgba(56, 189, 248, 0.3)' : 'rgba(255, 255, 255, 0.12)'
        }}
      >
        <a href="#home" onClick={(e) => { e.preventDefault(); handleItemClick('home'); }} className="navbar-brand">
          <span className="brand-dot"></span>
          <span>Vaidehi<span style={{ color: 'var(--primary)' }}>.dev</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-item-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="nav-actions">
          <a
            href="https://drive.google.com/file/d/1V4vL-QuCKgKweWjihxPaVpTWAjEt3Vg-/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '8px 18px', fontSize: '13.5px' }}
          >
            <i className="fa-solid fa-file-arrow-down"></i>
            <span>Resume</span>
          </a>

          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item-btn ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => handleItemClick(item.id)}
            style={{ textAlign: 'left', width: '100%', padding: '12px 18px', fontSize: '16px' }}
          >
            {item.label}
          </button>
        ))}
        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a
            href="https://drive.google.com/file/d/1V4vL-QuCKgKweWjihxPaVpTWAjEt3Vg-/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: '100%' }}
          >
            <i className="fa-solid fa-file-arrow-down"></i>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
