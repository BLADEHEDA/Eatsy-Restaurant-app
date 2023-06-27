import React from 'react';
import herofooter from "/assets/hero_footer.jpg"
import logo from "/assets/footer_logo.png"
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faClock,faBagShopping,faShare } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram , faTwitter} from '@fortawesome/free-brands-svg-icons'
import insta1 from "/assets/insta1.jpg"
import insta2 from "/assets/insta2.jpg"
import insta3 from "/assets/insta3.jpg"
import insta4 from "/assets/insta4.jpg"
import insta5 from "/assets/insta5.jpg"
import insta6 from "/assets/insta6.jpg"


const Footer = () => {
  return (
    <main className=''>
<svg 
 style={  { 
  backgroundImage: `url(${herofooter})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  zIndex: 100
}}
className='bg-[red] mt-[-0.3px] '
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5E7C1" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,117.3C384,128,480,224,576,245.3C672,267,768,213,864,197.3C960,181,1056,203,1152,181.3C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
      <div className="container mt-[-1px] pt-[5em] pb-[4em]  "
       style={  { 
        backgroundImage: `url(${herofooter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width:'100%'
      }}
      >
        <section className='text-center' > 
        <div className='img flex justify-center mb-[1em]  ' >
      <img src={ logo} className='w-[8em] ' alt="Wavy image" />
      </div>
      <p className='text-[white] font-[500] text-[1.55em] w-[80%] my-0 mx-auto leading-[1.2em] ' >
        Stay informed about special offers </p>
        <p className='text-[white] font-[400] text-[1.1em] w-[80%] my-2 mx-auto leading-[1.2em] ' >
        Subscribe to our bews letter</p>
        <article className="inputbtn "> 
      <div className="inputdiv">
        <input type="email" placeholder='Enter Your Email' 
        className="input email p-4 rounded-[1.8em] mt-[1em] bg-[white] 
        text-[black] w-[85%] text-[1.2em] 
        md:w-[80%]
        " />
      </div>
      <div className="btn mt-5 ">
        <Button 
        style={{
        paddingLeft:"2.5em",
        paddingRight:"2.5em",
        paddingTop:"1em",
        paddingBottom:"1em"
        }}
        text="Subscribe" />
      </div>
      </article>
      
      <section className="info ml-7 ">
      <h2 className='text-[#EB5A5A] text-[1.1em] mt-[7em] text-start mb-3  ' >LET’S GET TOGETHER</h2>
      {/* info section */}
        <article className="infos">
          <div className="infox flex mb-2">
            <div className="icon"> 
            <FontAwesomeIcon className='text-[18px] mr-3  text-[white] ' icon={faMapMarkerAlt } />
            </div>
            <div className="text text-[white] ">60 East 65th Street, NY</div>
          </div>
          <div className="infox flex mb-2">
            <div className="icon"> 
            <FontAwesomeIcon className='text-[18px] mr-3 text-[white] ' icon={faClock } />
            </div>
            <div className="text text-[white]"> 
            <p className="text1">Mon - Sat: 11AM - 11PM</p>
            <p className="text1 text-start">Sun: 11AM - 08PM</p>
            </div>
          </div>
          <div className="infox flex mb-2">
            <div className="icon"> 
            <FontAwesomeIcon className=' text-[18px] mr-3 text-[white]'  icon={faBagShopping} />
            </div>
            <div className="text text-[white]">Mon - Sat: 01PM - 10PM</div>
          </div>
          <div className="infox flex mb-2">
            <div className="icon"> 
            <FontAwesomeIcon className='text-[18px] mr-3  text-[white] '  icon={faShare } />
            </div>
            <div className="text text-[white]">1-800-700-600</div>
          </div> 
        </article>
           {/* social media icons section */}
        <article className="icons flex ">
        <div className="icon w-[2em] h-[2em] flex justify-center p-2 mr-2 items-center rounded-full bg-[#EB5A5A]">
          <FontAwesomeIcon
            className="text-[1.7em] text-[18px] mx-auto text-[white]"
            icon={faFacebook}
          />
       </div>
       <div className="icon w-[2em] h-[2em] flex justify-center p-2 mr-2 items-center rounded-full bg-[#EB5A5A]">
          <FontAwesomeIcon
            className="text-[1.7em] text-[18px] mx-auto text-[white]"
            icon={faTwitter}
          />
       </div>
       <div className="icon w-[2em] h-[2em] flex justify-center p-2 items-center rounded-full bg-[#EB5A5A]">
          <FontAwesomeIcon
            className="text-[1.7em] text-[18px] mx-auto text-[white]"
            icon={faInstagram}
          />
       </div>
        </article>
        {/* about us section */}
        <article className="aboutus text-start  ">
        <h2 className='text-[#EB5A5A] text-[1.1em] mt-[2em] text-start mb-3'>ABOUT US</h2>
          <p className="about text-[white] mb-1 ">Our Story</p>
          <p className="about text-[white] mb-1">Our Team</p>
          <p className="about text-[white] mb-1">Our Food</p>
          <p className="about text-[white] mb-1">Health Measures</p>
          <p className="about text-[white] mb-1">Job Opportunities</p>
        </article>
        {/* choose menu sec tion  */}
        <article className="aboutus text-start  ">
        <h2 className='text-[#EB5A5A] text-[1.1em] mt-[2em] text-start mb-3'>QUICK MENU</h2>
          <p className="about text-[white] mb-1 ">Beef Burgers</p>
          <p className="about text-[white] mb-1">Chicken Burgers</p>
          <p className="about text-[white] mb-1">lant-Based Burgers</p>
          <p className="about text-[white] mb-1">Sides</p>
          <p className="about text-[white] mb-1">Drinks</p>
        </article>
        {/* instagram section */}
        <article className="aboutus text-start  mr-5  ">
        <h2 className='text-[#EB5A5A] text-[1.1em] mt-[2em] text-start mb-3'>QUICK MENU</h2>
        <div className="instatop flex justify.between">
          <div className="insta mr-1"><img src={insta1} alt="insta1" className="instaimahe" /> </div>
          <div className="insta mr-1"><img src={insta2} alt="insta2" className="instaimahe" /> </div>
          <div className="insta "><img src={insta3} alt="insta3" className="instaimahe" /> </div>
        </div>
        <div className="instatop flex">
          <div className="insta mr-1"><img src={insta4} alt="insta4" className="instaimahe" /> </div>
          <div className="insta mr-1"><img src={insta5} alt="insta5" className="instaimahe" /> </div>
          <div className="insta"><img src={insta6} alt="insta6" className="instaimahe" /> </div>
        </div>
        </article>
      </section>
      <div className="ml-7 mr-5 my-7 ">
      <div className="line h-[0.3px] w-full bg-[white] opacity-70 md:hidden   "></div>
      </div>
      
      <div className="rignts text-start ml-8  md:flex justify-between md:mr-[3em] ">
        <div className="right text-[white]">©2021 BoldThemes All rights reserved</div>
        <div className="right ">
          <ul className='flex' >
            <li className="right text-[white] underline mr-3 cursor-pointer ">About </li>  
            <li className="right text-[white] underline mr-3 cursor-pointer ">Delivery</li>
            <li className="right text-[white] underline mr-3 cursor-pointer ">Contact</li>
          </ul>
        </div>
      </div>
      </section>
    </div>
    </main>
  );
};

export default Footer;