import { Info, ShieldAlert, ShieldBan, ShieldCheck } from "lucide-react";
import styles from "./alert.module.css";

interface Props {
    type: "error" | "success" | "warning" | "info";
    children?: React.ReactNode;
}

const Alert: React.FC<Props> = ({ type, children }) => {

    return (
        <div className={`${styles["alert"]} ${styles[`alert-${type}`]}`}>
            {type === "error" ? <ShieldBan color="#eb2424" /> : type === "success" ? <ShieldCheck color="#4be907" /> : type === "warning" ? <ShieldAlert color="#dd6b20" /> : <Info color="#2d3748" />
            }
            <p>{children}</p>
        </div>
    )
}

export default Alert;

