import { Link } from "react-router-dom";
import styles from "./components.module.css";
const compLinks = [
    {
        path: "/avatar",
        name: "Avatar"
    },
    {
        path: "/alert",
        name: "Alert"
    },
    {
        path: "/badge",
        name: "Badge"
    },
    {
        path: "/button",
        name: "Button"
    },
    {
        path: "/card",
        name: "Card"
    },
    {
        path: "/heading",
        name: "Heading"
    },
    {
        path: "/text",
        name: "Text"
    },
    {
        path: "image",
        name: "Image"
    }
]

const Components = () => {
    return (
        <section className={styles["container"]}>
            <h1 className={styles["title"]}>Components</h1>
            <div className={styles["card-container"]}>
                {
                    compLinks.map((item) => {
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