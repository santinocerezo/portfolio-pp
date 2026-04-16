import styles from "./AboutSection.module.css";
import { interests, profile } from "../data/profile";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Sobre mí</h2>
      <div className={styles.bio}>
        {profile.bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className={styles.grid}>
        <div className={styles.block}>
          <span className={styles.label}>Intereses</span>
          <div className={styles.interestList}>
            {interests.map((item) => (
              <span key={item} className={styles.interest}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <span className={styles.label}>Contacto</span>
          <a href={`mailto:${profile.email}`} className={styles.contactLink}>
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
