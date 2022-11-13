import Skill from "../../components/Skill";
import styles from "./Skills.module.scss";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

function Skills() {
    return (
        <>
            <h2 id="Skills">Skills</h2>
            <div className={styles.container}>
                <Skill
                    name={"HTML5"}
                    icon={brands("html5")}
                    detailLink={"https://developer.mozilla.org/en-US/docs/Glossary/HTML5"}
                />
                <Skill name={"CSS"} icon={brands("css3")} detailLink={"https://www.w3schools.com/css/"} />
                <Skill name={"SASS"} icon={brands("sass")} detailLink={"https://sass-lang.com/"} />
                <Skill name={"Java Script"} icon={brands("js")} detailLink={"https://www.javascript.com/"} />
                <Skill name={"Java"} icon={brands("java")} detailLink={"https://www.java.com/en/"} />
                <Skill name={"React"} icon={brands("react")} detailLink={"https://reactjs.org/"} />
                <Skill name={"Firebase"} icon={solid("fire")} detailLink={"https://firebase.google.com/"} />
                <Skill name={"AWS"} icon={brands("aws")} detailLink={"https://aws.amazon.com/about-aws/"} />
                <Skill name={"Typescript"} icon={solid("t")} detailLink={"https://www.typescriptlang.org/"} />
                <Skill name={"Git"} icon={brands("git")} detailLink={"https://github.com/"} />
                <Skill name={"Spring API"} icon={solid("leaf")} detailLink={"https://spring.io/"} />
                <Skill name={"NestJS API"} icon={brands("node-js")} detailLink={"https://nestjs.com/"} />
                <Skill name={"MySQL Databse"} icon={solid("box")} detailLink={"https://www.mysql.com/"} />
                <Skill name={"Docker Server Manager"} icon={brands("docker")} detailLink={"https://www.docker.com/"} />
                <Skill name={"Unity Game Engine"} icon={brands("unity")} detailLink={"https://unity.com/"} />
                <Skill name={"GRPC's"} icon={solid("server")} detailLink={"https://grpc.io/"} />
                <Skill name={"C#"} icon={solid("c")} detailLink={"https://learn.microsoft.com/en-us/dotnet/csharp/"} />
                <Skill name={"Enzyme"} icon={brands("react")} detailLink={"https://enzymejs.github.io/enzyme/"} />
                <Skill name={"Cypress"} icon={brands("react")} detailLink={"https://www.cypress.io/"} />
                <Skill name={"C"} icon={solid("c")} detailLink={"https://www.w3schools.com/c/c_intro.php"} />
                <Skill name={"Bootstrap"} icon={solid("b")} detailLink={"https://getbootstrap.com/"} />
                <Skill
                    name={"MatLab"}
                    icon={solid("bezier-curve")}
                    detailLink={"https://www.mathworks.com/products/matlab.html"}
                />
                <Skill
                    name={"OOP"}
                    icon={solid("boxes")}
                    detailLink={"https://www.educative.io/blog/object-oriented-programming"}
                />
                <Skill
                    name={"TDD"}
                    icon={solid("warning")}
                    detailLink={
                        "https://www.eecs.yorku.ca/course_archive/2015-16/W/2311/slides/TestDrivenDevelopment.pdf"
                    }
                />
                <Skill name={"GCP"} icon={brands("google")} detailLink={"https://cloud.google.com/docs/get-started"} />
                <Skill
                    name={"CI/CD"}
                    icon={solid("check-double")}
                    detailLink={"https://www.synopsys.com/glossary/what-is-cicd.html"}
                />
            </div>
        </>
    );
}

export default Skills;
