import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import projects from "../data/projects";

function Projects() {
  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  const renderProject = (project, index) => (
    <article className="project-card glass-card" key={project.id}>
      <div className="project-card-glow" />

      <div className="project-card-header">
        <span className="project-category">
          {project.category}
        </span>

        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-topics">
          {project.topics?.map((topic) => (
            <span className="project-topic" key={topic}>
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        <div className="project-tech">
          {project.technologies?.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github size={14} />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`${project.title} live website`}
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}

          <ArrowUpRight
            className="project-arrow"
            size={16}
          />
        </div>
      </div>
    </article>
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">05 — Projects</span>

          <h2 className="section-title">
            Things I've <span className="gradient-text">built.</span>
          </h2>

          <p className="section-description">
            A collection of projects I've worked on while learning,
            experimenting, and exploring different technologies.
          </p>
        </div>

        {featuredProjects.length > 0 && (
          <div className="projects-grid">
            {featuredProjects.map((project, index) =>
              renderProject(project, index)
            )}
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="projects-secondary">
            {otherProjects.map((project, index) =>
              renderProject(
                project,
                index + featuredProjects.length
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;