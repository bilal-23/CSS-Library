import Badge from "../components/badge/badge"
import styles from "./doc.module.css"

const BadgeDoc = () => {
    return (
        <section className={styles["section-container"]}>
            <div>

                <h1>Badge</h1>
                <p className={styles["description"]}>The badge component is used to display short information</p>
            </div>
            <div className={styles["component-container"]}>
                <Badge type="default">Default</Badge>
                <Badge type="new">New</Badge>
                <Badge type="removed">Removed</Badge>
                <Badge type="success">Success</Badge>
            </div>
            <p className={styles["use"]}>
                How to use badge component?
                <div className={styles["code-component"]}>
                    <p>
                        {`<Badge type="default">Default</Badge>`}
                    </p>
                    <p>
                        {`<Badge type="new">New</Badge>`}
                    </p>
                    <p>
                        {`<Badge type="removed">Removed</Badge>`}
                    </p>
                    <p>
                        {`<Badge type="success">Success</Badge>`}
                    </p>
                </div>
            </p>
        </section>
    )
}

export default BadgeDoc