import React, { useState } from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('access_key', '4781d278-74cb-4034-930e-6f794370eecc');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert('Form Submitted Successfully');
        event.target.reset();
      } else {
        console.log('Error', data);
        alert(data.message);
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('There was an error submitting the form. Please try again later.');
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className='contact-title'>
        <h1>Get in Touch</h1>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's Talk</h1>
          <p>
            I am currently looking for an opportunity as a software developer where I can develop my skills and knowledge while contributing to the company's success.
          </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='Mail icon' />
              <p>somanathan0709@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='Call icon' />
              <p>+91 7904738428</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' placeholder='Enter your name' name='name' id='name' required />
          <label htmlFor='email'>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email' id='email' required />
          <label htmlFor='message'>Write Your Message Here</label>
          <textarea name='message' rows='8' placeholder='Enter your message' required></textarea>
          <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default Contact;
