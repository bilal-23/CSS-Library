import React from "react";
import styles from "./avatar.module.css";

interface Props {
    src: string;
    alt: string;
    size: "small" | "medium" | "large";
}
const Avatar: React.FC<Props> = ({ src, alt, size }) => {
    return (
        <img src={src} alt={alt} className={`${styles["avatar"]} ${styles[`avatar-${size}`]}`} />
    )
}

export default Avatar