import styles from "./EducationSection.module.css";
import { education } from "../data/profile";

export default function EducationSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Formación</h2>
      <div className={styles.list}>
        {education.map((ed, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.left}>
              <span className={styles.period}>{ed.period}</span>
            </div>
            <div className={styles.right}>
              <span className={styles.degree}>{ed.degree}</span>
              <span className={styles.institution}>{ed.institution}</span>
              <span className={`${styles.status} ${ed.status === "Completada" || ed.status === "Completado" ? styles.done : ""}`}>
                {ed.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
