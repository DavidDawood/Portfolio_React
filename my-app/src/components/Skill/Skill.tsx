import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Skill.module.scss";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
interface skillProp {
    name: string;
    description: string;
    icon: IconDefinition;
    detailLink: string;
}

function Skill(props: skillProp) {
    return (
        <div className={styles.container}>
            <a className={styles.container__link} href={props.detailLink}>
                <p className={styles.container__title}>{props.name}</p>
                <FontAwesomeIcon
                    className={styles.skill}
                    icon={props.icon}
                    size="2x"
                    beat={true}
                />
            </a>
            <p>———</p>
        </div>
    );
}

export default Skill;
