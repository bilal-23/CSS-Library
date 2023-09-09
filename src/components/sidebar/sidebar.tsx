import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import { componentsData } from "../../components";

const Sidebar = () => {
    return (
        <ul className={styles["list"]}>
            {
                componentsData.map((link, index) => {
                    return (
                        <li key={index} className={styles["list-item"]}>
                            <Link to={link.path} className={styles["list-item-link"]}>
                                {link.name}
                            </Link>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default Sidebar