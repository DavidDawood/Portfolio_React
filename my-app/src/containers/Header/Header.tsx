import { HashLink } from "react-router-hash-link";
import styles from "./Header.module.scss";

function Header() {
    return (
        <div className={styles.container}>
            <HashLink to={{ pathname: "/Home", hash: "#Introduction" }}>
                Introduction
            </HashLink>
            <HashLink to={{ pathname: "/Home", hash: "#Skills" }}>
                Skills
            </HashLink>
            <HashLink to={{ pathname: "/Home", hash: "#Projects" }}>
                Projects
            </HashLink>
            <HashLink to={{ pathname: "/Home", hash: "#Contact" }}>
                Contact
            </HashLink>
        </div>
    );
}
// these will always go to the home page, and then jump to the ID for it on the same page, can also be done on other pages too

export default Header;
