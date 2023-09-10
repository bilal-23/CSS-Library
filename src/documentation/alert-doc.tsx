import Alert from "../components/alert/alert"
import styles from "./doc.module.css"
const AlertDoc = () => {
    return (
        <section className={styles["section-container"]}>
            <div>

                <h1>Alerts</h1>
                <p className={styles["description"]}>The alert component can be used to show various types of message with respect to the type of message</p>
            </div>
            <div className={styles["component-container"]} style={{ flexDirection: "column" }}>
                <Alert type='error'>Error</Alert>
                <Alert type='info'>Info</Alert>
                <Alert type='success'>Success</Alert>
                <Alert type='warning'>Warning</Alert>
            </div>
            <p className={styles["use"]}>
                How to use alert component?
                <div className={styles["code-component"]}>
                    <p>{"<Alert type='error'>Error</Alert>"}</p>
                    <p>{"<Alert type='info'>Info</Alert>"}</p>
                    <p>{"<Alert type='success'>Success</Alert>"}</p>
                    <p>{"<Alert type='warning'>Warning</Alert>"}</p>
                </div>
            </p>
        </section>
    )
}

export default AlertDoc