import { useState } from "react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.card} ${expanded ? styles.expanded : ""}`}>
      <div className={styles.header} onClick={() => setExpanded(!expanded)}>
        <div className={styles.headerLeft}>
          <span className={styles.category}>{project.category}</span>
          <h2 className={styles.name}>{project.name}</h2>
          <span className={styles.year}>{project.year}</span>
        </div>
        <div className={styles.headerRight}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveLink}
            onClick={(e) => e.stopPropagation()}
          >
            Ver sitio →
          </a>
          <button className={styles.toggle} aria-label="Expandir">
            {expanded ? "−" : "+"}
          </button>
        </div>
      </div>

      {expanded && (
        <div className={styles.body}>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.techList}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.badge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
