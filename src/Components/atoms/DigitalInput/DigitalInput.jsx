import React from 'react';
import './DigitalInput.sass'

export const DigitalInput = ({text, height, width}) => {
  return (
    <div className='DigitalInput'>
      <h1 className='DigitalInputTitle'>{text}<span>*</span></h1>
      <input className='DigitalInputInput'
      style={{
      }}
      ></input>
    </div>
  )
}