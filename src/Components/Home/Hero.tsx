import React from 'react'
import "./Home.css"
import burger from "/assets/floating_burger_01.png"

const Hero = () => {
  return (
    <main className='Hero-main'>
      <h1 className="hero-head text-[6em] text-center  text-[#F4E6C0] leading-[0.75em] 
     font-['Rakkas']  pt-[1.3em] pb-[1.5em]  relative ">
        Delicious Burgers
      </h1>
      <div className="hero-img-div ">
        <img src={burger} alt="" className="hero-img w-[25em] absolute top-[11em] " />
      </div>
      <div className="hero-border border-b border-[#eeeee] opacity-30  "></div>
    </main>
  )
}

export default Hero
