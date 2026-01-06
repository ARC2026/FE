import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { home } from "../assets";
import SmallMenu from "../components/SmallMenu";
import Footer from "../components/Footer";
import styles from "../styles/pages/Project.module.scss";
import BlueBracketsLeft from "../components/BlueBracketsLeft";
import BlueBracketsRight from "../components/BlueBracketsRight";
import ProjectContainer from "../components/ProjectContainer";
import mockData from "../apis/mock.json";

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

  // 필터링된 프로젝트 데이터
  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") {
      return mockData.projects;
    }
    return mockData.projects.filter(
      (project) => project.type === activeFilter
    );
  }, [activeFilter]);

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
            <ProjectContainer projects={filteredProjects.slice(0, 6)} />
            {filteredProjects.length > 6 && (
              <ProjectContainer projects={filteredProjects.slice(6, 12)} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
