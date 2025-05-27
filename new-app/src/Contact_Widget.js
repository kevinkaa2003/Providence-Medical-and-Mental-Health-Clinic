import React, { useEffect, useState, useRef } from 'react';
import './Contact_Widget.css';
import emailjs from '@emailjs/browser';


const ContactWidget = () => {
    const form = useRef(); 

    useEffect (() => {
        emailjs.init("5xgP6vguaJHGTQ-E4");
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a33tvv9', 'template_35yivvp', form.current, '5xgP6vguaJHGTQ-E4' )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');

            })
            .catch((error) => {
                console.log('Failed...', error);
                alert('Failed to send email. Please try again.');
            });
    };   

    
    return ( 

         <>
         <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
         <div className="form-container">
            <div className="wrapper">
                <h2>Contact Us</h2>
                <div className="form-section">
                    {/*left side*/}
                    <div className="form-details">
                        <br/>
                        <ul>
                            <li>
                                <div className="content">
                                    <strong>Location:</strong> 13155 Westheimer Road, Suite 133, Houston, TX 77077

                                </div>
                            </li>
                            <br/>
                            <br/>
                            <li>

                                <div className="content">
                                    <strong>Email:</strong> PLACEHOLDER

                                </div>
                            </li>
                           <br/>
                           <br/>
                            <li>
                                <div className="content">
                                    <strong>Call:</strong> +1 (281)-920-0344 
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/*!--right side*/}
                    <div className="inputfield">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="text" required="required" className="form-control" id="name"/>
                                <span className="form-label">Name</span>
                            </div>
                            <div className="form-group">
                                <input type="email" required="required" className="form-control" id="email"/>
                                <span className="form-label">Email</span>
                            </div>
                            <div className="form-group">
                                <textarea
                                name="message"
                                id="message"
                                cols="30"
                                rows="10"
                                className="form-control"
                                required="required"></textarea>
                                    <span className="form-label">Write</span>
                            </div>
                            <div className="submitbuttoncontainer">
                                <button type="submit" className="submitbutton" onClick={sendEmail}>Send Message</button> {/*Send Button*/}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>

     );
}
 
export default ContactWidget;