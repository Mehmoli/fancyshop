import React from 'react';
import Button from "../../Components/Button/Button";
import { ReactComponent as ChatIcon } from "../../assets/Icons/chat.svg";
import Footer from "../../Components/Footer/Footer";
import contactStyle from './Contact.module.css';

function Contact() {
    return (
        <>
            <section className={contactStyle.container}>
                <h1 className={contactStyle.title}>Contact</h1>
                <div className={contactStyle.contact}>
                    <br />
                    <article>
                        <p>Meest gestelde vragen</p>
                        <hr />
                        <br />
                        <p>-Vragen over bezorgen?</p>
                        <hr />
                        <br />
                        <p>-Vragen over retour zenden?</p>
                        <hr />
                        <br />
                        <p>-Vragen over betaling?</p>
                        <hr />
                        <br />
                        <p>Vragen over bestellen?</p>
                        <hr />
                    </article>
                    <br />
                    <br />
                    <div className={contactStyle.chat}>
                        <p>Als uw vraag er  niet tussen staat, kunt u ook chatten met en medewerker tussen 08.00 uur en 18.00 uur.</p>
                        <input type="text" placeholder="Uw vraag.." className={contactStyle.contact_field} />
                        <Button type="submit" className={contactStyle.btn_contact}>
                            <ChatIcon />  Chatten
                        </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;