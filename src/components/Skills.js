import React from "react"
import "./CSS/Skills.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWordpress,
  faPython,
  faJsSquare,
  faReact,
  faNodeJs,
  faNode,
  faHtml5,
  faCss3Alt,
  faGithub,
  faDeskpro,
  faDev,
  faHashnode,
  faDocker
} from "@fortawesome/free-brands-svg-icons"
import { faFlask } from "@fortawesome/free-solid-svg-icons"

const skills = [
  { name: "WordPress", icon: faWordpress },
  { name: "Django", icon: faPython }, // Assuming Django uses the Python icon
  { name: "Python", icon: faPython },
  { name: "Next.js", icon: faReact }, // Assuming Next.js uses the React icon
  { name: "React", icon: faReact },
  { name: "Flask", icon: faFlask },
  { name: "Tailwind CSS", icon: faCss3Alt }, // Placeholder for another modern web technology
  { name: "Node.js", icon: faNode },
  { name: "Express", icon: faNodeJs }, // Assuming Express uses the Node.js icon
  { name: "MongoDB", icon: faDeskpro }, // Using DeskPro Icon
  { name: "Docker", icon: faDocker },
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "Git/GitHub", icon: faGithub },
  { name: "GraphQL", icon: faDev }, // Using faDev for Icon
  { name: "JavaScript", icon: faJsSquare },
  { name: "TypeScript", icon: faHashnode } // Placeholder for another modern web technology
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
