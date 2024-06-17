import React from 'react';
import './../styles/ContactButton.css'

export default function ContactButton() {

  const email = "piyushpatil0009@gmail.com";
  const handleClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');  };
  return (  
    <div className='btn-div'>
      
      <button onClick={handleClick} type="button" class="btn btn-primary getintouchbt btn-text">Get In Touch</button>
    </div>
  )
}
