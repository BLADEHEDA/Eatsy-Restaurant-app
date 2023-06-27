import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import navicon from "/assets/logo.png"

const Navbar = () => {
  return (
    <main className='Navbar'>
      {/* build the mobile screen size navbar  */}
      <section className="mobile-navbar flex lg:hidden ">
        <div className="left1"> <FontAwesomeIcon 
        className='text-[1.85em] mr-[0.5em] ml-[1em] mt-[0.4em] text-[#4D4D4D] ' icon={faBars} /> </div>
        <div className="right">
          <div className="icon  ">
            <img src={navicon} alt="" className="nav-icon h-[3em]" />
          </div>
        </div> 
      </section>
      {/* build the  desktop screen size navbar */}
      <section className="desktop-navbarx hidden lg:flex 
      lg:justify-between lg:mx-[1em] lg:py-[0.75em] lg:rounded-[3em]
      lg:absolute lg:w-[95%] lg:bg-[white] lg:my-[1em] lg:px-[2em] lg:w-[97.5%]
      ">
        <div className="leff flex  flex-[40%] ">
        <article className="icon flex-[25%]  ">
            <img src={navicon} alt="" className="nav-icon h-[4em] cursor-pointer" />
          </article>
          <article className="navlinks flex flex-[75%] justify-evenly
           pt-[1.3em] font-[500] text-[black]  ">  
          <div className="navlink  cursor-pointer  ">HOME</div>
          <div className="navlink  cursor-pointer ">BLOG</div>
          <div className="navlink  cursor-pointer ">BLOG</div>
          <div className="navlink  cursor-pointer">SHOP</div>
          </article>
        </div>
        <div className="right flex-[60%] flex justify-end ">
          <div className="rightlink mr-[1em] cursor-pointer ">
          <p className='text-[black] font-[500] ml-[3em]  navphone' >Order by phone </p>
          <p className='text-[#e84242] text-[1.6em] font-[500]  ' >1-800-700-600</p>
          </div>
          <div className="rightlink mt-[1em] mx-[2em] cursor-pointer ">
            <span className='mr-1' >
            <FontAwesomeIcon icon={faShoppingCart}/>
            </span>
            <span className='font-[500] ' >
              0
            </span>
          </div>
          <button className="btn-desk text-[#e84242] border-[2px] px-[2.5em] border-[#e84242]
          rounded-[5em] my-[3px] ">VIEW FULL MENU</button>
      
        </div>
      </section>
    </main>
  )
}

export default Navbar
