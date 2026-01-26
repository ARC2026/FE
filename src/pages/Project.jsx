import { useState, useMemo } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import styles from "../styles/pages/Project.module.scss";
import BlueBracketsLeft from "../components/BlueBracketsLeft";
import BlueBracketsRight from "../components/BlueBracketsRight";
import ProjectContainer from "../components/ProjectContainer";
import mockData from "../apis/mock.json";

export default function Project() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  // 표시명과 실제 타입명 매핑
  const filterTypeMap = {
    "ALL": "ALL",
    "ART&CRAFTS": "ART & CRAFTS",
    "BRANDING": "BRANDING",
    "EDITORIAL": "EDITORIAL",
    "FASHION": "FASHION",
    "FILM&MEDIA": "FILM & MEDIA",
    "GRAPHIC": "GRAPHIC",
  };

  const filters = [
    "ALL",
    "ART&CRAFTS",
    "BRANDING",
    "EDITORIAL",
    "FASHION",
    "FILM&MEDIA",
    "GRAPHIC",
  ];

  // 필터링된 프로젝트 데이터
  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") {
      return mockData.projects;
    }
    const actualType = filterTypeMap[activeFilter];
    return mockData.projects.filter(
      (project) => project.type === actualType
    );
  }, [activeFilter]);

  return (
    <div>
      <div className={styles.container}>
        <Menu />
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
            {Array.from({ length: Math.ceil(filteredProjects.length / 6) }, (_, i) => (
              <ProjectContainer 
                key={i} 
                projects={filteredProjects.slice(i * 6, (i + 1) * 6)} 
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
