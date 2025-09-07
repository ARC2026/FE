import styles from "../styles/components/Menu.module.scss";
import Arrow from "./Arrow";
export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <Arrow color="#FF3435" />
        <div className={styles.about}>ABOUT</div>
      </div>
      <div className={styles.projectContainer}>
        <Arrow color="#038DCC" />
        <div className={styles.project}>PROJECT</div>
      </div>
      <div className={styles.mapContainer}>
        <Arrow color="#B6DA03" />
        <div className={styles.map}>MAP</div>
      </div>
    </div>
  );
}
