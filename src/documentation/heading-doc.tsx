import Heading from "../components/heading/heading"
import styles from "./doc.module.css"
const HeadingDoc = () => {
    return (
        <section className={styles["section-container"]}>
            <div>
                <h1>Headingcomponent</h1>
            </div>
            <div className={styles["component-container"]} style={{ flexDirection: "column" }}>
                <Heading size="xs">XS Heading</Heading>
                <Heading size="sm">SM Heading</Heading>
                <Heading size="base">Base Heading</Heading>
                <Heading size="lg">LG Heading</Heading>
                <Heading size="xl">XL Heading</Heading>
                <Heading size="2xl">2XL Heading</Heading>
                <Heading size="3xl">3XL Heading</Heading>
                <Heading size="4xl">4XL Heading</Heading>
            </div>
            <div className={styles["use"]}>
                How to use Heading component?
                <div className={styles["code-component"]}>
                    <p>{`<Heading size="xs">XS Heading</Heading>`}</p>
                    <p>{`<Heading size="sm">SM Heading</Heading>`}</p>
                    <p>{`<Heading size="base">Base Heading</Heading>`}</p>
                    <p>{`<Heading size="lg">LG Heading</Heading>`}</p>
                    <p>{`<Heading size="xl">XL Heading</Heading>`}</p>
                    <p>{`<Heading size="2xl">2XL Heading</Heading>`}</p>
                    <p>{`<Heading size="3xl">3XL Heading</Heading>`}</p>
                    <p>{`<Heading size="4xl">4XL Heading</Heading>`}</p>
                </div>
            </div>
        </section >
    )
}

export default HeadingDoc