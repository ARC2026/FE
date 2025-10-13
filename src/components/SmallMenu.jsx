import styles from "../styles/components/SmallMenu.module.scss";
import Arrow from "./Arrow";
import { useNavigate } from "react-router-dom";
export default function Menu() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <Arrow color="#FF3435" width={12} height={12} />
        <div className={styles.about} onClick={() => navigate("/about")}>
          ABOUT
        </div>
      </div>
      <div className={styles.projectContainer}>
        <Arrow color="#038DCC" width={12} height={12} />
        <div className={styles.project} onClick={() => navigate("/project")}>
          PROJECT
        </div>
      </div>
      <div className={styles.mapContainer}>
        <Arrow color="#B6DA03" width={12} height={12} />
        <div className={styles.map} onClick={() => navigate("/map")}>
          MAP
        </div>
      </div>
    </div>
  );
}
