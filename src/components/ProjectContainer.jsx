import ProjectBox from "./ProjectBox";
import styles from "../styles/components/ProjectContainer.module.scss";
export default function ProjectContainer() {
  return (
    <div className={styles.container}>
      <ProjectBox />
      <div className={styles.secondProjectBox}>
        <ProjectBox />
      </div>
      <div className={styles.thirdProjectBox}>
        <ProjectBox />
      </div>
    </div>
  );
}
