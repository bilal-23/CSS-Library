import Text from "../components/text/text"
import styles from "./doc.module.css"
const TextDoc = () => {
    return (
        <section className={styles["section-container"]}>
            <div>
                <h1>Headingcomponent</h1>
            </div>
            <div className={styles["component-container"]} style={{ flexDirection: "column" }}>
                <Text size="xs">XS Text</Text>
                <Text size="sm">SM Text</Text>
                <Text size="base">Base Text</Text>
                <Text size="lg">LG Text</Text>
                <Text size="xl">XL Text</Text>
                <Text size="2xl">2XL Text</Text>
                <Text size="3xl">3XL Text</Text>
                <Text size="4xl">4XL Text</Text>
            </div>
            <div className={styles["use"]}>
                How to use Text component?
                <div className={styles["code-component"]}>
                    <p>{`<Text size="xs">XS Text</Text>`}</p>
                    <p>{`<Text size="sm">SM Text</Text>`}</p>
                    <p>{`<Text size="base">Base Text</Text>`}</p>
                    <p>{`<Text size="lg">LG Text</Text>`}</p>
                    <p>{`<Text size="xl">XL Text</Text>`}</p>
                    <p>{`<Text size="2xl">2XL Text</Text>`}</p>
                    <p>{`<Text size="3xl">3XL Text</Text>`}</p>
                    <p>{`<Text size="4xl">4XL Text</Text>`}</p>
                </div>
            </div>
        </section >
    )
}

export default TextDoc