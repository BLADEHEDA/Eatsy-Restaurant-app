import React from 'react';
import { MenuBtn } from './Seller';

function PopularProps(props:any) {
  return (
    <main className="popularProps-main"
    style={{
      backgroundImage:`url(${props.backgroundImage })`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
    >

      <h1 className="title"> {props.title} </h1>
      <div className="container">
        <div className="img-cont">
          <img src={props.src} alt={props.name} className="pic-elt" />
        </div>
        <div className="popularprops-content"> {props.content} </div>
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
    <main className="popular-main">
    <PopularProps 
    
    />
    <PopularProps/>
    <PopularProps/>
    </main>
  );
}

export default Popular;