import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loader from './Loader'
import '../css/Connect.css'



 
function Connect(){

  const [Loaders,setLoader]=useState(false)

 
  const form = useRef();

 const  sendEmail = (e) => {
    e.preventDefault();
    
setLoader(true)
    

    emailjs.sendForm('service_a2yo84p', 'template_ks47d5r', form.current, 'NaVcb9oyAxxSXGBMY')
      .then((result) => {
          alert("message sent")
          form.current.reset()
          setLoader(false)
       
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
        {!Loaders?
            <div class="form-group">
              <button type="submit" >Send Message</button>
            </div>
            :
            <Loader/>
}
          </form>
        </div>
      </div>
      
        </>
    )

}
export default Connect