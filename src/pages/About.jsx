import React from 'react'
import '../style/AboutStyle.css'
import aboutImage from '../asset/rb/7rivers.png'

function About() {
  return (
    <div className='about-container'>
        <div className='text-about'>
            <h3>INTRODUCTION</h3>
            <hr/>
            <h2>Start exploring our collection now and create your dream home with us!</h2>
            <p>Enhance your home with furniture that reflects your style and personality. Find inspiration and find the items you are looking for only at Luw Furniture. So what are you waiting for? Explore our collection now and find your dream furniture easily.</p>
            <button>Read More</button>
        </div>
        <div className='image-about'>
            <img src={aboutImage} alt="" />
        </div>
    </div>
  )
}

export default About