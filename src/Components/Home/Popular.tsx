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
      <div className="popular-price">
        <div className="popular-price-left">
          <h1 className="price-div">{props.price} </h1>
          <p className="qty-div"> {props.qty} </p>
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
    {/* <PopularProps
    title="World Famous Burger"
    />
       <PopularProps
    title="Popular ShroomBacon"
    /> */}
    </main>
  );
}

export default Popular;