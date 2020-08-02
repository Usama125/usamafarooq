import React, { useState } from 'react'

import * as emailjs from 'emailjs-com';

function Contact() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleEmailSend = async (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "gmail",
            "email_template",
            "contact-form",
            "user_8XV1zjLwRUqAYcyvb773U"
        ).then().catch(err => console.log("Error => ",err));
        setSent(true);
        setName("");
        setSubject("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
            setSent(false);
        }, 3000);
    };

    return (
        <>
            <section class="s2">
                <div class="main-container">
                    <a href=""></a>
                    <h3 style={{textAlign: 'center'}}>Get In Touch</h3>

                    <form id="contact-form" onSubmit={handleEmailSend}>
                        <a name="contact"></a>

                        <label>Name</label>
                        <input class="input-field" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>

                        <label>Subject</label>
                        <input class="input-field" type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>

                        <label>Email</label>
                        <input class="input-field" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <label>Message</label>
                        <textarea class="input-field" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                        <button id="submit-btn" type="submit">Save</button>
                        {sent && (
                            <div style={{marginTop: '5px', backgroundColor: 'white', color: 'gray', padding: '10px'}}>
                                We have recieved your email, will get back to you soon, Cheers! 
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
