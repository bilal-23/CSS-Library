import styles from "./badge.module.css";

interface Props {
    type: "default" | "success" | "removed" | "new";
    children?: React.ReactNode;
}
const Badge: React.FC<Props> = ({ type, children }) => {
    return (
        <p className={`${styles["badge"]} ${styles[`badge-${type}`]}`}>{children}</p>
    )
}

export default Badge