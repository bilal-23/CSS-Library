import Button from "../components/button/button"
import FloatingActionButton from "../components/button/floatin-action-button"
import IconButton from "../components/button/icon-button"
import styles from "./doc.module.css"

const ButtonDoc = () => {
    return (
        <section className={styles["section-container"]}>
            <div>
                <h1>Button</h1>
                <p className={styles["description"]}>Button Component provides various styles for different actions</p>
            </div>
            <div className={styles["component-container"]}>
                <Button type="primary">Primary</Button>
                <Button type="outlined">Outlined</Button>
            </div>
            <div className={styles["use"]}>
                How to use Button component?
                <div className={styles["code-component"]}>
                    <p>
                        {`<Button type="primary">Primary</Button>`}
                    </p>
                    <p>
                        {` <Button type="outlined">Outlined</Button>`}
                    </p>
                </div>
            </div>
            {/* ICON BUTTON */}
            <div>
                <h1>IconButton</h1>
                <p className={styles["description"]}>Icon Button combines icon with text for actions</p>
            </div>
            <div className={styles["component-container"]}>
                <IconButton type="search">Search</IconButton>
                <IconButton type="edit">Edit</IconButton>
                <IconButton type="create">Create</IconButton>
                <IconButton type="delete">Delete</IconButton>
            </div>
            <div className={styles["use"]}>
                How to use IconButton component?
                <div className={styles["code-component"]}>
                    <p>
                        {`<IconButton type="search">Search</IconButton>`}
                    </p>
                    <p>
                        {`<IconButton type="edit">Edit</IconButton>`}
                    </p>
                    <p>
                        {`<IconButton type="create">Create</IconButton>`}
                    </p>
                    <p>
                        {`<IconButton type="delete">Delete</IconButton>`}
                    </p>
                </div>
            </div>
            {/* FLoating action */}
            <div>
                <h1>Floating Action Button</h1>
                <p className={styles["description"]}>Quick action for user interaction</p>
            </div>
            <div className={styles["component-container"]}>
                <FloatingActionButton type="add" />
                <FloatingActionButton type="edit" />
            </div>
            <div className={styles["use"]}>
                How to use Floating Action Button component?
                <div className={styles["code-component"]}>
                    <p>
                        {`  <FloatingActionButton type="add" />`}
                    </p>
                    <p>
                        {`<FloatingActionButton type="edit" />`}
                    </p>
                </div>
            </div>

        </section>)
}

export default ButtonDoc