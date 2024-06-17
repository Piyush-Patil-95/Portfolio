import React from 'react'
import './../styles/Skills.css'

export default function SkillItem({name}) {
  return (
    <div className='div-skill'>
      <span className='rounded-pill skills-item'>{name}</span>
      </div>
  )
}
