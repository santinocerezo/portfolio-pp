import { profile } from "../data/profile";
import ViewHeader from "../components/ViewHeader";
import styles from "./ContactView.module.css";

export default function ContactView() {
  return (
    <section className={styles.view}>
      <ViewHeader
        eyebrow="05 · Contacto"
        lead="Si tenés un proyecto en mente, una oportunidad laboral, o simplemente querés charlar sobre código, escribime. Respondo en menos de 24 hs."
      >
        Hablemos.<br />
        <span className="accent">Tengo tiempo para proyectos serios.</span>
      </ViewHeader>

      <div className={styles.channels}>
        <a
          href={`mailto:${profile.email}`}
          className={styles.channel}
        >
          <span className={styles.channelLabel}>Email</span>
          <span className={styles.channelValue}>{profile.email}</span>
          <span className={styles.channelArrow}>→</span>
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.channel}
        >
          <span className={styles.channelLabel}>LinkedIn</span>
          <span className={styles.channelValue}>Conectemos</span>
          <span className={styles.channelArrow}>↗</span>
        </a>

        <a
          href="https://github.com/santinocerezo"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.channel}
        >
          <span className={styles.channelLabel}>GitHub</span>
          <span className={styles.channelValue}>@santinocerezo</span>
          <span className={styles.channelArrow}>↗</span>
        </a>
      </div>

      <p className={styles.footer}>
        Basado en Argentina · Disponible para trabajo remoto
      </p>
    </section>
  );
}
