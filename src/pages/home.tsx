import { Link } from "react-router-dom";
import styles from "./home.module.css";

export const Home = () => {
    return (
        <section className={styles["section"]}>
            <h1>Bilal CSS Component Library</h1>
            <p>A collection of components, just copy paste the css and tsx file</p>
            <Link to={"/components"}>
                <button>Get Started</button>
            </Link>
            <Link to="https://github.com/bilal-23/CSS-Library" target="_blank"
                rel="noopener noreferrer">
                <button>GitHub Repo</button>
            </Link>
        </section >
    )
}
