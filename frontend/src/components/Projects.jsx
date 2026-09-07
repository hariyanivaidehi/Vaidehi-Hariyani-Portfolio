import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        } else {
          // Fallback static data if API is loading/offline
          setProjects(fallbackProjects);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn('API error, using local projects list:', err);
        setProjects(fallbackProjects);
        setLoading(false);
      });
  }, []);

  const fallbackProjects = [
    {
      id: "lx-appstore",
      title: "LX-AppStore",
      category: "Python & Flask / Web App Store",
      filterCategory: "python",
      subtitle: "High-Performance APK & XAPK App Store Network",
      description: "A modern, responsive, and high-performance Web App Store built with Python Flask and Vanilla JavaScript. It serves as a secure direct network for downloading APK & XAPK files with authentic version verification, metadata, screenshots, and version histories.",
      highlights: [
        "Fluid responsive layout using CSS clamp() and viewport units (325px to 1920px)",
        "Mobile search marquee ticker with JavaScript character-shift animation",
        "Custom wishlist with CSS blur filter overlay and confirmation modal",
        "Dual theme engine supporting Light and pure black Dark theme (#000000) persisted in localStorage",
        "Vercel serverless WSGI deployment with REST API endpoints"
      ],
      image: "./assets/images/project-2.png",
      liveUrl: "https://lxappstore.vercel.app/",
      githubUrl: "https://github.com/hariyanivaidehi/LX-AppStore",
      tags: ["Python", "Flask", "JavaScript (ES6+)", "CSS3", "HTML5", "REST API", "Vercel"]
    },
    {
      id: "lxplayer",
      title: "LXPLAYER",
      category: "Streaming & Media / Cinematic UI",
      filterCategory: "python",
      subtitle: "Cinematic Movie & Series Streaming Platform",
      description: "An ultra high-speed, private, ad-free streaming web application featuring real-time movie catalogs, a fully responsive JioHotstar-style dashboard, multi-language audio track selectors, and hardware-accelerated HLS video playback.",
      highlights: [
        "JioHotstar-inspired cinematic UI with ambient header banner and floating poster cards",
        "Hardware-accelerated HLS.js streaming engine with HTML5 video playback",
        "Multi-language audio track switching and HD quality upscaling (/t/p/original/)",
        "Mobile drawer sidebar, two-column touch grid (grid-cols-2), and compact pagination",
        "Local Wi-Fi network streaming support binding to 0.0.0.0 for smart TV and mobile casting"
      ],
      image: "./assets/images/project-4.png",
      liveUrl: "https://lxplayer.vercel.app",
      githubUrl: "https://github.com/hariyanivaidehi/LXPLAYER",
      tags: ["Python", "Flask", "Tailwind CSS", "JavaScript (ES6+)", "Hls.js", "REST API", "Vercel"]
    },
    {
      id: "webshop",
      title: "WEBSHOP",
      category: "E-Commerce / Full Stack",
      filterCategory: "php",
      subtitle: "Online Shopping Platform with Relational Database",
      description: "A fully functional e-commerce shopping web application built with PHP and MySQL on the backend, complemented by a clean, responsive HTML5/CSS3/JavaScript frontend.",
      highlights: [
        "Secure user authentication system (Registration, Login, and Session management)",
        "Interactive shopping cart with dynamic item quantity calculation and pricing summary",
        "Live product catalog browsing with multi-category search and filtering",
        "Relational MySQL database managing products, inventory, orders, and user profiles",
        "Responsive checkout flow optimized for desktop and mobile browsers"
      ],
      image: "./assets/images/webshop.png",
      liveUrl: "#",
      githubUrl: "https://github.com/hariyanivaidehi/webshop",
      tags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "E-Commerce"]
    }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter((p) => p.filterCategory === selectedFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <i className="fa-solid fa-laptop-code"></i> Featured Work
          </span>
          <h2 className="section-title">Projects Showcase</h2>
          <p className="section-subtitle">
            Explore my featured real-world web applications built with Python Flask, Tailwind CSS, PHP, and MySQL.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          <button
            className={`filter-pill ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All Projects ({projects.length})
          </button>
          <button
            className={`filter-pill ${selectedFilter === 'python' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('python')}
          >
            Python & Flask (2)
          </button>
          <button
            className={`filter-pill ${selectedFilter === 'php' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('php')}
          >
            PHP & MySQL (1)
          </button>
        </div>

        {/* Projects Cards List */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--text-muted)' }}>
            <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '24px', marginBottom: '10px' }}></i>
            <p>Loading projects...</p>
          </div>
        ) : (
          <div className="projects-cards-container">
            {filteredProjects.map((project, idx) => (
              <div key={project.id || idx} className="project-card-large glass-card">
                {/* Left Side: Image / Mockup Banner */}
                <div className="project-banner-preview">
                  <span className="project-badge-tag">{project.category}</span>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = './assets/images/webshop.png';
                    }}
                  />
                </div>

                {/* Right Side: Detailed Content */}
                <div className="project-details-content">
                  <div>
                    <div className="project-title-row">
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-subtitle">{project.subtitle}</p>
                    </div>

                    <p className="project-card-desc">{project.description}</p>

                    {/* Highlights bullet list */}
                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="project-highlights-list">
                        {project.highlights.map((item, hIdx) => (
                          <li key={hIdx}>
                            <i className="fa-solid fa-circle-check highlight-check-icon"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div>
                    {/* Tech & Language Tags */}
                    <div className="project-tags-row">
                      {project.tags && project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="project-lang-badge">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="project-links-row">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-project-link btn-project-live"
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          <span>Live Demo</span>
                        </a>
                      )}

                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-project-link btn-project-code"
                        >
                          <i className="fa-brands fa-github"></i>
                          <span>GitHub Repo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
