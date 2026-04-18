import { experience } from "../data/profile";
import styles from "./ExperienceView.module.css";

export default function ExperienceView() {
  return (
    <section className={styles.view}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>02 · Experiencia</p>
        <h1 className={styles.title}>Liderar. Coordinar. Ejecutar.</h1>
        <p className={styles.lead}>
          Desde los 18 años trabajando en entornos reales. El liderazgo y la
          gestión de equipos remotos me dieron una perspectiva que trasciende
          el código.
        </p>
      </header>

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
