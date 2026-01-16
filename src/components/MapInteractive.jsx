import { useState } from "react";
import styles from "../styles/components/MapInteractive.module.scss";

export default function MapInteractive({ mapImageSrc, mapConfig }) {
  const [hoveredMarkerId, setHoveredMarkerId] = useState(null);
  
  if (!mapConfig) {
    return null;
  }

  const { artworks, fixedSize } = mapConfig;
  // const { artworks, viewBox } = mapConfig;

  return (
    <div 
      className={styles.container}
      style={{
        width: `${fixedSize.width}px`,
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
            >
              {/* 툴팁 */}
              {isHovered && (
                <div className={styles.tooltip}>
                  ID: {artwork.id}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
