import React, { useState } from 'react';

export default function EducationExperience() {
  const [showCertModal, setShowCertModal] = useState(false);

  return (
    <section id="experience" className="timeline-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <i className="fa-solid fa-briefcase"></i> Journey
          </span>
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">
            My academic foundation and professional agency experience in software & web development.
          </p>
        </div>

        <div className="timeline-grid">
          {/* Experience Column */}
          <div className="timeline-col">
            <div className="timeline-col-header">
              <div className="timeline-header-icon">
                <i className="fa-solid fa-building-user"></i>
              </div>
              <h3>Professional Experience</h3>
            </div>

            <div className="timeline-wrapper">
              <div className="timeline-card glass-card">
                <span className="timeline-dot"></span>
                <span className="timeline-period">6-Month Internship</span>
                <h4 className="timeline-title">Frontend Developer Intern</h4>
                <p className="timeline-subtitle">Abox Agency</p>
                <p className="timeline-desc">
                  Focused on frontend web development using HTML5, CSS3, JavaScript (ES6+), and React.js. 
                  Built dynamic, user-friendly client interfaces and responsive layouts ensuring smooth cross-device viewing.
                </p>

                {/* Certificate interactive card */}
                <div className="certificate-preview-box">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary)' }}>
                      <i className="fa-solid fa-certificate"></i> Official Certificate
                    </span>
                    <button
                      onClick={() => setShowCertModal(true)}
                      style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '12px', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      Click to expand
                    </button>
                  </div>

                  <div 
                    className="cert-thumbnail-wrap"
                    onClick={() => setShowCertModal(true)}
                  >
                    <img 
                      src="./assets/images/abox_internship_certificate.png" 
                      alt="Abox Agency Internship Certificate"
                      loading="lazy"
                    />
                    <div className="cert-overlay-hover">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                      <span>View Full Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="timeline-col">
            <div className="timeline-col-header">
              <div className="timeline-header-icon" style={{ borderColor: 'rgba(129, 140, 248, 0.3)', color: 'var(--secondary)', background: 'rgba(129, 140, 248, 0.1)' }}>
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <h3>Academic Background</h3>
            </div>

            <div className="timeline-wrapper">
              <div className="timeline-card glass-card">
                <span className="timeline-dot" style={{ borderColor: 'var(--secondary)', boxShadow: '0 0 10px var(--secondary)' }}></span>
                <span className="timeline-period" style={{ color: 'var(--secondary)', background: 'rgba(129, 140, 248, 0.1)' }}>
                  2022 — 2025
                </span>
                <h4 className="timeline-title">Bachelor of Computer Applications (BCA)</h4>
                <p className="timeline-subtitle">SMT. K.B. Parekh College of Computer Science</p>
                <p className="timeline-desc">
                  Affiliated with Maharaja Krishnakumarsinhji Bhavnagar University (MKBU). Graduated with a <strong>CGPA of 7.3 / 10</strong>.
                </p>
                <p className="timeline-desc" style={{ marginBottom: 0 }}>
                  Gained a comprehensive computer science education in Data Structures, Database Management Systems (DBMS/MySQL), Software Engineering, and Modern Web Development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertModal && (
        <div className="modal-overlay" onClick={() => setShowCertModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">
                <i className="fa-solid fa-award" style={{ color: 'var(--primary)', marginRight: '8px' }}></i>
                Abox Agency — Internship Certificate
              </span>
              <button 
                className="modal-close-btn"
                onClick={() => setShowCertModal(false)}
                aria-label="Close modal"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <img 
                src="./assets/images/abox_internship_certificate.png" 
                alt="Abox Agency Certificate Full" 
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
