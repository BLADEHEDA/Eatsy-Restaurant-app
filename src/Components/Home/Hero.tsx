import React from 'react'
import "./Home.css"
import burger from "/assets/floating_burger_01.png"

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
        <img src={burger} alt="burger img" className="hero-img w-[25em] absolute top-[11em] md:w-[50em] " />
      </div>
      <div className="hero-border border-b border-[#eeeee] opacity-30 
      md:mt-[7em] md:mb-1  md:opacity-0"></div>
      </section>
        {/* desktop home screen  */}
      <section className="desktop hidden lg:block ">
      <h1 className="hero-head text-[20em] text-center  text-[#F4E6C0] leading-[0.75em] 
     font-['Rakkas']  pt-[0.65em] pb-[1.5em]   ">
        Delicious Dishes
      </h1>
      <div className="hero-img-div ">
        <img src={burger} alt="" className="hero-img w-[75em] absolute top-[32em]
        left-1/2 transform -translate-x-1/2 " />
      </div>
      <div className="hero-border border-b border-[#eeeee] opacity-30 lg:hidden  "></div>
      </section>
    </main>
  )
}

export default Hero
