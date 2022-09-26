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
        <>
            <h3 id="Skills" className={styles.container__title}>
                Skills
            </h3>
            <div className={styles.container}>
                <Skill
                    name={"HTML5"}
                    icon={brands("html5")}
                    detailLink={
                        "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                    }
                />
                <Skill
                    name={"CSS"}
                    icon={brands("css3")}
                    detailLink={"https://www.w3schools.com/css/"}
                />
                <Skill
                    name={"SASS"}
                    icon={brands("sass")}
                    detailLink={"https://sass-lang.com/"}
                />
                <Skill
                    name={"Java Script"}
                    icon={brands("js")}
                    detailLink={"https://www.javascript.com/"}
                />
                <Skill
                    name={"Java"}
                    icon={brands("java")}
                    detailLink={"https://www.java.com/en/"}
                />
                <Skill
                    name={"React"}
                    icon={brands("react")}
                    detailLink={"https://reactjs.org/"}
                />
                <Skill
                    name={"Firebase"}
                    icon={solid("fire")}
                    detailLink={"https://firebase.google.com/"}
                />
                <Skill
                    name={"AWS"}
                    icon={brands("aws")}
                    detailLink={"https://aws.amazon.com/about-aws/"}
                />
                <Skill
                    name={"Typescript"}
                    icon={solid("t")}
                    detailLink={"https://www.typescriptlang.org/"}
                />
                <Skill
                    name={"Git"}
                    icon={brands("git")}
                    detailLink={"https://github.com/"}
                />
                <Skill
                    name={"Spring API"}
                    icon={solid("leaf")}
                    detailLink={"https://spring.io/"}
                />
                <Skill
                    name={"NestJS API"}
                    icon={brands("node-js")}
                    detailLink={"https://nestjs.com/"}
                />
                <Skill
                    name={"MySQL Databse"}
                    icon={solid("box")}
                    detailLink={"https://www.mysql.com/"}
                />
                <Skill
                    name={"Docker Server Manager"}
                    icon={brands("docker")}
                    detailLink={"https://www.docker.com/"}
                />
                <Skill
                    name={"Unity Game Engine"}
                    icon={brands("unity")}
                    detailLink={"https://unity.com/"}
                />
                <Skill
                    name={"GRPC's"}
                    icon={solid("server")}
                    detailLink={"https://grpc.io/"}
                />
                <Skill
                    name={"C#"}
                    icon={solid("c")}
                    detailLink={
                        "https://learn.microsoft.com/en-us/dotnet/csharp/"
                    }
                />
            </div>
        </>
    );
}

export default Skills;
