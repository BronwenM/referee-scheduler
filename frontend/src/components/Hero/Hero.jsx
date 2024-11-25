import React from 'react'
import './hero.scss'

//use session to get user details
const Hero = (props) => {
  const {connectionTest} = props;

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  return (
    <div className='hero-banner'>
      <div className='hero-banner__greeting'>Hi Username!</div>
      <div className='hero-banner__today'>Today is {Date()}</div>
      <div className='hero-banner__quick-info'>
        {connectionTest}
      </div>
    </div>
  )
}

export default Hero