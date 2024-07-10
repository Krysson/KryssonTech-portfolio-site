import React from "react"
import "./CSS/Projects.css"
import aiImage from "../assets/code-image.png" // Update the path accordingly

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project One</h3>
          <p>Description of the first project.</p>
          <img src={aiImage} alt="AI Project" className="project-image" />
        </div>
        <div className="project-item">
          <h3>Project Two</h3>
          <p>Description of the second project.</p>
          <img src={aiImage} alt="AI Project" className="project-image" />
        </div>
      </div>
    </section>
  )
}

export default Projects
