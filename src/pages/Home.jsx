import React from 'react'
import '../style/HomeStyle.css'
import herroImage from '../asset/rb/1bond1-rb.png'
import Benefit from './Benefit'

function Home() {
  return (
    <div className='container'>
      <div className='home-container'>
        <div className="text">
              <h2>Discover Our Best Collection</h2>
              <p>Explore our wide selection of furniture designed with love and attention to detail. From modern to classic designs, each of our products showcases unmatched beauty, quality and functionality.</p>
              <div className='buttonContainer'>
                  <button>Shop Now</button>
                  <button style={{backgroundColor:'#EAE9E5', color:'black'}}>Explore</button>
              </div>
          </div>
          <div className="image">
              <img src={herroImage} alt="" />
          </div>
      </div>
        <Benefit/>
    </div>
  )
}

export default Home