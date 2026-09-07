import React from 'react';

export default function About() {
  const capabilities = [
    {
      icon: 'fa-brands fa-react',
      title: 'Frontend & React Development',
      desc: 'Building component-driven, responsive web applications using React.js, modern JavaScript (ES6+), and sleek state workflows.'
    },
    {
      icon: 'fa-solid fa-server',
      title: 'Backend & RESTful APIs',
      desc: 'Developing fast, secure backend services using Python Flask and Node.js/Express with clean REST endpoint architecture.'
    },
    {
      icon: 'fa-solid fa-database',
      title: 'Database & Data Storage',
      desc: 'Designing relational MySQL schemas and flexible MongoDB document models for efficient data storage and dynamic querying.'
    },
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'UI/UX & Responsive Design',
      desc: 'Crafting pixel-perfect, mobile-first designs with Tailwind CSS, custom CSS animations, and dark glassmorphic themes.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <i className="fa-solid fa-user"></i> About Me
          </span>
          <h2 className="section-title">Turning Ideas into Scalable Code</h2>
          <p className="section-subtitle">
            Bridging the gap between sleek frontend interfaces and robust backend logic.
          </p>
        </div>

        {/* Narrative & Visual Box */}
        <div className="about-grid">
          <div className="about-text-content">
            <h3>Hello! I'm Vaidehi Hariyani</h3>
            <p>
              I am a Bachelor of Computer Applications (BCA) graduate who started my journey with foundational programming and quickly evolved into modern full-stack web development.
            </p>
            <p>
              During my 6-month frontend internship at <strong>Abox Agency</strong>, I honed my skills building high-conversion, responsive web applications that adapt smoothly to mobile, tablet, and ultra-wide screens.
            </p>
            <p>
              I enjoy solving real challenges through code — from engineering custom streaming platforms like <strong>LXPLAYER</strong> and app networks like <strong>LX-AppStore</strong> to relational e-commerce backends like <strong>WEBSHOP</strong>.
            </p>

            <div style={{ marginTop: '24px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontSize: '14px' }}>
                <i className="fa-solid fa-location-dot" style={{ color: 'var(--primary)' }}></i>
                <span>Gujarat, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontSize: '14px' }}>
                <i className="fa-solid fa-graduation-cap" style={{ color: 'var(--secondary)' }}></i>
                <span>BCA Graduate (2022—2025)</span>
              </div>
            </div>
          </div>

          <div className="about-photo-wrapper">
            <div className="about-photo-card glass-card">
              <img 
                src="./assets/images/my-avtar.png" 
                alt="Vaidehi Hariyani" 
                loading="lazy"
                onError={(e) => {
                  e.target.src = "./assets/images/my-avtar-transparent.png";
                }}
              />
              <div style={{ padding: '16px 8px 6px', textAlign: 'center' }}>
                <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 600 }}>Vaidehi Hariyani</h4>
                <p style={{ color: 'var(--primary)', fontSize: '13px', fontWeight: 500 }}>Full Stack & Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* What I Do / Capabilities Grid */}
        <div className="section-header" style={{ marginBottom: '35px', marginTop: '40px' }}>
          <span className="section-badge" style={{ borderColor: 'rgba(129, 140, 248, 0.3)', background: 'rgba(129, 140, 248, 0.1)', color: 'var(--secondary)' }}>
            <i className="fa-solid fa-microchip"></i> Services & Expertise
          </span>
          <h3 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: 700 }}>What I Bring to the Table</h3>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="capability-card glass-card">
              <div className="capability-icon">
                <i className={cap.icon}></i>
              </div>
              <h4 className="capability-title">{cap.title}</h4>
              <p className="capability-desc">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
