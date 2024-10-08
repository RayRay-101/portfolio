import '../styles/Contact.css'
import Github from "../assets/github.png"
import LinkedIn from "../assets/linkedin.png"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Footer from "../sections/Footer"


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_blrnipm', 'template_1zkj2g9', form.current, {
        publicKey: 'x9_AYsuX5zEhNxAfY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (<>
    <div className={'contact-section'}>
      <div className='text'>
        <h1>Get In Touch</h1>
        <h3>OR</h3>
          <p>Connect With Me...</p>
        
      </div>
      <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Enter you name" required />
          <input type="email" name="user_email" placeholder="Enter email address" required />
          <textarea type="text" name="message" placeholder="Enter your message" rows="5" 
    cols="50" required ></textarea>
          <button type='submit'>Send Message</button>
        </form>
        <div className='socials'>
          <a href="https://www.linkedin.com/in/raymond-addo-4b7346207">
          <img src={LinkedIn} alt="linkedin icon" />
          </a>
          <a href="https://github.com/RayRay-101">
          <img className="github" src={Github} alt="github icon" />
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact