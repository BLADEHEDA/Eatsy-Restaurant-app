import React from 'react'
import "./Home.css"
import burger from "/assets/floating_burger_01.png"
import fries1 from "../../../public/assets/floating_fries_01.png"
import fries2 from "../../../public/assets/floating_fries_02.png"

const Hero = () => {
  return (
    <main className='Hero-main'>
      {/* mobile home screen  */}
      <section className='mobile lg:hidden ' >
      <h1 className="hero-head text-[6em] text-center  text-[#F4E6C0] leading-[0.75em] 
     font-['Rakkas']  pt-[1.3em] pb-[1.5em]  relative
      md:text-[12em] md:mt-[-0.65em]   ">
        Delicious Burgers
      </h1>
      <div className="hero-img-div ">
        <img src={burger} alt="burger img" className="hero-img w-[25em] absolute top-[11em] md:w-[50em]
         " />
      </div>
      <div className="hero-border border-b border-[#eeeee] opacity-30 
      md:mt-[7em] md:mb-1  md:opacity-0"></div>
      </section>
        {/* desktop home screen  */}
      <section className="desktop hidden lg:block ">
      <h1 className="hero-head text-[20em] text-center  text-[#F4E6C0] leading-[0.75em] 
     font-['Rakkas']  pt-[0.65em] pb-[1.5em] relative  ">
        Delicious Burgers
      </h1>
      <div className="hero-img-div ">
        <img src={burger} alt="" className="hero-img w-[78em] absolute top-[12.5em]
        left-1/2 transform -translate-x-1/2 " />
      </div>
      {/* section for flying chips */}
      <div className="flyin">
        <img src={fries1} alt="fries" className="fries absolute top-[32.5em] left-[-30em] " />
        <img src={fries2} alt="fries" className="fries absolute top-[15.5em] right-[-26em]" />
      </div>
      <div className="hero-border border-b border-[#eeeee] opacity-30 lg:hidden  "></div>
      </section>
    </main>
  )
}

export default Hero
