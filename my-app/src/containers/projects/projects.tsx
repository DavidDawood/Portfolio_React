import React from "react";
import Project from "../../components/Project";
import styles from "./Projects.module.scss";
import Ecom1 from "../../images/E-Commerance/E-commerce-1.png";
import Ecom2 from "../../images/E-Commerance/E-commerce-2.png";
import Ecom3 from "../../images/E-Commerance/E-commerce-3.png";
import Ecom4 from "../../images/E-Commerance/E-commerce-4.png";
import calculator from "../../images/Calculator/calculator.png";
import morseCode from "../../images/Morse-Code/morseCode.png";

function Projects() {
    return (
        <div id="Projects" className={styles.container}>
            <div>
                <h2>Projects</h2>
                <p>
                    Some of my most noteworthy projects, be sure to take a look at my{" "}
                    <a href="https://github.com/DavidDawood">Git</a> as many of the smaller projects are listed there
                </p>
            </div>
            <br />
            <div className={styles.container__Projects}>
                <Project
                    name={"E-commerce"}
                    link="https://github.com/DavidDawood/E-commerce"
                    description={"A shopfront for space themed stationary, using javascript, HTML, SASS & Firebase"}
                    previews={[Ecom1, Ecom2, Ecom3, Ecom4]}
                    alt={["Pront page", "Found items page", "Pen holder item", "Cart Page"]}
                />
                <Project
                    name={"Calculator"}
                    link="https://github.com/DavidDawood/Project_Calculator"
                    description={"A basic calculator using HTML, SCSS & Javascript"}
                    previews={[calculator]}
                    alt={["Calculator"]}
                />
                <Project
                    name={"Morsecode Translator"}
                    link="https://github.com/DavidDawood/Project_MorseCode-Translator"
                    description={
                        "Translate morse code easily with this online translator, comes with both an english to morse and a morse to english converter, made with HTML, SCSS & Javascript"
                    }
                    previews={[morseCode]}
                    alt={["Morse-Code Translator"]}
                />
            </div>
        </div>
    );
}

export default Projects;
