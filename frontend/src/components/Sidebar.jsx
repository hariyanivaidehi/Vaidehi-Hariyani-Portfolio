import React, { useState } from 'react';

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="./assets/images/my-avtar.png" alt="Profile picture" width="80" />
          <div className="avatar-bubble">
            Hi! <span className="waving-hand">👋</span>
          </div>
        </figure>

        <div className="info-content">
          <h1 className="name" title="Vaidehi Hariyani">Vaidehi_Hariyani</h1>
          <p className="title">Frontend developer</p>
        </div>

        <button className="info_more-btn" onClick={toggleSidebar} data-sidebar-btn>
          <span>{isActive ? 'Hide Contacts' : 'Show Contacts'}</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:hariyanivaidehi1@gmail.com" className="contact-link">hariyanivaidehi1@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+7284911413" className="contact-link">+7284911413</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2005-09-24">Sep 24, 2005</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>A.K.Road, Varachha</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/vaidehi-hariyani-15b0a4381?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/hariyanivaidehi" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
        
        <a href="https://drive.google.com/file/d/1V4vL-QuCKgKweWjihxPaVpTWAjEt3Vg-/view?usp=drivesdk" className="download-resume" download>Download Resume</a>
      </div>
    </aside>
  );
}
