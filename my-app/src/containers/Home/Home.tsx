import Introduction from "../Introduction";
import Skills from "../Skills";
import Projects from "../Projects";
import ContactMe from "../ContactMe";

function Home() {
    return (
        <div>
            <Introduction />
            <Skills />
            <Projects />
            <ContactMe />

            <p id="Skills">Skill Test</p>
        </div>
    );
}

export default Home;
