import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { home } from "../assets";
import SmallMenu from "../components/SmallMenu";
import styles from "../styles/pages/Project.module.scss";
import BlueBracketsLeft from "../components/BlueBracketsLeft";
import BlueBracketsRight from "../components/BlueBracketsRight";
import ProjectContainer from "../components/ProjectContainer";

export default function Project() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = [
    "ALL",
    "BRANDING",
    "GRAPHIC",
    "PRODUCT",
    "SPACE",
    "UX/UI",
    "VIDEO",
    "3D",
  ];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.homeButton} onClick={() => navigate("/")}>
          <img src={home} alt="home" />
          <div className={styles.homeButtonText}>HOME</div>
        </div>
        <div className={styles.menuContainer}>
          <SmallMenu />
        </div>
        <div className={styles.title}>PROJECT</div>
        <div className={styles.filterBar}>
          {filters.map((filter) => (
            <div
              key={filter}
              className={`${styles.filterItem} ${
                activeFilter === filter ? styles.active : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </div>
          ))}
        </div>
        <div className={styles.bracketsContainer}>
          <BlueBracketsLeft color="#229BD2" width={68} height={648} />
          <BlueBracketsRight color="#229BD2" width={68} height={647} />
          <div className={styles.projectContainer}>
            <ProjectContainer />
            <ProjectContainer />
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerTitle}>
            BETWEEN FRAGMENTS, A STORY FORMS
          </div>
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <div className={styles.footerText}>대학생 연합 전시회 ARC</div>
              <div className={styles.footerText}>
                서울특별시 종로구 인사동 5길 14
              </div>
              <div className={styles.footerText}>마루아트센터 지하1층</div>
              <div className={styles.footerText}>@arc_project</div>
            </div>
            <div className={styles.footerRight}>
              <div className={styles.footerText}>ART & DESIGN EXHIBITION</div>
              <div className={styles.footerText}>
                SEOUL JONGNO-GU INSADONG 5-GIL 14,
              </div>
              <div className={styles.footerText}>
                MARU ART CENTER B1F SPECIAL EXHIBITION HALL
              </div>
              <div className={styles.footerText}>
                © 2026. ARC All rights reserved.
              </div>
            </div>
            <div className={styles.footerLogo}>
              <img src="/logoForFooter.svg" alt="ARC" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
