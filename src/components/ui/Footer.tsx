import { Link } from "@tanstack/react-router";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-name">
          <span className="footer-title">Andrea Bleckert</span>
          <span className="footer-subtitle">Frontend Developer</span>
        </div>
        <nav className="footer-nav">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/work" className="footer-link">
            Work
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </nav>
        <div className="footer-social">
          <a
            href="https://github.com/ImperialFiddlesticks"
            className="footer-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/andrea-bleckert-656190234/"
            className="footer-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Andrea Bleckert</span>
      </div>
    </footer>
  );
}
