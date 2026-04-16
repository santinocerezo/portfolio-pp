import styles from "./ExperienceSection.module.css";
import { experience } from "../data/profile";

export default function ExperienceSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Experiencia</h2>
      <div className={styles.list}>
        {experience.map((job, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.left}>
              <span className={styles.period}>{job.period}</span>
            </div>
            <div className={styles.right}>
              <span className={styles.role}>{job.role}</span>
              <span className={styles.company}>{job.company}</span>
              <p className={styles.description}>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
