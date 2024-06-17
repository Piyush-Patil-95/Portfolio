import React from 'react';
import './../styles/Home.css'
import ContactButton from './ContactButton';
import Header from './Header';
import { HashLink } from 'react-router-hash-link';

export default function Home() {
  return (
    <div id='home'>
      <div className='main' >
        <div className='container-fluid'>
          <div className='row'>
            <div className="col-lg-6 ">
              <p className='poppins-regular'>Hey, I'm Piyush!👋🏻</p>
              <p className='poppins-bold'><span id='mern'>d</span>esginer</p>
              <p className='poppins-bold'><span id='mern'>&lt;</span>coder<span id='mern'>&gt;</span></p>
              <p className='poppins-regular'>I'm an IT student with a strong focus on Software Development and <span id='mern2'>MERN Stack Development</span>  with other CS fundamentals.</p>
              <ContactButton/>
              <button type="button" class="btn btn-outline-secondary btn-hover">
                <span > <HashLink to='#projects' style={{textDecoration:'none'}}>Browse Projects</HashLink> </span>
              </button>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center container ">
              <div className='circle'>
                <img className='circle-img' src="/assets/avatar.png" alt="" />
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
