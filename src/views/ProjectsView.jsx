import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import styles from "./ProjectsView.module.css";

export default function ProjectsView() {
  return (
    <section className={styles.view}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>03 · Proyectos</p>
        <h1 className={styles.title}>Selected Work.</h1>
        <p className={styles.lead}>
          {projects.length} proyectos. Cada uno nació de un problema concreto,
          se pensó end-to-end y está corriendo en producción.
        </p>
      </header>

      <div className={styles.list}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
