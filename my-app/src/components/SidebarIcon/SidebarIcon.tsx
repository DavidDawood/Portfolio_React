import React from "react";
import Styles from "./SidebarIcon.module.scss";

interface sidebarProp {
    img: string;
    link: string;
    alt: string;
}

function SidebarIcon(props: sidebarProp) {
    return (
        <div className={Styles.container}>
            <a href={props.link}>
                <img src={props.img} alt={props.alt} />
            </a>
        </div>
    );
}

export default SidebarIcon;
