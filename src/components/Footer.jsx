import {
  ArrowUp,
  Github,
  Instagram,
  Linkedin
} from "lucide-react";

import personal from "../data/personal";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#home" className="footer-logo">
            VKM<span>.</span>
          </a>

          <p>
            Building. Learning. Exploring.
          </p>

          <a
            href="#home"
            className="back-to-top"
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </a>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>

          <div className="footer-socials">
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>

            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            <a
              href={personal.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;