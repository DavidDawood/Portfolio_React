import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./SidebarIcon.module.scss";

interface sidebarProp {
    img: IconDefinition;
    link: string;
}

function SidebarIcon(props: sidebarProp) {
    return (
        <div className={Styles.container}>
            <a href={props.link}>
                <FontAwesomeIcon
                    className={Styles.container__icon}
                    icon={props.img}
                    size="2x"
                    beat={true}
                />
            </a>
        </div>
    );
}

export default SidebarIcon;
