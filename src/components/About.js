import React from "react"
import "./About.css"
import techImage from "../assets/ai-image.png" // Update the path accordingly

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>I am a web developer specializing in creating modern, responsive, and user-friendly websites.</p>
      <img src={techImage} alt="Modern Technology" className="about-image" />
    </section>
  )
}

export default About
