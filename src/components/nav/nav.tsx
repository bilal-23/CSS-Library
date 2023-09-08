import styles from "./nav.module.css";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const searchRef = useRef<HTMLInputElement>(null);
    const handleSearch = (e: any) => {
        e.preventDefault();
        if (searchRef.current) {
            console.log(searchRef.current.value);
            navigate(`/${searchRef.current.value}`);
            searchRef.current.value = "";
        }
    }
    return (
        <nav className={styles["nav"]}>
            <p className={styles["name"]}>Bilal Component Library</p>
            {/* SEARCH */}
            <form onSubmit={handleSearch} className={styles["search"]}>
                <input type="text" placeholder="Search..." ref={searchRef} />
                <button type="submit">Search</button>
            </form>
            <div className={styles["nav-links"]}>
                <Link to="/">Home</Link>
                <Link to="/components">Components</Link>
            </div>
        </nav>
    )
}

export default Nav