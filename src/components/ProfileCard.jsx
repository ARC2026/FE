import styles from "../styles/components/ProfileCard.module.scss";
import ParenthesisLeft from "./ParenthesisLeft";
import ParenthesisRight from "./ParenthesisRight";
export default function ProfileCard({ position, img, name, color }) {
  return (
    <div className={styles.card}>
      <div className={styles.position} style={{ color: color }}>
        {position}
      </div>
      <img src={img} alt={name} />
      <div className={styles.nameBox}>
        <ParenthesisLeft color={color} width={10} height={38} />
        <div className={styles.name}>{name}</div>
        <ParenthesisRight color={color} width={10} height={38} />
      </div>
    </div>
  );
}
