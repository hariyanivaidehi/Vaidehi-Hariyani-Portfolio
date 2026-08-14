import React from 'react';

export default function Navbar({ activeSection, onNavClick }) {
  const links = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About' },
    { page: 'skills', label: 'Skills' },
    { page: 'education-experience', label: 'Education & Experience' },
    { page: 'projects', label: 'Projects' },
    { page: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link) => (
          <li key={link.page} className="navbar-item">
            <button
              className={`navbar-link ${activeSection === link.page ? 'active' : ''}`}
              onClick={() => onNavClick(link.page)}
              data-nav-link
              data-page={link.page}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
