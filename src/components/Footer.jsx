function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-shell reveal">
          <h2 className="footer-title">Let's Connect</h2>
          <p className="footer-text">
            If you are hiring for data engineering, analytics, or AI product roles, I would love to
            talk.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/ananya-saggi-36aa961b2"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://github.com/AnanyaS05"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a href="mailto:contact.ananyasaggi@gmail.com" className="social-link" aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
          </div>
          <p className="footer-copy">&copy; 2026 Ananya Saggi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
