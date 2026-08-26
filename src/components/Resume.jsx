import { Download, ExternalLink, FileText } from "lucide-react";

function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">04 — Resume</span>

          <h2 className="section-title">
            My <span className="gradient-text">resume.</span>
          </h2>

          <p className="section-description">
            A quick overview of my education, skills, projects, and
            experience.
          </p>
        </div>

        <div className="resume-wrapper glass-card">
          <div className="resume-info">
            <div className="resume-icon">
              <FileText size={25} />
            </div>

            <div>
              <span className="resume-label">CV / RESUME</span>

              <h3>Vinit Kant Mishra</h3>

              <p>
                Computer Science Engineering Student
              </p>
            </div>
          </div>

          <div className="resume-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View Resume
              <ExternalLink size={16} />
            </a>

            <a
              href="/resume.pdf"
              download="Vinit-Kant-Mishra-Resume.pdf"
              className="btn btn-primary"
            >
              Download
              <Download size={16} />
            </a>
          </div>
        </div>

        <div className="resume-preview glass-card">
          <iframe
            src="/resume.pdf"
            title="Vinit Kant Mishra Resume"
          />
        </div>
      </div>
    </section>
  );
}

export default Resume;