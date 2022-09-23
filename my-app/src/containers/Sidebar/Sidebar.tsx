import React from "react";
import SidebarIcon from "../../components/SidebarIcon/SidebarIcon";
import Styles from "./Sidebar.module.scss";
import Gitcat from "./../../images/GitHubCat.png";

function Sidebar() {
    return (
        <div className={Styles.container}>
            <SidebarIcon
                img={Gitcat}
                link={"https://github.com/DavidDawood?tab=repositories"}
                alt={"Git"}
            />
            <SidebarIcon
                img={Gitcat}
                link={"https://github.com/DavidDawood?tab=repositories"}
                alt={"Git"}
            />
            <SidebarIcon
                img={Gitcat}
                link={"https://github.com/DavidDawood?tab=repositories"}
                alt={"Git"}
            />
            <SidebarIcon
                img={Gitcat}
                link={"https://github.com/DavidDawood?tab=repositories"}
                alt={"Git"}
            />
        </div>
    );
}

export default Sidebar;
