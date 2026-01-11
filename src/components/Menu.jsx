import styles from "../styles/components/Menu.module.scss";
import Arrow from "./Arrow";
import { useNavigate } from "react-router-dom";
import { home } from "../assets";
export default function Menu() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.homeContainer} onClick={() => navigate("/")}>
        <img src={home} alt="home" className={styles.homeIcon} />
        <div className={styles.home}>HOME</div>
      </div>
      <div className={styles.menuContainer}>
        <div
          className={styles.aboutContainer}
          onClick={() => navigate("/about")}
        >
          <Arrow color="#FF3435" width={12} height={12} />
          <div className={styles.about} onClick={() => navigate("/about")}>
            ABOUT
          </div>
        </div>
        <div
          className={styles.projectContainer}
          onClick={() => navigate("/project")}
        >
          <Arrow color="#038DCC" width={12} height={12} />
          <div className={styles.project} onClick={() => navigate("/project")}>
            PROJECT
          </div>
        </div>
        <div className={styles.mapContainer} onClick={() => navigate("/map")}>
          <Arrow color="#B6DA03" width={12} height={12} />
          <div className={styles.map} onClick={() => navigate("/map")}>
            MAP
          </div>
        </div>
      </div>
    </div>
  );
}
