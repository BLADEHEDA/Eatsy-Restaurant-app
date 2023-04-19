import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'
import navicon from "../images/logo.png"

const Navbar = () => {
  return (
    <main className='Navbar'>
      {/* build the mobile screen size navbar  */}
      <section className="mobile-navbar flex">
        <div className="left1"> <FontAwesomeIcon 
        className='text-[1.75em] mr-[0.5em] ml-[1em] mt-[0.4em] text-[121212;] ' icon={faBars} /> </div>
        <div className="right">
          <div className="icon h-[3em] ">
            <img src={navicon} alt="" className="nav-icon" />
          </div>
        </div>
     
      </section>
    </main>
  )
}

export default Navbar
