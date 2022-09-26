import Styles from "./ContactForm.module.scss";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
    const [state, handleSubmit] = useForm("xqknongj");
    if (state.succeeded) {
        return <p>Thanks for contacting me, ill respond ASAP 😄</p>;
    }
    return (
        <div className={Styles.container}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email..."
                />

                <textarea id="message" name="message" placeholder="Reason..." />

                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>

                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </form>
        </div>
    );
}
export default ContactForm;
