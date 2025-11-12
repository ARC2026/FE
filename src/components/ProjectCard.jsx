import React from "react";
import styles from "../styles/components/ProjectCard.module.scss";

const ProjectCard = ({ image, title, artist }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.artist}>{artist}</div>
      </div>
    </div>
  );
};

export default ProjectCard;

