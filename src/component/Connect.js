import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Connect.css'

 
function Connect(){
  const form = useRef();

 const  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a2yo84p', 'template_ks47d5r', form.current, 'NaVcb9oyAxxSXGBMY')
      .then((result) => {
          alert("message sent")
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <>
        <div class="contact-section">
        <h2 class="contact-heading">Contact Me</h2>
        <div class="contact-form">
        <form ref={form} onSubmit={sendEmail}>
            <div class="form-group">
              <label for="name">Your Name:</label>
              <input type="text" className="inpt" id="name" name="user-name" required/>
            </div>

            <div class="form-group">
              <label for="email">Your Email:</label>
              <input type="email" id="email" name="email" required/>
            </div>

            <div class="form-group">
              <label for="message">Your Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>

            <div class="form-group">
              <button type="submit" >Send Message</button>
            </div>
          </form>
        </div>
      </div>
      
        </>
    )

}
export default Connect