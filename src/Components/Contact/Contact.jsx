import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id='contactpage'>
    <h4 className='contacttitle'>Contact Me</h4>
    <form className='contactform'>

        <input type='text' className='name' placeholder='Your Name'/>
        <input type='email' className='email' placeholder='Your Email'/>
        <textarea className='message' placeholder='Your Message' rows='5'/>
        <button className='submitbutton' type='submit'>Send</button>


    </form>
      
    </section>
  )
}

export default Contact
