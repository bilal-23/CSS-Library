import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

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

const Sidebar = () => {
    return (
        <ul className={styles["list"]}>
            {
                compLinks.map((link, index) => {
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