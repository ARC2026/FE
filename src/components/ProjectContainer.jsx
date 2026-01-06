import ProjectBox from "./ProjectBox";
import styles from "../styles/components/ProjectContainer.module.scss";

export default function ProjectContainer({ projects = [] }) {
  return (
    <div className={styles.container}>
      <ProjectBox projects={projects.slice(0, 2)} />
      <div className={styles.secondProjectBox}>
        <ProjectBox projects={projects.slice(2, 4)} />
      </div>
      <div className={styles.thirdProjectBox}>
        <ProjectBox projects={projects.slice(4, 6)} />
      </div>
    </div>
  );
}
