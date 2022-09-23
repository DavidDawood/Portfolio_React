import React from "react";
import styles from "./Skill.module.scss";
interface skillProp {
    img: string;
    description: string;
    name: string;
    furtherDetailsLink: string;
    imgDescription: string;
}

function Skill(props: skillProp) {
    return (
        <div className={styles.container}>
            <p className={styles.container__title}>{props.name}</p>
            <a href={props.furtherDetailsLink}>
                <img src={props.img} alt={props.imgDescription} />
            </a>
        </div>
    );
}

export default Skill;
