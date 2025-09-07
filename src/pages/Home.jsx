import styles from "../styles/pages/Home.module.scss";
import BracketsLeft from "../components/BracketsLeft";
import BracketsRight from "../components/BracketsRight";
import Star from "../components/Star";
import { date } from "../assets";
import Menu from "../components/Menu";
export default function Home() {
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
    </div>
  );
}
