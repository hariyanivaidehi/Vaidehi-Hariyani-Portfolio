import React from 'react';

export default function EducationExperience() {
  return (
    <article className="education-experience" data-page="education-experience">
      <header>
        <h2 className="h2 article-title">Education & Experience</h2>
      </header>
      <section className="timeline">
        {/* Education */}
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item scroll-anim anim-fade-in">
            <h4 className="h4 timeline-item-title">SMT. K.B. Parekh College of Computer Science</h4>
            <span>2022 — 2025</span>
            <p className="timeline-text">
              Completed Bachelor’s Degree in Computer Science from MKB University with a CGPA of 7.3/10. Gained strong foundation in programming, web development, and database management.
            </p>
          </li>
        </ol>

        {/* Experience */}
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item scroll-anim anim-fade-in">
            <h4 className="h4 timeline-item-title">Frontend Developer Intern</h4>
            <span>Abox Agency (6-Month Internship)</span>
            <p className="timeline-text">
              Completed a 6-month internship focusing on frontend web development using HTML, CSS, JavaScript, and React.js. Developed responsive and user-friendly web interfaces to ensure seamless viewing across mobile and desktop devices.
            </p>
            <div className="certificate-container" style={{ marginTop: '20px', maxWidth: '320px', width: '100%' }}>
              <p style={{ color: 'var(--theme-blue)', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Internship Certificate:</p>
              <div style={{ border: '1px solid var(--jet)', borderRadius: '12px', overflow: 'hidden', background: 'var(--eerie-black-1)', transition: 'transform 0.3s ease', boxShadow: 'var(--shadow-1)' }}>
                <a href="./assets/images/abox_internship_certificate.png" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%' }}>
                  <img 
                    src="./assets/images/abox_internship_certificate.png" 
                    alt="Abox Agency Internship Certificate" 
                    loading="lazy" 
                    style={{ width: '100%', height: 'auto', display: 'block', filter: 'brightness(0.95)', transition: 'transform 0.3s ease' }} 
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </a>
              </div>
            </div>
          </li>
        </ol>
      </section>
    </article>
  );
}
