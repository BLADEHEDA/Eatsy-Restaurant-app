import React from 'react';
import { MenuBtn } from './Seller';
// import burgerB from "/assets/image_product_03.jpg" 
import cow from "../../../public/assets/cowlogo.png"

function PopularProps(props:any) {
  return (
    <main className="popularProps-main pt-[5em] text-[white] "
    style={{
      backgroundImage:`url(${props.backgroundImage })`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
    >

      <h1 className="title  font-[600]  font-['Rakkas'] text-[2.75em] "> {props.title} </h1>
      <div className="container mt-[2em]  ">
        <div className="img-cont mb-[0.75em]">
          <img src={cow} alt={props.name} className="pic-elt" />
        </div>
        <div className="popularprops-content text-start "> 
        100% Grass fed beef patty,cheddar cheese,special sauce,tomato,pickies,
        lettuce,sessame seed bun
         
        </div>
      </div>
      <div className="popular-price bg-[white] flex w-[75%] rounded-[5em] 
      py-[0.5em] pl-[2em] pr-[0.5em] justify-between  mt-[3em] mb-[5em] ">
        <div className="popular-price-left mt-[0.75em] ">
          <h1 className="price-div text-[black] text-[1.75em] font-[900] "  >$12.00 </h1>
          <p className="qty-div text-[#121212] text-[0.85em] "> 220gr / 600 cal </p>
        </div>
        <div className="popular-price-right">
          <MenuBtn/>
        </div>
      </div>
    </main>
  );
}

function Popular() {
  return (
    <main className="popular-main mt-[-1em] bg-[#121212] px-[1.5em] pb-[30em] ">
    <PopularProps 
    title="Best Local Tunaburger"
    />
    <PopularProps
    title="World Famous Burger"
    />
       <PopularProps
    title="Popular ShroomBacon"
    />
    </main>
  );
}

export default Popular;