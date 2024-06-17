import React from 'react';
import './../styles/Home.css';
import './../styles/About.css';


export default function About() {
  return (
    
    <div >
    <div className='about' id='about'>
      <p className='poppins-bold about-me'>About me<span className='about-me-dot'>.</span></p>
      <br />
      <div className="row">
      {/* educational qua div */}
      <div className='col-lg-6'>
      <div className="edu">
      <div className='box-arrow'></div>
      <p className='poppins-regular qua'>Educational Qualification</p>
      <br />
      </div><br />
      <div className='edu-qua'>
      <i className="bi bi-mortarboard h3"></i>
      <p className='poppins-light-italic clg'>MVPS’s KBTCOE, Nashik - B.E. - IT</p>
      <p id='p' className='info'>Currently pursuing Fourth Year - 2021-2025</p>
      <br />
      <i class="bi bi-building h3"></i>
      <p className='poppins-light-italic clg'>Upadhye College of Science, Nashik - 11th & 12th</p>
      <p id='p' className='info'>11th & 12th Science</p><br />
      <i class="bi bi-pen-fill"></i>
      <p className='poppins-light-italic clg'>New Era English School, Nashik</p>
      <p id='p' className='info'>Primary and secondary education</p>

      </div>
      </div>

      {/* experience */}
      <div className='col-lg-6'>
        <div className="edu">
        <div className='box-arrow'></div>
        <p className='poppins-regular qua'>Experience</p>
        <br />
        </div><br />

        <div className='edu-qua'>
        <i class="bi bi-laptop h3"></i>
        <p className='poppins-light-italic clg'>Innovations Hub – Internship</p>
        <p id='p' className='info'>01/01/2024 – 15/02/2024</p>
        <p className='info'>During a six-week internship at InnovationsHub Services, I delved into the dynamic realm of full-stack web development, gaining practical experience in <span className='skills'>HTML</span>, <span className='skills'>CSS</span>, <span className='skills'>Bootstrap</span>, <span className='skills'>JavaScript</span>, <span className='skills'>PHP</span>, and <span className='skills'>SQL</span>.</p>
        <p className='info'>The focal point of my internship was the <span className='skills'>"FoodNStay"</span> project, an innovative online platform designed to ease the challenges faced by students seeking affordable and convenient mess and PG services in unfamiliar cities.. Through meticulous design and development, I contributed to the creation of a user-friendly website that streamlines the process of finding suitable accommodations and meal services.</p>
        <p>
        Click <a href="/assets/certificate.jpg" target="_blank" rel="noopener noreferrer" className="doc-link">here</a> to open the certificate.
      </p>
        
        <br />
        

        </div>
      </div>



      </div>
    </div>
    </div>
  )
}
