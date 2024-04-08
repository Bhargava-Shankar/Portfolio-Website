import React from 'react'
import "./css/Hero.scss";
import heroLogo from "/assets/images/hero-logo.png"
const Hero = () => {
  return (
    <div className='hero-container'>
          <div className="hero-content">
        <p>
          👋I'm Bhargava, a seasoned backend web developer 👨‍💻 specializing in various frameworks. My portfolio showcases a diverse range of projects, from web applications to APIs, highlighting my ability to deliver efficient, scalable solutions. With a keen eye for detail and a commitment to continuous learning.

      </p>
          </div>
          <div className="hero-image">
              <img src={heroLogo} alt="" />
          </div>
    </div>
  )
}

export default Hero
