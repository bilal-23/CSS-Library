import React from 'react'
import styles from "./card.module.css";
import Badge from '../badge/badge';
import { X } from 'lucide-react';

interface Props {
    badge?: string;
    dismissible?: boolean;
    textOverlay?: string;
    axis?: "vertical" | "horizontal"
    shadow: "none" | "small" | "medium" | "large";
    text?: string;
    image?: string;
    heading: string;
}


const Card: React.FC<Props> = ({ badge, dismissible, textOverlay, axis, shadow, text, image, heading }) => {
    return (
        <div className={`${styles["card"]} ${styles[`shadow-${shadow}`]}`}>
            <p className={styles["heading"]}>
                {heading}
            </p>
            {badge ? <div className={styles["right-top-container"]}><Badge type="default">{badge}</Badge></div> : null}
            {dismissible ? <div className={styles["right-top-container"]}> <X /></div> : null}
            <div className={styles["card-container"]} style={{ flexDirection: axis === "horizontal" ? "row" : "column" }}>
                {image ? <img src={image} alt="card" className={styles["image"]} /> : null}
                {textOverlay ? <p className={styles["text-overlay"]}>{textOverlay}</p> : null}
                {text && <p className={`${styles["text"]} `}>{text}</p>}
            </div>
        </div>
    )
}

export default Card