import React from 'react'
import styles from "./heading.module.css";

interface Props {
    children: string;
    size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}
const Heading: React.FC<Props> = ({ children, size }) => {
    return (
        <h1 className={`${styles["heading"]} ${styles[`text-${size}`]}`}>{children}</h1>
    )
}

export default Heading