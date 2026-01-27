import { useState, useEffect } from "react";
import styles from "../styles/components/MobileWarning.module.scss";
import { fragments, arc, x } from "../assets";
import BracketsLeft from "../components/BracketsLeft";
import BracketsRight from "../components/BracketsRight";

export default function MobileWarning() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // 모바일일 때 body 스크롤 막기
      if (mobile) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      < div className={styles.container}>
        <div
          className={styles.content}
        >
          <div className={styles.firstLine}>
            <BracketsLeft
              className={styles.bracketsLeft}
              color="#ff3435"
              width={10}
              height={30}
            />
            <BracketsRight
              className={styles.bracketsRight}
              color="#ff3435"
              width={10}
              height={30}
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
          {/* 두 번째 레이블 - 전시정보 */}
          <div className={styles.label}>
            <div className={styles.labelHighlight}>EXHIBITION INFORMATION</div>
            <div className={styles.labelText}>전시정보</div>
          </div>
          <div className={styles.addressEnglish}>
            <div className={styles.addressText}>
              Seoul Jongno-gu Insadong 5-gil 14
            </div>
            <div className={styles.addressText}>
              Maru Art Center B1F Special Exhibition Hall
            </div>
          </div>
          <div className={styles.addressKorean}>
            {`서울특별시 종로구 인사동 5길 14 마루아트센터 특별관 B1`}
          </div>
          <div className={styles.fourthLine}>
            <BracketsLeft
              className={styles.bracketsLeft}
              color="#B6DA03"
              width={10}
              height={30}
            />
            {/* <div className={styles.date}>4-9.02'26</div> */}
            <div className={styles.date}>2026. 02. 04-09</div>
            <BracketsRight
                  className={styles.bracketsRight}
                  color="#B6DA03"
                  width={10}
                  height={30}
                />
          </div>
          {/* 세 번째 레이블 - 인스타그램 */}
          <div className={styles.label}>
            <div className={styles.labelHighlight}>INSTAGRAM</div>
            <a
              className={styles.labelText}
              href="https://www.instagram.com/arc__project"
              target="_blank"
              rel="noopener noreferrer"
            >
              @arc__project
            </a>
          </div>

          <div className={styles.warningContainer}>
              <img
                src={x}
                alt="x"
                className={styles.xLogo}
              />
              <div className={styles.warningTitle}>
              현재 모바일에서 접속 중입니다.         
              </div>
              <div className={styles.warningText}>
                본 웹사이트는 PC 환경에 최적화되어 있습니다. <br />
                원활한 이용을 위해 PC로 접속해 주세요!        
              </div>
          </div>
          <div className={styles.arcLogoContainer}>
          <img
          src={arc}
          alt="arc"
          className={styles.arcLogo}
        />

          </div>
        </div>

      </div>
    </div>
  );
}
