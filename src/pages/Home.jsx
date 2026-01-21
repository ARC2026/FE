import { useEffect, useRef, useState } from "react";
import styles from "../styles/pages/Home.module.scss";
import beginningStyles from "../styles/pages/Beginning.module.scss";
import BracketsLeft from "../components/BracketsLeft";
import BracketsRight from "../components/BracketsRight";
import { date } from "../assets";
import Menu from "../components/Menu";
import { fragments } from "../assets";
import beltVideo from "../assets/background/belt.webm";

export default function Home() {
  const [showBeginning, setShowBeginning] = useState(true);
  const [showHome, setShowHome] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Beginning 관련 refs
  const beginningVideoRef = useRef(null);
  const beginningContentRef = useRef(null);

  // Home 관련 refs
  const homeVideoRef = useRef(null);
  const lastScrollTime = useRef(Date.now());
  const scrollTimeoutRef = useRef(null);

  // Beginning 섹션 로직
  useEffect(() => {
    if (!showBeginning) return;

    // 초기에는 비디오를 일시정지 상태로 설정
    if (beginningVideoRef.current) {
      beginningVideoRef.current.pause();
    }

    const getPositions = () => {
      const viewportHeight = window.innerHeight;
      const contentHeight = beginningContentRef.current?.offsetHeight || 0;

      // 초기 위치: 화면 하단에 딱 붙음
      const startTop = viewportHeight - contentHeight;

      // 최종 위치: 화면 중앙
      const endTop = viewportHeight / 2 - contentHeight / 2;

      // 필요한 스크롤 거리
      const scrollDistance = startTop - endTop;

      return { startTop, endTop, scrollDistance, viewportHeight };
    };

    const updateContainerHeight = () => {
      if (!beginningContentRef.current) return;

      const { scrollDistance, viewportHeight } = getPositions();
      const containerHeight = viewportHeight + scrollDistance;

      const container = beginningContentRef.current.parentElement;
      if (container) {
        container.style.height = `${containerHeight}px`;
      }
    };

    const handleScroll = () => {
      if (!beginningVideoRef.current || !beginningContentRef.current) return;

      const scrollY = window.scrollY;
      const { startTop, endTop, scrollDistance } = getPositions();

      const maxScroll = scrollDistance;
      const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

      const currentTop = startTop - (startTop - endTop) * scrollProgress;
      beginningContentRef.current.style.top = `${currentTop}px`;

      const isAtCenter = scrollProgress >= 0.95;

      if (isAtCenter) {
        if (beginningVideoRef.current.paused) {
          beginningVideoRef.current.play();
        }
      } else {
        if (!beginningVideoRef.current.paused) {
          beginningVideoRef.current.pause();
        }
      }
    };

    // 비디오 종료 시 Home 표시
    const handleVideoEnd = () => {
      setShowBeginning(false);
      setIsAnimating(true);
      setShowHome(true);
      // 스크롤을 맨 위로 이동
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    const video = beginningVideoRef.current;
    if (video) {
      video.addEventListener("ended", handleVideoEnd);
    }

    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateContainerHeight);
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [showBeginning]);

  // Home 섹션 로직
  useEffect(() => {
    if (!showHome) return;

    // 초기에는 비디오를 일시정지 상태로 설정
    if (homeVideoRef.current) {
      homeVideoRef.current.pause();
      homeVideoRef.current.playbackRate = 0;
    }

    const handleWheel = (e) => {
      if (!homeVideoRef.current) return;

      // 아래로 스크롤할 때만 재생 (deltaY > 0)
        if (e.deltaY > 0) {
        lastScrollTime.current = Date.now();

        // 스크롤 속도 계산
        const scrollSpeed = Math.abs(e.deltaY);

        // 스크롤 속도에 비례하여 재생 속도 조절 (0.1 ~ 2.0 사이)
        // 스크롤 속도가 클수록 빠르게 재생
        const playbackRate = Math.min(2.0, Math.max(0.1, scrollSpeed / 50));

        homeVideoRef.current.playbackRate = playbackRate;

        // 비디오가 멈춰있으면 재생
        if (homeVideoRef.current.paused) {
          homeVideoRef.current.play();
        }

        // 기존 타이머 클리어
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // 일정 시간(예: 100ms) 스크롤이 없으면 멈춤
        scrollTimeoutRef.current = setTimeout(() => {
          if (homeVideoRef.current) {
            homeVideoRef.current.playbackRate = 0;
          }
        }, 100);
      } else {
        // 위로 스크롤할 때는 비디오 멈춤
        if (homeVideoRef.current) {
          homeVideoRef.current.playbackRate = 0;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [showHome]);

  return (
    <>
      {showBeginning && (
        <div className={beginningStyles.container}>
          <div className={beginningStyles.menuContainer}>
            <Menu />
          </div>
          <video
            ref={beginningVideoRef}
            className={beginningStyles.backgroundVideo}
            muted
            playsInline
          >
            <source src={beltVideo} type="video/webm" />
          </video>
          <div ref={beginningContentRef} className={beginningStyles.content}>
            <div className={beginningStyles.text}>BEGINNING</div>
            <div className={beginningStyles.text}>OF</div>
            <div className={beginningStyles.text}>ARC</div>
          </div>
        </div>
      )}

      {showHome && (
    <div className={styles.container}>
          <Menu />
          <div
            className={`${styles.content} ${
              isAnimating ? styles.fadeInUp : ""
            }`}
          >
        <div className={styles.firstLine}>
              <BracketsLeft
                className={styles.bracketsLeft}
                color="#ff3435"
                width={32}
                height={110}
              />
              <BracketsRight
                className={styles.bracketsRight}
                color="#ff3435"
                width={32}
                height={110}
              />
          <div className={styles.text}>BETWEEN</div>
        </div>
        <div className={styles.secondLine}>
              <img
                src={fragments}
                alt="fragments"
                className={styles.fragments}
              />
              <div className={styles.starContainer}>*</div>
              <div className={styles.starContainer}>*</div>
        </div>
        <div className={styles.thirdLine}>
          <div className={styles.text}>A STORY FORMS</div>
        </div>
        <div className={styles.fourthLine}>
              <BracketsLeft
                className={styles.bracketsLeft}
                color="#B6DA03"
                width={32}
                height={110}
              />
          {/* <div className={styles.date}>4-9.02'26</div> */}
          <img src={date} alt="4-9.02'26" className={styles.date} />
              <BracketsRight
                className={styles.bracketsRight}
                color="#B6DA03"
                width={32}
                height={110}
              />
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.addressContainer}>
            <div className={styles.address}>
              Seoul Jongno-gu Insadong 5-gil 14
            </div>
            <div className={styles.address}>
              Maru Art Center B1F Special Exhibition Hall
            </div>
          </div>
        </div>
      </div>
    </div>
      )}
    </>
  );
}
