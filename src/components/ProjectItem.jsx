import React from 'react';
import './../styles/ProjectItem.css';
import PropTypes from 'prop-types';

export default function ProjectItem({img}) {
  return (
    <div className='square-image' > 
      <img src={img} alt="" className='project-item' />
    </div>
  )
}
