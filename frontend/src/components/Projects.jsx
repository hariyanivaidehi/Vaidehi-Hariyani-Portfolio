import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        setLoading(false);
      });
  }, []);

  return (
    <article className="projects" data-page="projects">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      {loading ? (
        <p style={{ textAlign: 'center', color: 'var(--light-gray-70)' }}>Loading projects...</p>
      ) : (
        <ul className="project-list" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '30px' }}>
          {projects.map((project, idx) => {
            const tagsText = project.tags && project.tags.length > 0 ? project.tags.join(' / ') : project.category;
            return (
              <li 
                key={project._id || idx} 
                className="project-item active scroll-anim anim-scale-up" 
                style={{ display: 'block', maxWidth: '600px', width: '100%', margin: '0 auto' }}
              >
                <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                  <figure className="project-img" style={{ height: '280px' }}>
                    <div className="project-item-icon-box" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src={project.image} alt={project.title} loading="lazy" style={{ objectPosition: 'center top' }} />
                  </figure>
                  <h3 className="project-title" style={{ marginLeft: 0, fontSize: '20px', fontWeight: '600' }}>{project.title}</h3>
                  <p className="project-category" style={{ marginLeft: 0, color: '#38bdf8' }}>{tagsText}</p>
                </a>
                <p style={{ marginTop: '15px', color: 'var(--light-gray-70)', fontSize: '15px', lineHeight: '1.6' }}>
                  {project.description}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
}
