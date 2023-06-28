import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
import "./Home.css"
import burger1 from "/assets/product_01-640x640.jpg" 
import burger2 from "/assets/product_02-640x640.jpg" 
import burger3 from "/assets/product_04-640x640.jpg"
import burger4 from "/assets/product_09-640x640.jpg"
import burger5 from "/assets/product_08-640x640.jpg" 
import burger from "/assets/image_product_00.jpg"    
import burgerA from "/assets/image_product_02.jpg"  
import burgerB from "/assets/image_product_03.jpg"
// the menu button   
export const MenuBtn=(props:any)=>{
    return(
        <main className="btn"  >
            <button style={props.style} 
            className="menu-btn rounded-[50%] py-[1.5em] px-[1.75em] border-2 bg-transparent
              border-[#e84242]   ">
            <div className="left1"> <FontAwesomeIcon className='text-[1em] text-[#e84242] ' icon={faPlus} /> </div>
       
            </button>
        </main>
    )
}

// BUilding the components for the diffferent menu elements and receiveing props through iit 
const Menu=(props:any)=>{
    return(
        <main className="menu pb-[1.5em]  ">
            <section className="maini-menu-div bg-[#FEFEFE] rounded-[20px] mx-[1.5em] p-[1.5em]
            md:mx-[1.75em]  lg:h-[38em] lg:w-[93%] ">
                <p className="menu-type font-[400] text-[black] "> {props.type} </p>
                <div className="name  md:flex lg:block ">  
                <h1 className="menu-name text-[2em] font-[800] text-[#121212]
                md:text-[2.5em] lg:text-[1.8em] ">{props.name} </h1>
                <h1 className="menu-nam text-[2em] font-[800] text-[#121212]
                 md:text-[2.5em] lg:text-[1.8em] ">{props.name1} </h1>
                </div>
                <div className="menu-img-div">
                    <img src={props.src} alt={props.name} className="menu-img lg:w-[20em] " />
                </div>
                <section className="menu-bottom flex justify-between ">   
             
                <article className="menu-left">
                <p className="menu-price text-[2em] font-[800]"> {props.price} </p>
                <p className="menu-specs text-[15px] mt-[-0.15em] "> {props.specs} </p>
                </article>

                <article className="menu-right">
                    <MenuBtn/>
                </article>
                </section>
            </section>
        </main>
    )
}
// building the component of the cards for the menu section 
const Menu1=(props:any)=>{
    return(
        <main className="menu pb-[1.5em]  "  >
            {/* pass the background image a props  */}
            <section className="maini-menu-div rounded-[20px] mx-[1.5em] p-[1.5em]
             md:h-[65em] lg:h-[38em]   "
                style={  { 
                    backgroundImage: `url(${props.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    
            }}
                  
                  > 
                <p className="menu-type font-[400] text-[white] "> {props.type} </p>
                <h1 className="menu-name text-[2em] font-[800] text-[white] 
                 md:text-[2.5em] ">{props.name} </h1>
                <h1 className="menu-nam text-[2em] font-[800] text-[white] ">{props.name1} </h1>
                <section className="menu-bottom flex justify-between
                md:mt-[32em] lg:mt-[2.75em] " style={props.style} >   
             
                <article className="menu-left text-[white]  ">
                <p className="menu-price text-[2em] font-[800]"> {props.price} </p>
                <p className="menu-specs text-[15px] mt-[-0.15em] "> {props.specs} </p>
                </article>

                <article className="menu-right">
                    <MenuBtn  style={{background:"transparent"} } />
                </article>
                </section>
            </section>
        </main>
    )
}
// building the component of the cards for the menu section 
const Menu3=(props:any)=>{
    return(
        <main className="menu pb-[1.5em]   "  >
            {/* pass the background image a props  */}
            <section className="maini-menu-div rounded-[20px] mx-[1.5em] p-[1.5em]
             md:h-[35em]  lg:h-[38em]   "
                style={  { 
                    backgroundImage: `url(${props.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    
            }}
                  
                  > 
                <p className="menu-type font-[400] text-[white] "> {props.type} </p>
                <h1 className="menu-name text-[2em] font-[800] text-[white] 
                 md:text-[2.5em] ">{props.name} </h1>
                <h1 className="menu-nam text-[2em] font-[800] text-[white] ">{props.name1} </h1>
                <section className="menu-bottom flex justify-between
                md:mt-[20em]  " style={props.style} >   
             
                <article className="menu-left text-[white]  ">
                <p className="menu-price text-[2em] font-[800]"> {props.price} </p>
                <p className="menu-specs text-[15px] mt-[-0.15em] "> {props.specs} </p>
                </article>

                <article className="menu-right">
                    <MenuBtn  style={{background:"transparent"} } />
                </article>
                </section>
            </section>
        </main>
    )
}

// building the component of the cards for the menu section 
const Menu2=(props:any)=>{
    return( 
        <main className="menu pb-[1.5em] "  >
            {/* pass the background image a props  */}
            <section className="maini-menu-div rounded-[20px] mx-[1.5em] p-[1.5em] md:h-[38em]
               "
                style={  { 
                    backgroundImage: `url(${props.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    

            }}
                  
                  > 
                <p className="menu-type font-[300] text-[white] "> {props.type} </p>
                <h1 className="menu-name text-[1.5em] font-[800] text-[white] md:text-[2em]   ">{props.name} </h1>
                <h1 className="menu-nam text-[2em] font-[800] text-[white]  ">{props.name1} </h1>
                
                <section className="menu-bottom flex justify-between md:mt-[22em]
               " style={props.style} >   
                <article className="menu-left text-[white]  ">
                <p className="menu-price text-[1.5em] font-[800]"> {props.price} </p>
                <p className="menu-specs text-[15px] mt-[-0.15em] "> {props.specs} </p>
                </article>

                <article className="menu-right">
                    <MenuBtn  style={{background:"transparent"} } />
                </article>
                </section>
            </section>
        </main>
    )
}


const Seller = () => {
  return (
    <div>   
    <main className=' Seller Hero-main pb-[2em] overflow-hidden '>
    <h1 className="sellers text-[#F4E6C0]  font-['Rakkas'] text-center  pb-[1em] ">Bestsellers</h1>
    <section className="menus-seller">
        <article className="seller-div-1 lg:flex lg:justify-between lg:mb-2 ">
           <div className="sell1 lg:flex-[30%] ">
           <Menu   
        type="BEEF"
        name="Bacon+Cheese" 
        src={burger1} 
        name1="+Green Burger" 
        price="$6.00" 
        specs="220gr / 600 cal" />
           </div>
           <div className="sell1 lg:flex-[30%] ">
           <Menu 
        type="BEEF" 
        name="Black Angus" 
        src={burger2} 
        name1="Burger" 
        price="$12.00" 
        specs="220gr / 600 cal" />
           </div>
           <div className="sell1 lg:flex-[30%] ">
           <Menu1 
        style={{paddingTop:'20em'}} 
        backgroundImage={burger} 
        type="VEGAN" 
        name="Bøfsandwich"  
        price="$8.00" s
        pecs="220gr / 600 cal" />
           </div>
        </article>
        <article className="sellerdiv2 lg:flex lg:mr-5 ">
            <div className="sell2 flex-[65%] ">
            <Menu3   
      style={{paddingTop:'7em'}} 
      backgroundImage={burgerA} 
      price="$11.00" 
      specs="220gr / 600 cal" />
            </div>
            <div className="sell2 flex-[35%] w-full lg:ml-[-1.5em] ">
            <Menu 
        type="MEALS" 
        name="BaconBacon" 
        src={burger3} 
        name1="Cheeseburger" 
        price="$8.00" 
        specs="220gr / 600 cal" />
            </div>
        </article>
        {/* thirde section */}
    <article className="selldiv3 lg:flex">
        <div className="sell3 lg:flex flex-[40%] ">
            <div className="sell3a flex-[50%] h-50em ">
        <Menu 
        type="CHICKEN"
        //  name="CrazyBeefTuna"
         src={burger4} name1="Burger" 
         price="$13.00" 
         specs="220gr / 600 cal" />
            </div>
            <div className="sell3a flex-[50%]  ">
        <Menu 
        type="VEGAN" 
        // name="ShroomBacon" 
        src={burger5} 
        name1="Burger" 
        price="$10.00" 
        specs="220gr / 600 cal" />
            </div>
        </div>
        <div className="sell3 flex-[60%]">    
        <Menu2  
        style={{paddingTop:'1.5em'}}  
        backgroundImage={burgerB} 
        type="MEALS"
         name="#stayhome kit: 6 mini burger + 6 Pack Kraft beer"  
         price="$22.00" 
         specs="220gr / 600 cal" />
         </div>
    </article>
 

      
          
    </section>
    </main>
    <svg className='bg-[#121212] mt-[-1px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#e84242" fill-opacity="1" d="M0,160L60,160C120,160,240,160,360,176C480,192,600,224,720,208C840,192,960,128,1080,117.3C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </div>
  )
}

export default Seller