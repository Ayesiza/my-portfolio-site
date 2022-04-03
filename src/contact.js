import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";


function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  
  const handleSubmit=(e) => {
    e.preventDefault();
    emailjs.sendForm('service_9k6epms', 'template_braozdc', formRef.current, 'user_m3cQzONBSi2qJo5DtziUP')
    .then((result) => {
        console.log(result.text);
         setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className='c-wrap'>
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className='c-left'>
                <h1 className='c-title'>
                    Let' discuss your project
                </h1>
                <div className='c-info'>
                    <div className='c-info-item'>
                      
                        +256781917299
                    </div>
                    <div className='c-info-item'>
                     
                        Hoima Main street, Kampala Uganda
                    </div>
                    <div className='c-info-item'>
                      
                        yesiha2001@gmail.com
                    </div>
                </div>
            </div>

      <form ref={formRef} onSubmit={handleSubmit}  className="contact">
       
        <input type='text' placeholder='Name' name='user_name'/> 
        
        <input type='text' placeholder='Email' name='user_email'/> 
        <input type='text' placeholder='Subject' name='user_subject'/> 
        
        <textarea  rows='5' placeholder='Message' name='message' />
        <button>Submit</button>
        {done &&  "Thank you for your message"}
      </form>
    </div>
    </div>
  );
}

export default Contact;
