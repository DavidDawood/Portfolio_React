import styles from "./Header.module.scss";

import { NavLink } from "react-router-dom";
function Header() {
    return (
        <div className={styles.container}>
            <NavLink to={"/Home:1"}>Introduction</NavLink>
            <NavLink to={"/Home:2"}>Skills</NavLink>
            <NavLink to={"/Home:3"}>Projects</NavLink>
            <NavLink to={"/Home:4"}>Contact Me</NavLink>
        </div>
    );
}
// these will always go to the home page, and jump to a certain link

export default Header;
