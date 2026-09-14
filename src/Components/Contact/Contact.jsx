import {React, useRef} from 'react'
import './Contact.css'

import emailjs from 'emailjs-com'

import {AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a1e128j', 'template_np7iyfg', form.current, 'QL_CPZyRn95LvnMhI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option ">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>subham0464@gmail.com</h5>
            <a href="mailto:subham0464@gmail.com"> Send a message</a>
          </article>
          <article className="contact__option ">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 7991090941</h5>
            <a href="https://api.whatsapp.com/send?phone=917991090941"> Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 7991090941</h5>
            <a href="https://api.whatsapp.com/send?phone=917991090941"> Send a message</a>
          </article>
         
        </div>

        {/* FORM */}
        <form ref = {form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email"name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact