import Introduction from "../Introduction";
import Skills from "../Skills";
import Projects from "../Projects";
import styles from "./Home.module.scss";

function Home() {
    return (
        <div className={styles.Container}>
            <Introduction />
            <Skills />
            <Projects />
        </div>
    );
}

export default Home;
