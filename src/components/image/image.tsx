import React from 'react'
import styles from "./image.module.css";

interface Props {
    variant: "round" | "default";
    src: string;
    alt: string;
    size?: "small" | "medium" | "large";
    width?: string;
    height?: string;
}

const Image: React.FC<Props> = ({ variant, src, alt, size, width, height }) => {
    return (
        <img src={src} alt={alt} width={width} height={height}
            className={`${styles["image"]} ${styles[variant]} ${size && styles[size]}`} />
    )
}

export default Image