import styles from "./doc.module.css";
import Avatar from "../components/avatar/avatar";
// Using ES6 import syntax
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

// Then register the languages you need
hljs.registerLanguage('javascript', javascript);

const avatarSmall = hljs.highlight(
    '<Avatar src="https://avatars.githubusercontent.com/u/25126281?v=4" alt="avatar" size="small" />',
    { language: 'javascript' }
).value;

const AvatarDoc = () => {
    return (
        <section className={styles["section-container"]}>
            <div>

                <h1>Avatars</h1>
                <p className={styles["description"]}>The avatar component displays an image in a circular shape</p>
            </div>
            <div className={styles["component-container"]}>
                <Avatar src="https://avatars.githubusercontent.com/u/25126281?v=4" alt="avatar" size="small" />
                <Avatar src="https://avatars.githubusercontent.com/u/25126281?v=4" alt="avatar" size="medium" />
                <Avatar src="https://avatars.githubusercontent.com/u/25126281?v=4" alt="avatar" size="large" />
            </div>
            <p className={styles["use"]}>
                How to use avatar component?
                <div className={styles["code-component"]}>
                    <p>
                        {"<Avatar src='https://avatars.githubusercontent.com/u/25126281?v=4' alt='avatar' size='small' />"}
                    </p>
                    <p>
                        {"<Avatar src='https://avatars.githubusercontent.com/u/25126281?v=4' alt='avatar' size='medium' />"}
                    </p>
                    <p>
                        {"<Avatar src='https://avatars.githubusercontent.com/u/25126281?v=4' alt='avatar' size='large' />"}
                    </p>
                </div>
            </p>
        </section>
    )
}

export default AvatarDoc