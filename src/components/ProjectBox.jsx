import ProjectCard from "./ProjectCard";
import { projectSample } from "../assets";
import styles from "../styles/components/ProjectBox.module.scss";
export default function ProjectBox() {
  return (
    <div className={styles.container}>
      <ProjectCard image={projectSample} title="Project 1" artist="Artist 1" />
      <ProjectCard image={projectSample} title="Project 2" artist="Artist 2" />
    </div>
  );
}
