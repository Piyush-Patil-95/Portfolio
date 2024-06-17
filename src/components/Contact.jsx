import React from 'react';
import "./../styles/Contact.css"

export default function Contact() {
  const email = "piyushpatil0009@gmail.com";
  const handleClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');  };
  return (
    <div className='contact-full-div' id='contact'>
        <div>
            <p id='one' className='poppins-bold about-me text-center pt-5'>Let's Connect <span id='one-dot' className='about-me-dot'>!</span></p>
        </div>
      <p id='three' className='poppins-regular text-center '>🌟 Why Connect With Me?</p>
      <div id='four'>
      <p  className='text-center info   '>🤝 I'm eager to connect with Tech Enthusiasts, Professionals, and Mentors who share my passion for technology and innovation. Whether it's discussing emerging trends, collaborating on projects, or exploring new opportunities, I'm always open to meaningful connections and collaborations.💻</p></div>
        

      <div className='d-flex justify-content-center align-items-center icons'>
      <a onClick={handleClick} href=""><img className='img-fluid' id='contact-icon'  src="./assets/mail.png" alt="" /></a>
        <a target='_blank' href="https://www.linkedin.com/in/piyush-patil-66338b252"><img className='img-fluid ' id='contact-icon' src="./assets/linkedin.png" alt="" /></a>
        <a target='_blank' href="https://github.com/Piyush-Patil-95"><img className='img-fluid' id='contact-icon'  src="./assets/github.png" alt="" /></a>
        
      </div>
      <p id='three' className='poppins-regular text-center '>Let's Connect and Explore the Boundless World of Technology Together! 🔗</p>
    </div>
  )
}
