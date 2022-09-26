import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Skill.module.scss";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
interface skillProp {
    name: string;
    icon: IconDefinition;
    detailLink: string;
}

function Skill(props: skillProp) {
    return (
        <div className={styles.container}>
            <p>_______</p>
            <a className={styles.container__link} href={props.detailLink}>
                <p className={styles.container__title}>{props.name}</p>
                <FontAwesomeIcon
                    className={styles.skill}
                    icon={props.icon}
                    size="2x"
                    beat={true}
                />
            </a>
        </div>
    );
}

export default Skill;
