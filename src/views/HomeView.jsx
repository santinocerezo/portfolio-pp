import { Link } from "react-router-dom";
import { useTypewriter } from "../hooks/useTypewriter";
import { profile } from "../data/profile";
import styles from "./HomeView.module.css";

const typewriterTexts = [
  "Desarrollador Full Stack",
  "Apasionado por la Ciberseguridad",
  "Analista de Datos",
  "Team Leader",
];

export default function HomeView() {
  const typed = useTypewriter(typewriterTexts);

  return (
    <section className={styles.home}>
      <p className={styles.label}>Portafolio · 2026</p>
      <h1 className={styles.title}>
        Construyo software<br />
        <span className={styles.accent}>que resuelve problemas reales.</span>
      </h1>
      <p className={styles.typed}>
        {typed}
        <span className={styles.cursor}>|</span>
      </p>
      <p className={styles.sub}>
        {profile.age} años · Argentina · {profile.subtitle}
      </p>

      <div className={styles.actions}>
        <Link to="/projects" className={styles.btnPrimary}>
          Ver proyectos
        </Link>
        <Link to="/contact" className={styles.btnSecondary}>
          Contactame
        </Link>
      </div>

      <div className={styles.quickLinks}>
        <Link to="/about" className={styles.quickLink}>
          <span className={styles.quickLinkNum}>01</span>
          <span className={styles.quickLinkLabel}>Sobre mí</span>
        </Link>
        <Link to="/experience" className={styles.quickLink}>
          <span className={styles.quickLinkNum}>02</span>
          <span className={styles.quickLinkLabel}>Experiencia</span>
        </Link>
        <Link to="/projects" className={styles.quickLink}>
          <span className={styles.quickLinkNum}>03</span>
          <span className={styles.quickLinkLabel}>Proyectos</span>
        </Link>
        <Link to="/formation" className={styles.quickLink}>
          <span className={styles.quickLinkNum}>04</span>
          <span className={styles.quickLinkLabel}>Formación</span>
        </Link>
      </div>
    </section>
  );
}
