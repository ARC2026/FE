import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/Beginning.module.scss";
import beltVideo from "../assets/background/belt.webm";
import Menu from "../components/Menu";

export default function Beginning() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // 초기에는 비디오를 일시정지 상태로 설정
    if (videoRef.current) {
      videoRef.current.pause();
    }

    const getPositions = () => {
      const viewportHeight = window.innerHeight;
      const contentHeight = contentRef.current?.offsetHeight || 0;

      // 초기 위치: 화면 하단에 딱 붙음
      const startTop = viewportHeight - contentHeight;

      // 최종 위치: 화면 중앙
      const endTop = viewportHeight / 2 - contentHeight / 2;

      // 필요한 스크롤 거리
      const scrollDistance = startTop - endTop;

      return { startTop, endTop, scrollDistance, viewportHeight };
    };

    const updateContainerHeight = () => {
      if (!contentRef.current) return;

      const { scrollDistance, viewportHeight } = getPositions();

      // container 높이 = viewport 높이 + 스크롤 거리
      // 스크롤이 끝날 때 텍스트가 중앙에 도달
      const containerHeight = viewportHeight + scrollDistance;

      const container = contentRef.current.parentElement;
      if (container) {
        container.style.height = `${containerHeight}px`;
      }
    };

    const handleScroll = () => {
      if (!videoRef.current || !contentRef.current) return;

      const scrollY = window.scrollY;
      const { startTop, endTop, scrollDistance } = getPositions();

      // maxScroll = scrollDistance (스크롤이 이만큼 되면 텍스트가 중앙에 도달)
      const maxScroll = scrollDistance;

      // 스크롤 진행도 (0 ~ 1)
      const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

      // position: fixed이므로 스크롤과 무관하게 top만 조절
      // scrollProgress가 0이면 startTop, 1이면 endTop
      const currentTop = startTop - (startTop - endTop) * scrollProgress;
      contentRef.current.style.top = `${currentTop}px`;

      // 중앙 도달 여부 확인 (스크롤이 끝나면 중앙)
      const isAtCenter = scrollProgress >= 0.95;

      if (isAtCenter) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        }
      } else {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
      }
    };

    // 비디오 종료 시 홈으로 리다이렉트
    const handleVideoEnd = () => {
      navigate("/", { state: { fromBeginning: true } });
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", handleVideoEnd);
    }

    // 초기 container 높이 설정
    updateContainerHeight();

    // 리사이즈 시 container 높이 재계산
    window.addEventListener("resize", updateContainerHeight);
    window.addEventListener("scroll", handleScroll);

    // 초기 상태 확인
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateContainerHeight);
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <Menu />
      </div>
      <video
        ref={videoRef}
        className={styles.backgroundVideo}
        muted
        playsInline
      >
        <source src={beltVideo} type="video/webm" />
      </video>
      <div ref={contentRef} className={styles.content}>
        <div className={styles.text}>BEGINNING</div>
        <div className={styles.text}>OF</div>
        <div className={styles.text}>ARC</div>
      </div>
    </div>
  );
}
