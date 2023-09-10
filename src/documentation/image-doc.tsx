import Image from "../components/image/image"
import styles from "./doc.module.css"
const ImageDoc = () => {
    return (
        <section className={styles["section-container"]}>
            <div>
                <h1>Image Component Responsive</h1>\
                <p>This image is responsive</p>
            </div>
            <div className={styles["component-container"]} style={{ flexDirection: "column" }}>
                <Image variant="default" src="https://placehold.co/600x400" alt="image" />
            </div>
            <div className={styles["use"]}>
                How to use Image component?
                <div className={styles["code-component"]}>
                    <p>{`<Image variant="default" src="https://placehold.co/600x400" alt="image" />`}</p>
                </div>
            </div>
            <div>
                <h1>Image Component Round</h1>
                <p>This image is rounded</p>
            </div>
            <div className={styles["component-container"]} style={{ flexDirection: "row" }}>
                <Image variant="round" size="small" src="https://placehold.co/600x400" alt="image" />
                <Image variant="round" size="medium" src="https://placehold.co/600x400" alt="image" />
                <Image variant="round" size="large" src="https://placehold.co/600x400" alt="image" />
            </div>
            <div className={styles["use"]}>
                How to use Image component?
                <div className={styles["code-component"]}>
                    <p>{`<Image variant="round" size="small" src="https://placehold.co/600x400" alt="image" />`}</p>
                    <p>{`<Image variant="round" size="small" src="https://placehold.co/600x400" alt="image" />`}</p>
                    <p>{`<Image variant="round" size="large" src="https://placehold.co/600x400" alt="image" />`}</p>
                </div>
            </div>
        </section >
    )
}

export default ImageDoc