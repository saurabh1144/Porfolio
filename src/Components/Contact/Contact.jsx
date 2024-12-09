import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cld9orf', 'template_8gifxnu', form.current, {
        publicKey: '0NVVe2BcHQOejBgOo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email Sent");
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactpage' data-aos="zoom-in-right">
    <h4 className='contacttitle'>Contact Me</h4>
    <form className='contactform' ref={form} onSubmit={sendEmail}>

        <input type='text' className='name' placeholder='Your Name' name='from_name'/>
        <input type='email' className='email' placeholder='Your Email' name='from_email'/>
        <textarea className='message' placeholder='Your Message' name='message' rows='5'/>
        <button className='submitbutton' type='submit'>Send</button>


    </form>
      <hr/>
    </section>
  )
}

export default Contact
