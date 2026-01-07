import { useParams, useNavigate } from "react-router-dom";
import { home } from "../assets";
import SmallMenu from "../components/SmallMenu";
import Footer from "../components/Footer";
import ProjectDetailSection from "../components/ProjectDetailSection";
import styles from "../styles/pages/ProjectDetail.module.scss";
import mockData from "../apis/mock.json";
import backIcon from "../assets/back.svg";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = mockData.projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  // 프로젝트 이미지 배열 (유효한 이미지만 필터링)
  const projectImages = [
    project.image,
    project.detailImage,
  ].filter((img) => img); // undefined나 null 제거

  return (
    <div className={styles.container}>
      <div className={styles.paddingContainer}>
      <div className={styles.homeButton} onClick={() => navigate("/")}>
        <img src={home} alt="home" />
        <div className={styles.homeButtonText}>HOME</div>
      </div>
      <div className={styles.menuContainer}>
        <SmallMenu />
      </div>
      <div className={styles.contentWrapper}>
        {/* 위쪽: 뒤로가기 버튼 */}
        <div className={styles.backButtonContainer}>
          <button className={styles.backButton} onClick={() => navigate("/project")}>
            <img className={styles.backButtonIcon} src={backIcon} alt="back" />
            <span>{project.type}</span>
          </button>
        </div>
        {/* 아래쪽: 콘텐트 그리드 */}
        <div className={styles.contentGrid}>
          {/* 왼쪽: 이미지 2개 위아래 배치 */}
          <div className={styles.imageColumn}>
            {projectImages.map((image, index) => (
              <div key={index} className={styles.imageItem}>
                <img src={image} alt={`${project.title} ${index + 1}`} />
              </div>
            ))}
          </div>
          {/* 오른쪽: 콘텐트 */}
          <div className={styles.contentContainer}>
            <ProjectDetailSection
              title={project.title}
              artist={Array.isArray(project.artist) ? project.artist : [project.artist]}
              overview={project.overview}
              contact={project.insta && project.insta.length > 0 ? project.insta : []}
            />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
