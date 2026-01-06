import { useParams, useNavigate } from "react-router-dom";
import { home } from "../assets";
import SmallMenu from "../components/SmallMenu";
import Footer from "../components/Footer";
import BracketsLeft from "../components/BracketsLeft";
import BracketsRight from "../components/BracketsRight";
import { parenthesisLeft, parenthesisRight } from "../assets";
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
      <div className={styles.homeButton} onClick={() => navigate("/")}>
        <img src={home} alt="home" />
        <div className={styles.homeButtonText}>HOME</div>
      </div>
      <div className={styles.menuContainer}>
        <SmallMenu />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.imageGrid}>
          <button className={styles.backButton} onClick={() => navigate("/project")}>
            <img src={backIcon} alt="back" />
            <span>{project.type}</span>
          </button>
          {projectImages.map((image, index) => (
            <div key={index} className={styles.imageItem}>
              <img src={image} alt={`${project.title} ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            {/* 제목 레이블 */}
            <div className={styles.label}>
              <div className={styles.labelHighlight}>TITLE</div>
              <div className={styles.labelText}>제목</div>
            </div>
            <div className={styles.titleSection}>
              <BracketsLeft color="#ff3435" width={12} height={40} />
              <div className={styles.titleText}>{project.title}</div>
              <BracketsRight color="#ff3435" width={12} height={40} />
              <span className={styles.asterisk}>*</span>
            </div>
            <div className={styles.artistName}>{project.artist}</div>

            {/* 개요 레이블 */}
            <div className={styles.label}>
              <div className={styles.labelHighlight}>OVERVIEW</div>
              <div className={styles.labelText}>개요</div>
            </div>
            <div className={styles.overviewTextContainer}>
              <img src={parenthesisLeft} alt="(" style={{ zIndex: 0 }} />
              <div className={styles.overviewText}>
                조각과 조각이 이어지는 순간, 비로소 전체가 완성된다.
                <br />
                개개인의 작품은 사이'를 통해 연결되며, 전시는 그 네트워크 자체.
                <br />
                협업, 연대, 공감의 가능성을 포착할 수 있다
              </div>
              <img src={parenthesisRight} alt=")" style={{ zIndex: 0 }} />
            </div>

            {/* 연락처 레이블 */}
            <div className={styles.label}>
              <div className={styles.labelHighlight}>CONTACT</div>
              <div className={styles.labelText}>연락처</div>
            </div>
            <div className={styles.contactText}>@{project.artist.toLowerCase().replace(/\s/g, "_")}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
