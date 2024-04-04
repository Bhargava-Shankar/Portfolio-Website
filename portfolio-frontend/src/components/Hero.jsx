import React from 'react'
import "./css/Hero.css";
import heroLogo from "/assets/images/hero-logo.png"
const Hero = () => {
  return (
    <div className='hero-container'>
          <div className="hero-content">
              Developer.
          </div>
          <div className="hero-image">
              <img src={heroLogo} alt="" />
          </div>
    </div>
  )
}

export default Hero
