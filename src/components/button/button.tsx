import styles from "./button.module.css";

interface Props {
    type: "primary" | "outlined";
    children?: React.ReactNode;
}
const Button: React.FC<Props> = ({ type, children }) => {
    return (
        <button className={`${styles["button"]} ${styles[`button-${type}`]}`}>{children}</button>
    )
}

export default Button