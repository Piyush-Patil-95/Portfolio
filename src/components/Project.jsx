import React from 'react';
import Typewriter from 'typewriter-effect';
import ProjectItem from './ProjectItem';
import './../styles/ProjectItem.css';
export default function Project() {
  return (
    <div id='projects'>
      <p className='poppins-bold about-me'>My projects <span className='about-me-dot'>.</span></p>
      <div>

      {/* project div-- */}
      <div className="row projects-outer-div">
        <div className='col-lg-4 '>
          <ProjectItem img="./assets/project1.png"/>
        </div>
        <div className="col-lg-8">
          <p className='poppins-regular' style={{fontSize: "30px"}}>Blog Website   <span className='small-italic' style={{paddingLeft:"10px"}}>    React.js, Node.js, Express.js, MongoDB</span></p>
          <p className='info'>BlogSphere sets the stage for an immersive blogging experience, offering users a dynamic platform to share their thoughts, insights, and stories with the world. As a comprehensive blogging website, BlogSphere empowers users with seamless functionality to create, update, and delete blogs effortlessly.</p>
          <p className='skills'><a target='_blank' href="https://github.com/Piyush-Patil-95/Blog-Website">Github Link</a></p>
        </div>
      </div>


      <div className="row projects-outer-div">
        <div className='col-lg-4 '>
          <ProjectItem img="./assets/project2.png"/>
        </div>
        <div className="col-lg-8">
          <p className='poppins-regular' style={{fontSize: "30px"}}>FoodNStay <span className='small-italic'  >HTML, CSS, Bootstrap, Javascript, PHP, SQL</span></p>
          
          <p className='info'>FoodNStay is a Online Mess Delivery & PG Services. It's a dynamic full-stack project developed with HTML5, CSS3, JavaScript, Bootstrap, PHP, and MySQL, facilitating integrated food ordering and accommodation booking services.</p>
          <p className='skills'><a target='_blank' href="https://github.com/Piyush-Patil-95/FoodNStay-Online-Mess-Delivery-PG-Services/tree/master">Github Link</a></p>
        </div>
      </div>


      <div className="row projects-outer-div">
        <div className='col-lg-4 '>
          <ProjectItem img="./assets/project3.png"/>
        </div>
        <div className="col-lg-8">
          <p className='poppins-regular' style={{fontSize: "30px"}}>Read It Out Loud - Text to audio<span className='small-italic' >Python, Libraries - PyPDF2, pyttsx3</span></p>
          
          <p className='info'>The project aims to develop a PDF to audio converter using Python. The system utilizes the PyPDF2 library to extract text from PDF documents and the pyttsx3 library to convert the text into spoken audio. It allows users to provide a PDF file as input and generates an audio file containing the converted speech corresponding to the extracted text from the PDF</p>
          <p className='skills'><a target='_blank' href="https://github.com/Piyush-Patil-95/Text-To-Audio-Convertor">Github Link</a></p>
        </div>
      </div>
      </div>
    </div>
  )
}
