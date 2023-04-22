import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'
import navicon from "/assets/logo.png"

const Navbar = () => {
  return (
    <main className='Navbar'>
      {/* build the mobile screen size navbar  */}
      <section className="mobile-navbar flex">
        <div className="left1"> <FontAwesomeIcon 
        className='text-[1.85em] mr-[0.5em] ml-[1em] mt-[0.4em] text-[#4D4D4D] ' icon={faBars} /> </div>
        <div className="right">
          <div className="icon  ">
            <img src={navicon} alt="" className="nav-icon h-[3em]" />
          </div>
        </div>
     
      </section>
    </main>
  )
}

export default Navbar
