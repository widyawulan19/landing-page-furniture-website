import React from 'react'
import '../style/BenefitStyle.css'

function Benefit() {
  return (
    <div className='benefit-container'>
        <div className="text">
            <h2>Benefits You Get When Using Our Services</h2>
            <hr style={{width:'20vw'}}/>
        </div>
        <div className='card-container'>
            <div className="card">
                <h3>| Many product choices <br />
                <span>A wide selection of furniture products to suit the various styles and needs of your home.</span></h3>
            </div>
            <div className="card">
            <h3>| Guaranteed quality <br />
                <span>We ensure that every product we offer is of the best quality.</span></h3>
            </div>
            <div className="card">
            <h3>| Fast website access <br />
                <span>We ensure that our website can be accessed quickly and easily.</span></h3>
            </div>
            <div className="card">
            <h3>| Free shipping <br />
                <span> We provide free shipping services to ensure that you can enjoy a more cost-effective. </span></h3>
            </div>
        </div>
        
    </div>
  )
}

export default Benefit