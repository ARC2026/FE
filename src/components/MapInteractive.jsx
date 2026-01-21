import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/components/MapInteractive.module.scss";
import mockData from "../apis/mock2.json";

export default function MapInteractive({ mapImageSrc, mapConfig }) {
  const [hoveredMarkerId, setHoveredMarkerId] = useState(null);
  const navigate = useNavigate();
  
  if (!mapConfig) {
    return null;
  }

  const { artworks, fixedSize } = mapConfig;

  // 프로젝트 데이터 가져오기
  const getProjectById = (id) => {
    return mockData.projects.find(project => project.id === id);
  };

  // 마커 클릭 시 프로젝트 상세 페이지로 이동
  const handleMarkerClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div 
      className={styles.container}
      style={{
        width: '100%', // 부모 크기에 맞춤
        maxWidth: `${fixedSize.width}px`, // 최대 크기 제한
        height: `${fixedSize.height}px`
      }}
    >
      {/* 배경 지도 이미지 */}
      <img 
        src={mapImageSrc || "/placeholder-map.png"} 
        alt="Map" 
        className={styles.mapImage}
      />
      
      {/* 마커들 - ID 순서대로 정렬하여 낮은 ID가 위에 오도록 */}
      {artworks
        .sort((a, b) => a.id - b.id) // ID 오름차순 정렬
        .map((artwork) => {
          const isHovered = hoveredMarkerId === artwork.id;
          const project = isHovered ? getProjectById(artwork.id) : null;
          
          return (
            <div
              key={artwork.id}
              className={`${styles.marker} ${styles[artwork.type]}`}
              style={{
                left: `${artwork.left}%`,
                top: `${artwork.top}%`,
                // 호버된 마커는 최상위로, 그 외에는 ID 기반 z-index (낮은 ID가 더 높은 z-index)
                zIndex: isHovered ? 1000 : 100 - artwork.id,
              }}
              onMouseEnter={() => setHoveredMarkerId(artwork.id)}
              onMouseLeave={() => setHoveredMarkerId(null)}
              onClick={() => handleMarkerClick(artwork.id)}
            >
              {/* 프로젝트 카드 */}
              {isHovered && project && (
                <div className={`${styles.projectCard} ${artwork.id >= 35 ? styles.place2Card : styles.place1Card}`}>
                  <div className={styles.cardImageWrapper}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardTeam}>{project.team}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
