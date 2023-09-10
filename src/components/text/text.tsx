import React from 'react'
import styles from "./text.module.css";

interface Props {
    children: string;
    size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}
const Text: React.FC<Props> = ({ children, size }) => {
    return (
        <p className={`${styles["heading"]} ${styles[`text-${size}`]}`}>{children}</p>
    )
}

export default Text