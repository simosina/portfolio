import "./contact.scss";

import emailjs from 'emailjs-com';
import { useRef, useState } from "react";


export default function Contact() {
    const form = useRef();

    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v74pkg7', 'template_fb2hi8q', form.current, 'user_ipAJuOymplYfCAyMmyB5X')
            .then((result) => {
                console.log(result.text);
                setSent(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contact" id="contact">

            <h1>Contact Me</h1>

            <div className="infoWrapper">
                <div className="info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone fea icon-md"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <h3 className="label">Phone</h3>
                    <a href="tel:+393347516013">+39 3347516013</a>
                </div>
                <div className="info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail fea icon-md"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <h3 className="label">Email</h3>
                    <a href="mailto:simone.sinagra96@gmail.com">simone.sinagra96@gmail.com</a>
                </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <input className="inputField email" type="text" name="user_email" placeholder="Your Email" />
                <input className="inputField" type="text" name="subject" placeholder="Subject" required="required" />
                <textarea className="inputField" name="message" placeholder="Type your message..." spellcheck="false" required="required" />
                <button id="formSubmit" type="submit" name="submit">Send</button>
                {sent && "Thank you..."}
            </form>

        </div>
    )
}

