import React from 'react';

const Resume = () => {
  return (
    <main className="page-transition">
      <section className="resume-section">
        <h2 className="page-title">Resume</h2>
        <div className="resume-content">
          <div className="resume-block">
            <h3>Experience</h3>
            <div className="resume-item">
              <h4>Senior Video Editor</h4>
              <p className="resume-date">2021 - Present</p>
              <p>Lead editor for high-profile corporate clients and motion design projects.</p>
            </div>
            <div className="resume-item">
              <h4>Motion Graphics Artist</h4>
              <p className="resume-date">2018 - 2021</p>
              <p>Created dynamic 2D and 3D motion graphics for social media campaigns.</p>
            </div>
          </div>

          <div className="resume-block">
            <h3>Skills</h3>
            <ul className="skills-list">
              <li>Video Editing (Premiere Pro, DaVinci Resolve)</li>
              <li>Motion Graphics (After Effects, Cinema 4D)</li>
              <li>Color Grading</li>
              <li>Sound Design</li>
            </ul>
          </div>
          
          <a href="#" className="download-btn">Download PDF</a>
        </div>
      </section>
    </main>
  );
};

export default Resume;
