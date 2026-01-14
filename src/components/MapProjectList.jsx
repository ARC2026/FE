import { useNavigate } from "react-router-dom";
import mockData from "../apis/mock2.json";
import styles from "../styles/components/MapProjectList.module.scss";

const ITEMS_PER_PAGE = 20;

export default function MapProjectList({ currentPage = 0, activeTab = "ALL" }) {
  const navigate = useNavigate();
  let allProjects = mockData.projects;
  
  // activeTab에 따라 프로젝트 필터링
  if (activeTab === "PLACE1") {
    allProjects = allProjects.filter(project => project.id <= 35);
  } else if (activeTab === "PLACE2") {
    allProjects = allProjects.filter(project => project.id >= 36);
  }
  // ALL일 때는 필터링 없음
  
  // 현재 페이지에 표시할 프로젝트 계산
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedProjects = allProjects.slice(startIndex, endIndex);

  // 두 그룹으로 나누기: 왼쪽 열(1-10), 오른쪽 열(11-20)
  const leftColumnProjects = displayedProjects.slice(0, 10);
  const rightColumnProjects = displayedProjects.slice(10, 20);

  const renderProject = (project) => (
    <div
      key={project.id}
      className={styles.projectCard}
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div className={styles.projectHeader}>
        <div 
          className={`${styles.projectNumber} ${project.id >= 36 ? styles.projectNumberBlue : ''}`}
        >
          {project.id}
        </div>
        <div className={styles.projectTitle}>{project.title}</div>
      </div>
      <div className={styles.projectTeam}>
        {Array.isArray(project.artist)
          ? project.artist.map((name, index) => (
              <span key={index}>{name}</span>
            ))
          : project.team}
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        {leftColumnProjects.map(renderProject)}
      </div>
      <div className={styles.column}>
        {rightColumnProjects.map(renderProject)}
      </div>
    </div>
  );
}
