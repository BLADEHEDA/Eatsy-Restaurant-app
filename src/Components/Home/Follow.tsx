import React from 'react'
import hero from "../../../public/assets/hero_home_02.jpg"

const Follow = () => {
  return (
    <main className='mb-[0em]' > 
    <div className='follow mt-[-3.99em] pb-[10em] flex justify-center 
    items-center w-full pt-[7em]  ' 
    style={  { 
        backgroundImage: `url(../../../public/assets/hero_home_02.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
}}
    >
      
      <p className="text-[1.5em] font-[700] text-[white] 
      "> Give us a follow </p>
    </div>
    <svg 
        style={  { 
        backgroundImage: `url(../../../public/assets/hero_home_02.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
}}
    className='mt-[-1px] bg-[#121212] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5E7C1" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,117.3C840,107,960,149,1080,170.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </main>
  )
}

export default Follow