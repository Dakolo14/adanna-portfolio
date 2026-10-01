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
