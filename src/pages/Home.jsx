import { useEffect, useRef } from "react";
import styles from "../styles/pages/Home.module.scss";
import BracketsLeft from "../components/BracketsLeft";
import BracketsRight from "../components/BracketsRight";
import Star from "../components/Star";
import { date } from "../assets";
import Menu from "../components/Menu";

export default function Home() {
  const arcContainerRef = useRef(null);
  const wheelCountRef = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {
      if (arcContainerRef.current) {
        // 휠 방향에 따라 카운트 증가/감소
        if (e.deltaY > 0) {
          // 아래로 스크롤 - 위로 올라감
          wheelCountRef.current += 1;
        } else if (e.deltaY < 0) {
          // 위로 스크롤 - 아래로 내려옴
          wheelCountRef.current = Math.max(0, wheelCountRef.current - 1);
        }

        // 휠 카운트에 따라 ARC가 위로 이동하고 사라지게
        const translateY = -wheelCountRef.current * 10; // 휠 한 번에 10px씩 위로
        const opacity = Math.max(0, 1 - wheelCountRef.current * 0.02); // 휠 한 번에 2%씩 투명해짐

        arcContainerRef.current.style.transform = `translateY(${translateY}px)`;
        arcContainerRef.current.style.opacity = opacity;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.firstLine}>
          <BracketsLeft className={styles.bracketsLeft} color="#ff3435" />
          <BracketsRight className={styles.bracketsRight} color="#ff3435" />
          <div className={styles.text}>BETWEEN</div>
        </div>
        <div className={styles.secondLine}>
          <div className={styles.text}>FRAGMENTS,</div>
        </div>
        <div className={styles.thirdLine}>
          <div className={styles.text}>A STORY FORMS</div>
        </div>
        <div className={styles.fourthLine}>
          <BracketsLeft className={styles.bracketsLeft} color="#B6DA03" />
          <img src={date} alt="3-10.02'26" className={styles.date} />
          <BracketsRight className={styles.bracketsRight} color="#B6DA03" />
          <Star className={styles.star} color="#229BD2" />
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
          <Menu />
        </div>
      </div>
      <div ref={arcContainerRef} className={styles.arcContainer} />
    </div>
  );
}
