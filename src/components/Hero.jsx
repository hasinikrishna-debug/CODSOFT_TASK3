import "../styles/Hero.css";
import profileImage from "../assets/my image.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>

          <h1>Hasini Krishna</h1>

          <h2>B.E. COMPUTER SCIENCE STUDENT</h2>

          <p className="description">
            Passionate Computer Science student who enjoys building beautiful,
            responsive and user-friendly web applications using React,
            JavaScript, HTML, CSS and Java.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Resume
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/hasinikrishna-debug"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/hasini-krishna-402307328/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profileImage} alt="Hasini Krishna" />
        </div>
      </div>
    </section>
  );
}

export default Hero; 