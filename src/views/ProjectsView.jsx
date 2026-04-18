import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ViewHeader from "../components/ViewHeader";
import styles from "./ProjectsView.module.css";

export default function ProjectsView() {
  return (
    <section className={styles.view}>
      <ViewHeader
        eyebrow="03 · Proyectos"
        title="Selected Work."
        lead={`${projects.length} proyectos. Cada uno nació de un problema concreto, se pensó end-to-end y está corriendo en producción.`}
      />

      <div className={styles.list}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
