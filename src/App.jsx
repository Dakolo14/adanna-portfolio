import React from 'react'
import './index.css'

function App() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="portfolio-app">
      <header>
        <div className="logo">
          <span>Adanna Enuks</span>
        </div>
        <div className="menu-icon">
          <div className="menu-dot"></div>
          <div className="menu-dot"></div>
          <div className="menu-dot"></div>
          <div className="menu-dot"></div>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>
            I create motion that makes your brand impossible to ignore.<br />
            Design. Motion. And everything in between.
          </h1>
          <p>
            Nothing is there to decorate. Everything is there to guide, hold, or resolve.
          </p>
        </section>

        <div className="scroll-indicator-container">
          <div className="scroll-circle" onClick={scrollToProjects} title="Scroll down"></div>
        </div>

        <section id="projects" className="projects-grid">
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
        </section>
      </main>
    </div>
  )
}

export default App
