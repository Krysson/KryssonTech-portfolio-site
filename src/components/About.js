import React from "react"
import "./CSS/About.css"
import techImage from "../assets/ai-image.png" // Update the path accordingly
import sqLogo from "../assets/sq_logo512.png" // Update the path accordingly

const About = () => {
  return (
    <section className="about">
      {/*Check the below to make sure it works - this is for the CSS animation*/}
      <div class="body">
        <div>
          <div class="wave"></div>
          <div class="wave"> </div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
      {/*Check the above to make sure it works */}

      <h2>Welcome to Krysson Technologies</h2>
      <div className="welcome-wrapper">
        <div className="welcome-text">
          <p>
            At Krysson Technologies, we bridge the gap between visionary ideas and their practical implementation. Our
            dedication to innovation drives us to design, develop, engineer, and deploy smart technologies and
            applications tailored for the modern professional environment. From custom software solutions to advanced AI
            integrations, our expertise is your gateway to a future defined by efficiency, security, and scalability.
            Explore how our solutions are engineered for excellence and designed to propel your business forward.
          </p>
        </div>
        <div className="story-text">
          <h3>Our Story </h3>
          <p>
            Founded on the principles of innovation and customer-centric solutions, Krysson Technologies has been at the
            forefront of technological advancements since its inception. Our team is composed of skilled professionals
            from diverse backgrounds in engineering, design, and development, all united by a passion for transforming
            challenges into impactful solutions.
          </p>
        </div>
        <div className="mission-text">
          <h3>Our Mission</h3>
          <p>
            To empower businesses by providing cutting-edge technological solutions that streamline operations, enhance
            productivity, and foster growth. We are committed to pushing the boundaries of what's possible, ensuring our
            clients not only keep up with the pace of change but lead the way.
          </p>
        </div>
        <div className="values-text">
          <h3>Our Values</h3>
          <ul className="values">
            <li className="value">
              <b>Innovation:</b> We thrive on creativity and ingenuity.
            </li>
            <li className="value">
              <b>Integrity:</b> Transparency and honesty guide all our dealings.
            </li>
            <li className="value">
              <b>Quality:</b> We are relentless in our pursuit of excellence.
            </li>
            <li className="value">
              <b>Collaboration:</b> We believe in the power of teamwork to generate the best solutions.
            </li>
            <li className="value">
              <b>Reliability:</b> Our commitment to delivering dependable and consistent results is fundamental to
              building trust and long-term partnerships with our clients.
            </li>
          </ul>
        </div>
      </div>
      <img src={techImage} alt="Modern Technology" className="about-image" />
      <img src={sqLogo} alt="Krysson Technologies Logo" className="about-image" />
    </section>
  )
}

export default About
