import React from 'react';
import { MenuBtn } from './Seller';
// import burgerB from "/assets/image_product_03.jpg" 
import cow from "../../../public/assets/cowlogo.png"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slider1 from "../../../public/assets/homeslider01.jpg"
import slider2 from "../../../public/assets/homeslider02.jpg"
import slider3 from "../../../public/assets/homeslider03.jpg"



function PopularProps(props:any) {
  return (
    <main className="popularProps-main pt-[5em] text-[white] ml-7  "
    style={{
      backgroundImage:`url(${props.backgroundImage })`,
      backgroundSize: 'cover',
      backgroundPosition: '-400% 0%', 
      backgroundRepeat: 'no-repeat',
   
      
    }}
    >

      <h1 className="title  font-[600]  font-['Rakkas'] text-[2.75em] text-start "> {props.title} </h1>
      <div className="container mt-[2em]  ">
        <div className="img-cont mb-[1.5em] h-[5em] w-[5em] ">
          <img src={cow} alt={props.name} className="pic-elt" />
        </div>
        <div className="popularprops-content text-start md:w-[68%]  "> 
        100% Grass fed beef patty,cheddar cheese,special sauce,tomato,pickies,
        lettuce,sessame seed bun
         
        </div>
      </div>
      <div className="popular-price bg-[white] flex w-[75%] rounded-[5em] 
      py-[0.5em] pl-[2em] pr-[0.5em] justify-between  mt-[3em] mb-[5em] md:w-[45%] ">
        <div className="popular-price-left mt-[0.75em] ">
          <h1 className="price-div text-[black] text-[1.75em] font-[900] "  >$12.00 </h1>
          <p className="qty-div text-[#121212] text-[0.85em] "> 220gr / 600 cal </p>
        </div>
        <div className="popular-price-right  ">
          <MenuBtn/>
        </div>
      </div>
    </main>
  );
}

function Popular() {
  return (
    <main className='popular-sect  mb-[-1em]    mt-[-1em]'>
     <section  className='popular-sect bg-[#121212] md:hidden '>
        <Carousel
          emulateTouch={false}
          showStatus={false}
          swipeable={false}
          showArrows={false} // Hide the navigation arrows
          showThumbs={true} // Show the navigation dots
          autoPlay={true} // Enable automatic slide change
          interval={3000} // Set the time interval between slides (in milliseconds)
          infiniteLoop={true} // Enable infinite loop
        >
          <div>
            <PopularProps title="Best Local Tunaburger" />
          </div>
          <div>
            <PopularProps title="World Famous Burger" />
          </div>
          <div  >
            <PopularProps title="Popular ShroomBacon" />
          </div>
        </Carousel>
        <svg  className='mt-[-1px] bg-[#121212] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5E7C1" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,117.3C840,107,960,149,1080,170.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </section>
      {/* section of carousel for the medium screen size only  */}
      <section  className='popular-sect bg-[#121212] hidden md:block '>
        <Carousel
          emulateTouch={false}
          showStatus={false}
          swipeable={false}
          showArrows={false} // Hide the navigation arrows
          showThumbs={true} // Show the navigation dots
          autoPlay={true} // Enable automatic slide change
          interval={3000} // Set the time interval between slides (in milliseconds)
          infiniteLoop={true} // Enable infinite loop
        >
          <div>
            <PopularProps backgroundImage={slider1} title="Best Local Tunaburger" />
          </div>
          <div>
            <PopularProps backgroundImage={slider2}  title="World Famous Burger" />
          </div>
          <div  >
            <PopularProps backgroundImage={slider3}  title="Popular ShroomBacon" />
          </div>
        </Carousel>
        <svg  className='mt-[-1px] bg-[#121212] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5E7C1" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,117.3C840,107,960,149,1080,170.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </section>



          {/* <section className=" px-[1.5em]">

    <PopularProps 
    title="Best Local Tunaburger"
    />
    <PopularProps
    title="World Famous Burger"
    />
       <PopularProps
    title="Popular ShroomBacon"
    />
    </section> */}
  
    </main>  
  );
}

export default Popular;