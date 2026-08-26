import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <article className="project-card glass-card">
      <div className="project-card-glow" />

      <div className="project-card-header">
        <span className="project-category">
          {project.category}
        </span>

        <span className="project-number">
          {String(project.title).slice(0, 2).toUpperCase()}
        </span>
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-topics">
          {project.topics.map((topic) => (
            <span key={topic} className="project-topic">
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        <div className="project-tech">
          {project.technologies.slice(0, 4).map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}

          {project.technologies.length > 4 && (
            <span>+{project.technologies.length - 4}</span>
          )}
        </div>

        <div className="project-links">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo of ${project.title}`}
              className="project-link"
            >
              <ExternalLink size={17} />
              <span>Live</span>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open GitHub repository of ${project.title}`}
              className="project-link"
            >
              <Github size={17} />
              <span>GitHub</span>
            </a>
          )}

          <ArrowUpRight
            className="project-arrow"
            size={20}
          />
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;