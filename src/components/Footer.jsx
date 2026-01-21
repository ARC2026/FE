import styles from "../styles/components/Footer.module.scss";
import { rixfont, photomate } from "../assets";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTitle}>
        BETWEEN FRAGMENTS, A STORY FORMS
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <div className={styles.footerText}>대학생 연합 전시회 ARC</div>
          <div className={styles.footerText}>
            서울특별시 종로구 인사동 5길 14
          </div>
          <div className={styles.footerText}>전시 협찬</div>
          <a 
            href="https://www.instagram.com/arc__project/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            @arc__project
          </a>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerText}>ART & DESIGN EXHIBITION</div>
          <div className={styles.footerText}>
            SEOUL JONGNO-GU INSADONG 5-GIL 14,
          </div>
          <div className={styles.sponsorLogos}>
            <img src={rixfont} alt="RixFont" />
            <img src={photomate} alt="Photomate" />
          </div>
          <div className={styles.footerText}>
            © 2026. ARC All rights reserved.
          </div>
        </div>
        <div className={styles.footerLogo}>
          <img src="/logoForFooter.svg" alt="ARC" />
        </div>
      </div>
    </footer>
  );
}

