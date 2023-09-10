import React from 'react';
import styles from "./button.module.css";
import { FileEdit, PenLine, Search, Trash2 } from 'lucide-react';

interface Props {
    type: "search" | "edit" | "create" | "delete";
    children: React.ReactNode;
}

const IconButton: React.FC<Props> = ({ type, children }) => {
    return (
        <button className={`${styles["button"]} ${styles[`button-${type}`]}`}>
            {type === "search" ? <Search /> : type === "create" ? <PenLine /> : type === "delete" ? <Trash2 /> : <FileEdit />}
            {children}
        </button>
    )
}


export default IconButton