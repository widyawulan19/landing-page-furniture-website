import React from 'react'
import '../style/SubsStyle.css'
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Subscribe() {
  return (
    <>
            <div className='sub-container'>
                <h2>Subscribe For Daily Discount Info</h2>
                <p>Enter your email below for daily info</p>
                <form>
                    <input type="text" placeholder='Enter your email.'/>
                    <button>Submit Now</button>
                </form>
            </div>
            <hr style={{width:'100%', opacity:'30%'}}/>
            <div className="footer-container">
                <div className="copyright">
                    <p>@ 2024 Luw Furniture</p>
                </div>
                <div className="lain-lain">
                    <p>Police</p>
                    <p>FAQ's</p>
                    <p>Pricing</p>
                </div>
                <div className="contact">
                    <i><FaInstagram/></i>
                    <i><FaTwitter/></i>
                    <i><FaPinterest/></i>
                    <i><MdEmail/></i>
                </div>
            </div>
    </>
  )
}

export default Subscribe