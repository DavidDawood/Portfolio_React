import Introduction from "../Introduction";
import Skills from "../Skills";
import Projects from "../Projects";
import ContactMe from "../ContactMe";
import { useParams } from "react-router-dom";

function Home() {
    const { id } = useParams();
    return (
        <div>
            <p>{id}</p>
            <Introduction />
            <Skills />
            <Projects />
            <ContactMe />
        </div>
    );
}

export default Home;
