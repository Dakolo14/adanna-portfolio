import React, { useEffect, useRef } from 'react'
import './index.css'

function App() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="portfolio-app">
      <div className="custom-cursor" ref={cursorRef}></div>
      <header>
        <div className="logo">
          <span>Adanna Enuks</span>
        </div>
        <nav className="navbar-links">
          <a href="#about" className="nav-link">About</a>
        </nav>
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

        <section id="about" className="about-section">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <p>I am a passionate video editor dedicated to telling stories that captivate and inspire. With years of experience in motion graphics and corporate video editing, I transform raw footage into compelling visual narratives. Every frame is carefully crafted to hold attention and elevate your brand's presence.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
