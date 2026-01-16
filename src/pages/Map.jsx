import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { home } from "../assets";
import SmallMenu from "../components/SmallMenu";
import Footer from "../components/Footer";
import MapInteractive from "../components/MapInteractive";
import MapProjectList from "../components/MapProjectList";
import styles from "../styles/pages/Map.module.scss";
import mapBackground from "../assets/map_background.svg";
import mapPlace1 from "../assets/map_place1.svg";
import mapPlace2 from "../assets/map_place2.svg";
import rightArrow from "../assets/right_arrow.svg";
import leftArrow from "../assets/left_arrow.svg";
import mockData from "../apis/mock2.json";
import { mapConfigs } from "../data/mapData";

const ITEMS_PER_PAGE = 20;

export default function Map() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [activeTab, setActiveTab] = useState("ALL");
  
  const tabs = ["ALL", "PLACE1", "PLACE2"];
  
  // activeTab에 따라 필터링된 프로젝트 수 계산
  const getFilteredProjects = () => {
    let projects = mockData.projects;
    if (activeTab === "PLACE1") {
      projects = projects.filter(project => project.id <= 35);
    } else if (activeTab === "PLACE2") {
      projects = projects.filter(project => project.id >= 36);
    }
    return projects;
  };
  
  const filteredProjects = getFilteredProjects();
  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / ITEMS_PER_PAGE);
  const isLastPage = currentPage >= totalPages - 1;
  const isPlace2 = activeTab === "PLACE2";

  const handleNextPage = () => {
    if (!isLastPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0); // 탭 변경 시 첫 페이지로 리셋
  };

  // activeTab에 따라 맵 설정 가져오기
  const getMapConfig = () => {
    return mapConfigs[activeTab] || mapConfigs.ALL;
  };

  const getMapImage = () => {
    switch (activeTab) {
      case "PLACE1":
        return mapPlace1;
      case "PLACE2":
        return mapPlace2;
      default:
        return mapBackground;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.homeButton} onClick={() => navigate("/")}>
        <img src={home} alt="home" />
        <div className={styles.homeButtonText}>HOME</div>
      </div>
      <div className={styles.menuContainer}>
        <SmallMenu />
      </div>
      <div className={styles.titleSection}>
        <div className={styles.title}>MAP</div>
        <div className={styles.tabBar}>
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`${styles.tabItem} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={
          activeTab === "ALL" ? styles.leftSectionAll :
          activeTab === "PLACE1" ? styles.leftSectionPlace1 :
          styles.leftSectionPlace2
        }>
          <MapInteractive 
            mapImageSrc={getMapImage()} 
            mapConfig={getMapConfig()}
          />
        </div>
        <div className={styles.dividerSection}>
          <div className={styles.verticalLine}></div>
        </div>
        <div className={styles.rightGroup}>
          {!isPlace2 && currentPage > 0 && (
            <img 
              src={leftArrow} 
              className={styles.leftArrow} 
              alt="left arrow" 
              onClick={handlePrevPage}
              style={{ cursor: 'pointer' }}
            />
          )}
          <div className={styles.rightSection}>
            <MapProjectList currentPage={currentPage} activeTab={activeTab} />
          </div>
          {!isPlace2 && !isLastPage && (
            <img 
              src={rightArrow} 
              className={styles.arrow} 
              alt="arrow" 
              onClick={handleNextPage}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
