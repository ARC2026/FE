import React from "react";
import styles from "../styles/components/ProjectCard.module.scss";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ image, title, team, id }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card} onClick={() => navigate(`/project/${id}`)}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.team}>{team}</div>
      </div>
    </div>
  );
};

export default ProjectCard;

