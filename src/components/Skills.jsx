import React from 'react';
import './../styles/Skills.css'
import SkillItem from './SkillItem';

export default function Skills() {
  return (
    <div id='skills' className='skills-div'>
        <p className='poppins-bold'>My skills<span className='about-me-dot'>.</span></p>
        <br /><br /><br />
        <div>
            <div className='edu'>
            <div className='box-arrow'></div>
            <p className='poppins-regular qua'>Programming Languages :<SkillItem name='C++' /><SkillItem name='Javascript' /><SkillItem name='Java' /></p></div>
            <br />
            <div className='edu'>
            <div className='box-arrow'></div>
            <p className='poppins-regular qua'>Web Development <span id='mern2'>(MERN)</span>  :<SkillItem name='React js' /><SkillItem name='HTML5' /><SkillItem name='CSS3' /><SkillItem name='Bootstrap' /><SkillItem name='Javascript' /><SkillItem name='Node js' /><SkillItem name='Express js' /><SkillItem name='php' /></p>
            </div>
            <br />
            <div className='edu'>
            <div className='box-arrow'></div>
            <p className='poppins-regular qua'>Databases :<SkillItem name='MongoDB' /><SkillItem name='MySQL' /></p>
            </div>

            <br />
            <div className='edu'>
            <div className='box-arrow'></div>
            <p className='poppins-regular qua'>Version Control :<SkillItem name='Git' /><SkillItem name='Github' /></p><br /><br /><br />
            </div>
        </div>
    </div>
  )
}
