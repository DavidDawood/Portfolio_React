import React from "react";
import Skill from "../../components/Skill";
import styles from "./Skills.module.scss";
import {
    solid,
    regular,
    brands,
    icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

function Skills() {
    return (
        <div className={styles.container} id="Skills">
            <Skill
                name={"HTML5"}
                description={"basic structure of HTML"}
                icon={brands("html5")}
                detailLink={
                    "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                }
            />
            <Skill
                name={"HTML5"}
                description={"basic structure of HTML"}
                icon={brands("html5")}
                detailLink={
                    "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                }
            />
            <Skill
                name={"HTML5"}
                description={"basic structure of HTML"}
                icon={brands("html5")}
                detailLink={
                    "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                }
            />
            <Skill
                name={"HTML5"}
                description={"basic structure of HTML"}
                icon={brands("html5")}
                detailLink={
                    "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                }
            />
            <Skill
                name={"HTML5"}
                description={"basic structure of HTML"}
                icon={brands("html5")}
                detailLink={
                    "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                }
            />
        </div>
    );
}

export default Skills;
