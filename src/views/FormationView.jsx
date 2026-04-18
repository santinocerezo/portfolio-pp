import { education, technologies } from "../data/profile";
import ViewHeader from "../components/ViewHeader";
import styles from "./FormationView.module.css";

export default function FormationView() {
  return (
    <section className={styles.view}>
      <ViewHeader
        eyebrow="04 · Formación"
        title="Aprender haciendo."
        lead="Formación académica en la UTN, certificaciones continuas en ciberseguridad e idiomas, y una pila técnica que crece con cada proyecto."
      />

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Educación</h2>
        <ol className={styles.timeline}>
          {education.map((item, i) => (
            <li key={i} className={styles.item}>
              <div className={styles.period}>{item.period}</div>
              <div className={styles.content}>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.institution}>{item.institution}</p>
                <span
                  className={`${styles.status} ${
                    item.status === "En curso" ? styles.statusActive : ""
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Stack técnico</h2>
        <div className={styles.techGrid}>
          {technologies.map((group) => (
            <div key={group.category} className={styles.techBlock}>
              <span className={styles.techCategory}>{group.category}</span>
              <div className={styles.techItems}>
                {group.items.map((tech) => (
                  <span key={tech} className={styles.techChip}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
