import ProjectCard from "./ProjectCard";
import styles from "../styles/components/ProjectBox.module.scss";

export default function ProjectBox({ projects = [] }) {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          artist={project.artist}
          id={project.id}
        />
      ))}
    </div>
  );
}
