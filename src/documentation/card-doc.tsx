import Card from "../components/card/card"
import styles from "./doc.module.css"

const CardDoc = () => {
    return (
        <section className={styles["section-container"]}>
            <div>
                <h1>Card with badge component</h1>
                <p className={styles["description"]}>Card is a flexible component used to group and display content in a clear and concise format.</p>
            </div>
            <div className={styles["component-container"]}>
                <Card heading="Card with badge" shadow="none" badge="new" text="This is a card with bage" />
            </div>
            <div className={styles["use"]}>
                How to use Card component?
                <div className={styles["code-component"]}>
                    <p>
                        {`<Card heading="Card with badge" shadow="none" badge="new" text="This is a card with bage" />`}
                    </p>
                </div>
            </div>
            {/* Card with dismiss */}
            <div>
                <h1>Card with dismiss </h1>
                <p className={styles["description"]}>Card is a flexible component used to group and display content in a clear and concise format.</p>
            </div>
            <div className={styles["component-container"]}>
                <Card heading="Card with dismiss" shadow="none" dismissible text="This is a card with dismiss" />
            </div>
            <div className={styles["use"]}>
                How to use Card component?
                <div className={styles["code-component"]}>
                    <p>
                        {`<Card heading="Card with dismiss" shadow="none" dismissible text="This is a card with dismiss" />`}
                    </p>
                </div>
            </div>
            {/* Cards with text overlay */}
            <div>
                <h1>Card with text overlay </h1>
                <p className={styles["description"]}>Card is a flexible component used to group and display content in a clear and concise format.</p>
            </div>
            <div className={styles["component-container"]}>
                <Card heading="Card with text overlay" shadow="none"
                    image="https://placehold.co/200x200"
                    textOverlay="This is overlay text" />
            </div>
            <div className={styles["use"]}>
                How to use Card component?
                <div className={styles["code-component"]}>
                    <p>
                        {`<Card heading="Card with text overlay" shadow="none"
                    image="https://placehold.co/200x200"
                    textOverlay="This is overlay text" />`}
                    </p>
                </div>
            </div>
            {/* Cards with text overlay */}
            <div>
                <h1>Card with text only </h1>
                <p className={styles["description"]}>Card is a flexible component used to group and display content in a clear and concise format.</p>
            </div>
            <div className={styles["component-container"]}>
                <Card heading="Card with text only" shadow="none" text="This is only text card" />
            </div>
            <div className={styles["use"]}>
                How to use Card component?
                <div className={styles["code-component"]}>
                    <p>
                        {`<Card heading="Card with text only" shadow="none" text="This is only text card" />`}
                    </p>
                </div>
            </div>
            {/* Cards with axis  */}
            <div>
                <h1>Card with vertical and horizontal axis </h1>
                <p className={styles["description"]}>Card is a flexible component used to group and display content in a clear and concise format.</p>
            </div>
            <div className={styles["component-container"]}>
                <Card heading="Card with Vertical Axis" shadow="none"
                    image="https://placehold.co/200x200"
                    axis="vertical"
                    text="This is vertical" />
                <Card heading="Card with Horizontal axis" shadow="none"
                    image="https://placehold.co/200x200"
                    axis="horizontal"
                    text="This is horizontal text" />
            </div>
            <div className={styles["use"]}>
                How to use Card component?
                <div className={styles["code-component"]}>
                    <p>
                        {`<Card heading="Card with text overlay" shadow="none"
                    image="https://placehold.co/200x200"
                    axis="vertical"
                    text="This is vertical" />`}
                    </p>
                    <p>
                        {`<Card heading="Card with text overlay" shadow="none"
                    image="https://placehold.co/200x200"
                    axis="horizontal"
                    text="This is horizontal text" />`}
                    </p>
                </div>
            </div>
            {/* Cards with shadow */}
            <div>
                <h1>Card with Shadow </h1>
                <p className={styles["description"]}>Card is a flexible component used to group and display content in a clear and concise format.</p>
            </div>
            <div className={styles["component-container"]}>
                <Card heading="Card with shadow" shadow="medium" text="This is shadow card" />
            </div>
            <div className={styles["use"]}>
                How to use Card component?
                <div className={styles["code-component"]}>
                    <p>
                        {`<Card heading="Card with shadow" shadow="medium" text="This is shadow card" />`}
                    </p>
                </div>
            </div>

        </section>
    )
}

export default CardDoc