import React from 'react';

export default function About() {
  return (
    <article className="about" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          A passionate BCA graduate whose coding journey began with fundamental C programs and has now evolved into modern web development. 
          Currently proficient in React.js and Tailwind CSS with hands-on internship experience in building responsive user interfaces.
        </p>
        <p>
          Highly motivated and actively learning Node.js, Express.js, and MongoDB with a clear ambition to grow into a skilled MERN Stack Developer who can build complete full-stack applications and make a real impact.
        </p>
      </section>

      {/* Services */}
      <section className="service">
        <h3 className="h3 service-title">What I do</h3>
        <ul className="service-list">
          <li className="service-item scroll-anim anim-fade-in">
            <div className="service-icon-box">
              <img src="./assets/images/icon-app.svg" alt="React development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">React Development</h4>
              <p className="service-item-text">Building responsive, modern, and high-performance web applications using React.js and modern state management.</p>
            </div>
          </li>
          <li className="service-item scroll-anim anim-fade-in">
            <div className="service-icon-box">
              <img src="./assets/images/icon-dev.svg" alt="Frontend development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Frontend Development</h4>
              <p className="service-item-text">Crafting pixel-perfect, responsive web interfaces using HTML5, CSS3, JavaScript (ES6+), and Tailwind CSS.</p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
