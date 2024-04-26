import React from 'react'
import '../style/Katalog.css'
import ktlg1 from '../asset/rb/7rivers-rb.png'
import { POPULAR } from '../data/popular'
import { FaArrowRight } from "react-icons/fa";

function Katalog() {
  return (
    <div className="katalog-container">
        <div className="text-katalog">
          <h3>OUR PRODUCT</h3>
          <hr style={{width:'10vw'}}/>
          <h2>You Can Find Your Furniture Easily</h2>
        </div>
        <div className="image-katalog">
            <div className="katalog-kanan">
              <img src={ktlg1} alt="" />
              <h3>RIVERS</h3>
              <p style={{opacity:'70%', fontSize:'13px', marginBottom:'10px'}}>SOFA</p>
              <p>$ 3000</p>
              <button>View Product <FaArrowRight size={10} /></button>
            </div>
            <div className="katalog-kiri">
              {POPULAR.map((item)=>(
                <div className="katalog-card">
                  <img src={item.img1} alt="" />
                  <h3>{item.name}</h3>
                  <p style={{opacity:'70%', fontSize:'13px', marginBottom:'10px'}}>{item.categori}</p>
                  <p>$ {item.price}</p>
              </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Katalog