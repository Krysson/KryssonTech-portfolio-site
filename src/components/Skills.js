import React from "react"
import "./Skills.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWordpress,
  faPython,
  faJsSquare,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faGithub
} from "@fortawesome/free-brands-svg-icons"
import { faFlask } from "@fortawesome/free-solid-svg-icons"

const skills = [
  { name: "WordPress", icon: faWordpress },
  { name: "Django", icon: faPython }, // Assuming Django uses the Python icon
  { name: "Python", icon: faPython },
  { name: "Flask", icon: faFlask },
  { name: "JavaScript", icon: faJsSquare },
  { name: "Node.js", icon: faNodeJs },
  { name: "React", icon: faReact },
  { name: "Next.js", icon: faReact }, // Assuming Next.js uses the React icon
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "Express", icon: faNodeJs }, // Assuming Express uses the Node.js icon
  { name: "Git/GitHub", icon: faGithub },
  { name: "GraphQL", icon: faNodeJs }, // Placeholder for a modern web technology
  { name: "Tailwind CSS", icon: faCss3Alt }, // Placeholder for another modern web technology
  { name: "TypeScript", icon: faJsSquare }, // Placeholder for another modern web technology
  { name: "Firebase", icon: faNodeJs } // Placeholder for another modern web technology
]

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map(skill => (
          <div className="skill-item" key={skill.name}>
            <FontAwesomeIcon icon={skill.icon} size="3x" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
