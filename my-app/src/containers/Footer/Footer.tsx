import React from "react";
import ContactForm from "../../components/ContactForm";
import Styles from "./Footer.module.scss";

function Footer() {
    return (
        <div className={Styles.container} id="Contact">
            <p>
                Need to contact me? Submit a request down below and ill get in
                touch!
            </p>
            <ContactForm />
        </div>
    );
}

export default Footer;
