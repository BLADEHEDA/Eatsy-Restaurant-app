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
        <div className="leff flex justify-between  flex-[50%] ">
        <article className="icon  flex-[30%] ">
            <img src={navicon} alt="" className="nav-icon h-[4em]" />
          </article>
          <article className="navlinks flex  flex-[70%]
           justify-evenly  pt-[1em] text-[black] font-900  ">  
          <div className="navlink">HOME</div>
          <div className="navlink">BLOG</div>
          <div className="navlink">BLOG</div>
          <div className="navlink">SHOP</div>
          </article>
        </div>
        <div className="right flex-[50%] flex justify-end ">
          <div className="rightlink mr-[1em] cursor-pointer ">
          <p className='text-[black] font-[500] ml-[3em] ' >Order by phone </p>
          <p className='text-[#e84242] text-[1.6em] font-[500]  ' >1-800-700-600</p>
          </div>
          <div className="rightlink mt-[1em] mx-[2em] ">
            <span className='mr-1' >
            <FontAwesomeIcon icon={faShoppingCart}/>
            </span>
            <span className='font-[500] ' >
              0
            </span>
          </div>
          {/* <div className="rightlink">  */}
          <button className="btn text-[#e84242] border-[2px] px-[2.5em] border-[#e84242]
          rounded-[5em]  ">VIEW FULL MENU</button>
          {/* </div> */}
      
        </div>
      </section>
    </main>
  )
}

export default Navbar
