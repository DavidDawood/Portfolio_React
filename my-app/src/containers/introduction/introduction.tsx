import React from "react";
import styles from "./Introduction.module.scss";
function Introduction() {
    return (
        <div className={styles.container}>
            <img
                className={styles.container__img}
                alt="My Face"
                src="myFace.jpeg"
            ></img>
            <h2 id="Introduction">Introduction</h2>
            <p>
                Hi, my names David and to be brief, from a young age ive always
                loved to learn, specifically tech, got an upbeat atitude and
                never gives up till the jobs done!
            </p>
            <br />
            <p>
                Ive learnt heaps over my learning adventure, i have 2 years in
                game development with C#. In which i develop all my assets and
                have many projects exploring different concepts and styles, from
                world generation, 3D space orientation / no up or down. AI with
                different enviroments and rules and much more
            </p>
            <br />
            <p>
                My learning doesnt stop at game development though! I have
                several projects youll be able to see below which show my most
                up to date and ambious projects outside of game development,
                including a shop front, morse code translator and more!
            </p>
            <br />
            <p>
                Interested in me as a person? to summarise i dont mind working
                in a team or alone and because of my work ethic, stressed or not
                i produce a steady quality of work while managing my work life
                balance, I prefer efficent and clean reusable code over getting
                it done now and it failing a week later. My plans when i work
                tend to be future focused, so majority of my work tends to go
                smoother than most. Slow and steady wins the race!
            </p>
        </div>
    );
}

export default Introduction;
