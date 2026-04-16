import styles from "./TechSection.module.css";
import { technologies } from "../data/profile";

export default function TechSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Tecnologías</h2>
      <div className={styles.grid}>
        {technologies.map((group) => (
          <div key={group.category} className={styles.group}>
            <span className={styles.category}>{group.category}</span>
            <div className={styles.badges}>
              {group.items.map((tech) => (
                <span key={tech} className={styles.badge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
