import BracketsLeft from "./BracketsLeft";
import BracketsRight from "./BracketsRight";
import Star from "./Star";
import styles from "../styles/components/ProjectDetailSection.module.scss";

export default function ProjectDetailSection({ title, artist, overview, contact }) {
  return (
    <div className={styles.content}>
      {/* TITLE 섹션 */}
      <div className={styles.titleSection}>
        <BracketsLeft color="#ff3435" width={12} height={40} />
        <span className={styles.titleLabel}>{title}</span>
        <BracketsRight color="#ff3435" width={12} height={40} />
        <Star className={styles.asterisk} color="#229bd2" />
      </div>
      <div className={styles.artistName}>
        {Array.isArray(artist) ? (
          artist.map((name, index) => (
            <span key={index}>{name}</span>
          ))
        ) : (
          <span>{artist}</span>
        )}
      </div>

      {/* OVERVIEW 섹션 */}
      <div className={styles.overviewSection}>
        <BracketsLeft color="#B6DA03" width={8} height={27} />
        <span className={styles.overviewLabel}>OVERVIEW</span>
        <BracketsRight color="#B6DA03" width={8} height={27} />
      </div>
      <div className={styles.overviewText}>
        {overview}
      </div>

      {/* CONTACT 섹션 */}
      <div className={styles.contactSection}>
        <BracketsLeft color="#229BD2" width={8} height={27} />
        <span className={styles.contactLabel}>CONTACT</span>
        <BracketsRight color="#229BD2" width={8} height={27} />
      </div>
      <div className={styles.contactText}>
        {Array.isArray(contact) ? (
          contact.map((item, index) => {
            const username = item.replace("@", "");
            return (
              <span 
                key={index} 
                onClick={() => window.open(`https://www.instagram.com/${username}`, "_blank")}
                className={styles.contactLink}
              >
                {item}
              </span>
            );
          })
        ) : (
          <span 
            onClick={() => {
              const username = contact.replace("@", "");
              window.open(`https://www.instagram.com/${username}`, "_blank");
            }}
            className={styles.contactLink}
          >
            {contact}
          </span>
        )}
      </div>
    </div>
  );
}

