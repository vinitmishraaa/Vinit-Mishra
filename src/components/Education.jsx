import { ExternalLink, GraduationCap } from "lucide-react";
import education from "../data/education";

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">03 — Education</span>

          <h2 className="section-title">
            My <span className="gradient-text">education.</span>
          </h2>

          <p className="section-description">
            My academic journey and the institutions where I have learned,
            grown, and built my foundation.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <div className="education-item" key={item.id}>
              <div className="education-marker">
                <span>0{index + 1}</span>
              </div>

              {index !== education.length - 1 && (
                <div className="education-line" />
              )}

              <div className="education-card glass-card">
                <div className="education-card-top">
                  <span className="education-period">
                    {item.period}
                  </span>

                  <span className="education-status">
                    {item.status}
                  </span>
                </div>

                <div className="education-content">
                  <div className="education-icon">
                    <GraduationCap size={22} />
                  </div>

                  <div>
                    <h3>{item.degree}</h3>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education-institution"
                    >
                      {item.institution}
                      <ExternalLink size={13} />
                    </a>

                    {item.details && (
                      <p className="section-description">
                        {item.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;