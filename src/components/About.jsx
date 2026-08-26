import personal from "../data/personal";
import { MapPin, GraduationCap, Code2, Sparkles } from "lucide-react";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">01 — About</span>

          <h2 className="section-title">
            A little bit <span className="gradient-text">about me.</span>
          </h2>

          <p className="section-description">
            Get to know the person behind the projects, the code, and the
            constant curiosity.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-main glass-card">
            <div className="about-icon">
              <Code2 size={24} />
            </div>

            <h3>
              Building, exploring &{" "}
              <span className="gradient-text">learning.</span>
            </h3>

            <p>{personal.about}</p>

            <p>
              I enjoy going through different technologies, understanding how
              things work, and turning what I learn into practical projects.
              My approach is simple: learn by building, experiment with new
              ideas, and keep improving with every project.
            </p>
          </div>

          <div className="about-info">
            <div className="about-info-card glass-card">
              <div className="about-info-icon">
                <GraduationCap size={21} />
              </div>

              <div>
                <span>Currently studying</span>
                <strong>B.Tech — Computer Science & Engineering</strong>
                <small>{personal.college}</small>
              </div>
            </div>

            <div className="about-info-card glass-card">
              <div className="about-info-icon">
                <MapPin size={21} />
              </div>

              <div>
                <span>Based in</span>
                <strong>{personal.location}</strong>
              </div>
            </div>

            <div className="about-info-card glass-card">
              <div className="about-info-icon">
                <Sparkles size={21} />
              </div>

              <div>
                <span>Interested in</span>
                <strong>Web Development & AI</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;