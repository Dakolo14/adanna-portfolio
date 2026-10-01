import React from 'react';

const Work = () => {
  return (
    <main className="page-transition">
      <section className="hero">
        <h1>
          I create motion that makes your brand impossible to ignore.<br />
          Design. Motion. And everything in between.
        </h1>
        <p>
          Nothing is there to decorate. Everything is there to guide, hold, or resolve.
        </p>
      </section>

      <section id="projects" className="projects-container">
        <h2 className="section-title">My Work</h2>
        <div className="projects-grid">
          <div className="project-card portrait">
            <video src="/portrait-vid.mp4" autoPlay loop muted playsInline className="placeholder-video"></video>
            <div className="project-overlay">
              <h3 className="project-title">Reel 1</h3>
              <p className="project-category">Portrait (1080x1920)</p>
            </div>
          </div>
          <div className="project-card landscape">
            <video src="/landscape-vid.mp4" autoPlay loop muted playsInline className="placeholder-video"></video>
            <div className="project-overlay">
              <h3 className="project-title">Reel 2</h3>
              <p className="project-category">Landscape</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Work;
