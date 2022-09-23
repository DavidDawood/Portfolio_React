import Introduction from "../Introduction";
import Skills from "../Skills";
import Projects from "../Projects";
import ContactMe from "../ContactMe";
import styles from "./Home.module.scss";

function Home() {
    return (
        <div className={styles.Container}>
            <Introduction />
            <Skills />
            <Projects />
            <ContactMe />

            <p id="Skills">Skill Test</p>
        </div>
    );
}

export default Home;
