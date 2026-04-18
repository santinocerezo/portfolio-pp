import { profile, interests } from "../data/profile";
import styles from "./AboutView.module.css";

export default function AboutView() {
  return (
    <section className={styles.view}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>01 · Sobre mí</p>
        <h1 className={styles.title}>La historia detrás del código.</h1>
      </header>

      <div className={styles.body}>
        {profile.bio.map((p, i) => (
          <p key={i} className={styles.paragraph}>
            {p}
          </p>
        ))}
      </div>

      <div className={styles.grid}>
        <div className={styles.block}>
          <span className={styles.label}>Intereses</span>
          <div className={styles.chips}>
            {interests.map((item) => (
              <span key={item} className={styles.chip}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <span className={styles.label}>Ubicación</span>
          <p className={styles.detail}>Argentina · Disponible remoto</p>
        </div>
      </div>
    </section>
  );
}
