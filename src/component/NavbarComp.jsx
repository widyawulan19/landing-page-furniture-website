import React, { useState } from 'react'
import '../style/NavStyle.css'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function NavbarComp() {
    const [isOpen, setIsOpen] = useState(false)


    const showNavbar = ()=>{
        setIsOpen(true)
    }
    const hideNavbar = () => {
        setIsOpen(false)
    }


  return (
    <div>
        <nav>
            {isOpen && (
                <ul className="navbar">
                    <li onClick={hideNavbar}><a href="#"><IoMdClose/></a></li>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">BENEFIT</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">PRODUCT</a></li>
                </ul>
            )}
            <ul>
                <li><a href="#">LUW FURNITURE</a></li>
                <li className='hideOnMobile'><a href="#">HOME</a></li>
                <li className='hideOnMobile'><a href="#">BENEFIT</a></li>
                <li className='hideOnMobile'><a href="#">ABOUT</a></li>
                <li className='hideOnMobile'><a href="#">SERVICES</a></li>
                <li className='hideOnMobile'><a href="#">PRODUCT</a></li>
                <li className='menu-button' onClick={showNavbar}><a href="#"><IoMenu/></a></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavbarComp