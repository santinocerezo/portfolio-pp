import { experience } from "../data/profile";
import ViewHeader from "../components/ViewHeader";
import styles from "./ExperienceView.module.css";

export default function ExperienceView() {
  return (
    <section className={styles.view}>
      <ViewHeader
        eyebrow="02 · Experiencia"
        title="Liderar. Coordinar. Ejecutar."
        lead="Desde los 18 años trabajando en entornos reales. El liderazgo y la gestión de equipos remotos me dieron una perspectiva que trasciende el código."
      />

      <ol className={styles.timeline}>
        {experience.map((item, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.period}>{item.period}</div>
            <div className={styles.content}>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
