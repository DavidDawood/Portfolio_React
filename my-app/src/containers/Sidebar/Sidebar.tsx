import SidebarIcon from "../../components/SidebarIcon/SidebarIcon";
import Styles from "./Sidebar.module.scss";

import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

function Sidebar() {
    return (
        <div className={Styles.container}>
            <SidebarIcon
                img={brands("github")}
                link={"https://github.com/DavidDawood?tab=repositories"}
            />
            <SidebarIcon
                img={brands("twitter")}
                link={"https://twitter.com/MothersHome108"}
            />
            <SidebarIcon
                img={solid("code")}
                link={"https://www.codewars.com/users/DavidDawood"}
            />
            <SidebarIcon
                img={brands("linkedin")}
                link={"https://www.linkedin.com/in/david-dawood-09107a208/"}
            />
        </div>
    );
}

export default Sidebar;
