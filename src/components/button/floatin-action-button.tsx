import React from 'react'
import styles from "./button.module.css";
import { FileEdit, Plus } from 'lucide-react';

interface Props {
    type: "add" | "edit";
}
const FloatingActionButton: React.FC<Props> = ({ type }) => {
    return (
        <button className={`${styles["button"]}  ${styles["floating-btn"]} ${styles[`button-${type}`]}`}>
            {type === "add" ? <Plus /> : <FileEdit />}
        </button>
    )
}

export default FloatingActionButton