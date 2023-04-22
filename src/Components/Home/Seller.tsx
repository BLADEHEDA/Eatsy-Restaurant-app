import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
import "./Home.css"
import burger1 from "/assets/product_01-640x640.jpg" 
import burger2 from "/assets/product_02-640x640.jpg" 
import burger3 from "/assets/product_04-640x640.jpg"
import burger4 from "/assets/product_09-640x640.jpg"
import burger5 from "/assets/product_08-640x640.jpg" 
import burger from "/assets/image_product_01.jpg"

 
// the menu button  
const MenuBtn=()=>{
    return(
        <main className="btn">
            <button className="menu-btn rounded-[50%] py-[1.5em] px-[1.75em] border-2   border-[#e84242]  ">
            <div className="left1"> <FontAwesomeIcon className='text-[1em] text-[#e84242] ' icon={faPlus} /> </div>
       
            </button>
        </main>
    )
}

// BUilding the components for the diffferent menu elements and receiveing props through iit 
const Menu=(props)=>{
    return(
        <main className="menu pb-[1.5em] ">
            <section className="maini-menu-div bg-[#FEFEFE] rounded-[20px] mx-[1.5em] p-[1.5em] ">
                <p className="menu-type font-[400] text-[black] "> {props.type} </p>
                <h1 className="menu-name text-[2em] font-[800] text-[#121212] ">{props.name} </h1>
                <h1 className="menu-nam text-[2em] font-[800] text-[#121212]">{props.name1} </h1>
                <div className="menu-img-div">
                    <img src={props.src} alt={props.name} className="menu-img" />
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
const Menu1=(props)=>{
    return(
        <main className="menu pb-[1.5em] ">
            <section className="maini-menu-div bg-[#FEFEFE] rounded-[20px] mx-[1.5em] p-[1.5em] ">
                <p className="menu-type font-[400] text-[black] "> {props.type} </p>
                <h1 className="menu-name text-[2em] font-[800] text-[#121212] ">{props.name} </h1>
                <h1 className="menu-nam text-[2em] font-[800] text-[#121212]">{props.name1} </h1>
                <div className="menu-img-div">
                    <img src={props.src} alt={props.name} className="menu-img object-cover " />
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


const Seller = () => {
  return (
    <main className=' Seller Hero-main pb-[10em] '>
    <h1 className="sellers text-[#F4E6C0]  font-['Rakkas'] text-center  pb-[1em] ">Bestsellers</h1>
    <div className="menus-seller">
        <Menu type="BEEF" name="Bacon+Cheese" src={burger1} name1="+Green Burger" price="$6.00" specs="220gr / 600 cal" />
        <Menu type="BEEF" name="Burger" src={burger2} name1="+Green Burger" price="$12.00" specs="220gr / 600 cal" />
        <Menu type="MEALS" name="BaconBacon" src={burger3} name1="Cheeseburger" price="$8.00" specs="220gr / 600 cal" />
        <Menu type="CHICKEN" name="CrazyBeefTuna" src={burger4} name1="Burger" price="$13.00" specs="220gr / 600 cal" />
        <Menu type="VEGAN" name="ShroomBacon" src={burger5} name1="Burger" price="$10.00" specs="220gr / 600 cal" />
        <Menu1 type="VEGAN" name="ShroomBacon" src={burger5} name1="Burger" price="$10.00" specs="220gr / 600 cal" />
    </div>
      
    </main>
  )
}

export default Seller
