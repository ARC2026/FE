import { home } from "../assets";
import SmallMenu from "../components/SmallMenu";
import styles from "../styles/pages/About.module.scss";
import BracketsLeft from "../components/BracketsLeft";
import BracketsRight from "../components/BracketsRight";
import Star from "../components/Star";
import { parenthesisLeft, parenthesisRight, profile } from "../assets";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.homeButton} onClick={() => navigate("/")}>
        <img src={home} alt="home" />
        <div className={styles.homeButtonText}>HOME</div>
      </div>
      <div className={styles.menuContainer}>
        <SmallMenu />
      </div>
      <div className={styles.title}>ABOUT</div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          {/* 첫 번째 레이블 - 전시개요 */}
          <div className={styles.label}>
            <div className={styles.labelHighlight}>EXHIBITION OVERVIEW</div>
            <div className={styles.labelText}>전시개요</div>
          </div>
          <div className={styles.overviewTitle}>
            <div className={styles.firstLine}>
              <div className={styles.firstLineContent}>
                <BracketsLeft
                  className={styles.bracketsLeft}
                  color="#ff3435"
                  width={12}
                  height={40}
                />
                <BracketsRight
                  className={styles.bracketsRight}
                  color="#ff3435"
                  width={12}
                  height={40}
                />
                <div className={styles.text}>BETWEEN</div>
              </div>
              <Star className={styles.star} color="#229BD2" />
            </div>
            <div className={styles.secondLine}>
              <div className={styles.text}>FRAGMENTS,</div>
            </div>
            <div className={styles.thirdLine}>
              <div className={styles.text}>A STORY FORMS</div>
            </div>
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
          {/* 두 번째 레이블 - 전시정보 */}
          <div className={styles.label}>
            <div className={styles.labelHighlight}>EXHIBITION OVERVIEW</div>
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
            서울특별시 종로구 인사동 5길 14 마루아트센터 지하1층
          </div>
          <div className={styles.dateContainer}>
            <div className={styles.date}>
              <BracketsLeft color="#ff3435" width={8} height={30} />
              <div className={styles.dateText}>2026.02.4-9</div>
              <BracketsRight color="#ff3435" width={8} height={30} />
            </div>
          </div>
          {/* 세 번째 레이블 - 인스타그램 */}
          <div className={styles.label}>
            <div className={styles.labelHighlight}>INSTAGRAM</div>
            <div className={styles.labelText}>@arc_project</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerTitle}>ARC_TEAM</div>
        <div className={styles.footerContent}>
          <div className={styles.footerWrapper}>
            <div className={styles.office}>
              <BracketsLeft color="#ff3435" width={18} height={64} />
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
              <BracketsRight color="#ff3435" width={18} height={64} />
            </div>
            <div className={styles.footerText} style={{ color: "#ff3435" }}>
              OFFICE
            </div>
          </div>
          <div className={styles.footerWrapper}>
            <div className={styles.planning}>
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
            </div>
            <div className={styles.footerText} style={{ color: "#42A9D9" }}>
              PLANNING
            </div>
          </div>
          <div className={styles.footerWrapper}>
            <div className={styles.space}>
              <BracketsLeft color="#B6DA03" width={18} height={64} />
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
              <BracketsRight color="#B6DA03" width={18} height={64} />
            </div>
            <div className={styles.footerText} style={{ color: "#B6DA03" }}>
              SPACE
            </div>
          </div>
          <div className={styles.footerWrapper}>
            <div className={styles.design}>
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
            </div>
            <div className={styles.footerText} style={{ color: "#ff3435" }}>
              DESIGN
            </div>
          </div>
          <div className={styles.footerWrapper}>
            <div className={styles.web}>
              <BracketsLeft color="#038DCC" width={18} height={64} />
              <img src={profile} alt="프로필" />
              <img src={profile} alt="프로필" />
              <BracketsRight color="#038DCC" width={18} height={64} />
            </div>
            <div className={styles.footerText} style={{ color: "#038DCC" }}>
              WEB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
