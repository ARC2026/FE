import { useState } from "react";
import styles from "../styles/pages/About.module.scss";
import BracketsLeft from "../components/BracketsLeft";
import BracketsRight from "../components/BracketsRight";
import Star from "../components/Star";
import { parenthesisLeft, parenthesisRight } from "../assets";
import teamData from "../apis/teamData.json";
import TeamSection from "../components/TeamSection";
import Menu from "../components/Menu";

export default function About() {
  const [hoveredProfile, setHoveredProfile] = useState(null);
  return (
    <div className={styles.container}>
      <Menu />
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
              사이(思異)
              <br />
              ‘존재’는 언제나 확정된 하나의 지점이 아닌,
              <br />
              과거와 미래, 타인과 나 사이의 여백에서 더 뚜렷해집니다.
              <br />
              2026의 ARC는 그 찰나의 간극에서 피어나는 각자의 감각과 사유를 예술로 풀어내며,
              <br />
              관람객과 함께 그 사이 를 사유 하는 시간을 제안합니다.
            </div>
            <img src={parenthesisRight} alt=")" style={{ zIndex: 0 }} />
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
            {`서울특별시 종로구 인사동 5길 14 마루아트센터 지하1층, <<특별관>>`}
          </div>
          <div className={styles.dateContainer}>
            <div className={styles.date}>
              <BracketsLeft color="#ff3435" width={8} height={30} />
              <div className={styles.dateText}>2026.02.04-09</div>
              <BracketsRight color="#ff3435" width={8} height={30} />
            </div>
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
            <div className={styles.labelText}>|</div>
            <div className={styles.labelTextContainer}>
              <div className={styles.labelTitle}>Photo</div>
              <a
                className={styles.labelText}
                href="https://www.instagram.com/kwonnninseo"
                target="_blank"
                rel="noopener noreferrer"
              >
                @kwonnninseo
              </a>
              </div>
            <div className={styles.labelText}>|</div>
            <div className={styles.labelTextContainer}>
              <div className={styles.labelTitle}>Music</div>
              <a
                className={styles.labelText}
                href="https://www.instagram.com/sdrain_official"
                target="_blank"
                rel="noopener noreferrer"
              >
                @sdrain_official
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerTitle}>ARC_TEAM</div>
        <div className={styles.footerContent}>
          {teamData.map((team) => (
            <TeamSection
              key={team.id}
              team={team}
              hoveredProfile={hoveredProfile}
              setHoveredProfile={setHoveredProfile}
              styles={styles}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
