import { useState } from "react";
import styles from "../styles/components/Menu.module.scss";
import Arrow from "./Arrow";
import { useNavigate, useLocation } from "react-router-dom";
import { home } from "../assets";

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const isActive = (path) => location.pathname === path;
  const showBrackets = (menuName, path) =>
    hoveredMenu === menuName || isActive(path);

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
          onMouseEnter={() => setHoveredMenu("about")}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          {showBrackets("about", "/about") && (
            <span className={styles.bracket}>【</span>
          )}
          <Arrow color="#FF3435" width={12} height={12} />
          <div className={styles.about}>ABOUT</div>
          {showBrackets("about", "/about") && (
            <span className={styles.bracket}>】</span>
          )}
        </div>
        <div
          className={styles.projectContainer}
          onClick={() => navigate("/project")}
          onMouseEnter={() => setHoveredMenu("project")}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          {showBrackets("project", "/project") && (
            <span className={styles.bracket}>【</span>
          )}
          <Arrow color="#038DCC" width={12} height={12} />
          <div className={styles.project}>PROJECT</div>
          {showBrackets("project", "/project") && (
            <span className={styles.bracket}>】</span>
          )}
        </div>
        <div
          className={styles.mapContainer}
          onClick={() => navigate("/map")}
          onMouseEnter={() => setHoveredMenu("map")}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          {showBrackets("map", "/map") && (
            <span className={styles.bracket}>【</span>
          )}
          <Arrow color="#B6DA03" width={12} height={12} />
          <div className={styles.map}>MAP</div>
          {showBrackets("map", "/map") && (
            <span className={styles.bracket}>】</span>
          )}
        </div>
      </div>
    </div>
  );
}
