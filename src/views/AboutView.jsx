import { profile, interests } from "../data/profile";
import ViewHeader from "../components/ViewHeader";
import styles from "./AboutView.module.css";

export default function AboutView() {
  return (
    <section className={styles.view}>
      <ViewHeader
        eyebrow="01 · Sobre mí"
        title="La historia detrás del código."
      />

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
          <p className={styles.detail}>Buenos Aires, Argentina · Disponible remoto</p>
        </div>
      </div>
    </section>
  );
}
