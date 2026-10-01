import React, { useState, useEffect } from 'react';

const Work = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeVideo]);

  return (
    <main className="page-transition">
      <section className="hero">
        <h1>
          I create <span className="dynamic-word">motion</span> that makes your brand impossible to ignore.<br />
          Design. Motion. And everything in between.
        </h1>
        <p>
          Nothing is there to decorate. Everything is there to guide, hold, or resolve.
        </p>
      </section>

      <section id="projects" className="projects-container">
        <h2 className="section-title">My Work</h2>
        <div className="projects-grid">
          <div className="project-card portrait" onClick={() => setActiveVideo('/portrait-vid.mp4')}>
            <video src="/portrait-vid.mp4" autoPlay loop muted playsInline className="placeholder-video"></video>
            <div className="project-overlay">
              <h3 className="project-title">Reel 1</h3>
              <p className="project-category">Portrait (1080x1920)</p>
            </div>
          </div>
          <div className="project-card landscape" onClick={() => setActiveVideo('/landscape-vid.mp4')}>
            <video src="/landscape-vid.mp4" autoPlay loop muted playsInline className="placeholder-video"></video>
            <div className="project-overlay">
              <h3 className="project-title">Reel 2</h3>
              <p className="project-category">Landscape</p>
            </div>
          </div>
        </div>
      </section>

      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveVideo(null)}>×</button>
            <video src={activeVideo} controls autoPlay playsInline className="full-video"></video>
          </div>
        </div>
      )}
    </main>
  );
};

export default Work;
