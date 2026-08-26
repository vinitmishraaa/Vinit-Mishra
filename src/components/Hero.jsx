import personal from "../data/personal";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin
} from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="status-dot" />
            Available for building & learning
          </div>

          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="gradient-text">
              {personal.name}
            </span>
            .
          </h1>

          <h2 className="hero-role">
            Computer Science Student
            <span className="hero-role-dot">.</span> Developer
            <span className="hero-role-dot">.</span> AI Enthusiast
          </h2>

          <p className="hero-tagline">
            I build projects, explore technologies, and learn by creating.
          </p>

          <p className="hero-description">
            {personal.shortBio}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore My Projects
              <ArrowUpRight size={17} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              Let's Connect
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <a href="#about" className="hero-scroll">
            <ArrowDown size={15} />
            Scroll to explore
          </a>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="hero-badge hero-badge-one glass-card">
            CSE
          </div>

          <div className="hero-badge hero-badge-two glass-card">
            AI
          </div>

          <div className="hero-card glass-card animate-float">
            <div className="hero-card-top">
              <span className="hero-card-dot" />
              <span className="hero-card-dot" />
              <span className="hero-card-dot" />
            </div>

            <div className="hero-code">
              <div>
                <span className="code-purple">const</span>{" "}
                <span className="code-cyan">developer</span>{" "}
                = {"{"}
              </div>

              <p>
                <span className="code-purple">name</span>:{" "}
                <span className="code-green">
                  "{personal.name}"
                </span>
                ,
              </p>

              <p>
                <span className="code-purple">focus</span>:{" "}
                <span className="code-green">
                  "Web + AI"
                </span>
                ,
              </p>

              <p>
                <span className="code-purple">learning</span>:{" "}
                <span className="code-green">
                  true
                </span>
                ,
              </p>

              <p>
                <span className="code-purple">build</span>:{" "}
                <span className="code-green">
                  "always"
                </span>
              </p>

              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;