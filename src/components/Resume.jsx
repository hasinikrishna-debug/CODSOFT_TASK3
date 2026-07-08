import "../styles/Resume.css";

function Resume() {
  return (
    <section className="resume" id="resume">
      <h2>Resume</h2>

      <p>
        Download my latest resume to learn more about my education, skills, and
        projects.
      </p>

      <a href="/resume.pdf" download className="resume-btn">
        📄 Download Resume
      </a>
    </section>
  );
}

export default Resume; 