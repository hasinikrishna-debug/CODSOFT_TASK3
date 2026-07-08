import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>
        I'm always open to internship opportunities, collaborations, and new
        projects. Feel free to connect with me!
      </p>

      <div className="contact-links">
        <p>📧 Email: hasinikrishna@example.com</p>

        <p>
          💼 LinkedIn:
          <a
            href="https://www.linkedin.com/in/hasini-krishna-402307328/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hasini-krishna
          </a>
        </p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/hasinikrishna-debug"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hasinikrishna-debug
          </a>
        </p>

        <p>📍 Chennai, India</p>
      </div>
    </section>
  );
}

export default Contact; 