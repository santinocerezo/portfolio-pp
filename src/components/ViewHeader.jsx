import styles from "./ViewHeader.module.css";

export default function ViewHeader({ eyebrow, title, lead, children }) {
  return (
    <header className={styles.header}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.title}>{children ?? title}</h1>
      {lead && <p className={styles.lead}>{lead}</p>}
    </header>
  );
}
