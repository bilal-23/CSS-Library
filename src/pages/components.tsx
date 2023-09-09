import { Link } from "react-router-dom";
import styles from "./components.module.css";
import { componentsData } from "../components";

const Components = () => {
    return (
        <section className={styles["container"]}>
            <h1 className={styles["title"]}>Components</h1>
            <div className={styles["card-container"]}>
                {
                    componentsData.map((item) => {
                        return (
                            <Link to={item.path} className={styles["card"]}>
                                <h3>{item.name}</h3>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Components