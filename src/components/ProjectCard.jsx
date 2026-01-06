import React from "react";
import styles from "../styles/components/ProjectCard.module.scss";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ image, title, artist, id }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card} onClick={() => navigate(`/project/${id}`)}>
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

