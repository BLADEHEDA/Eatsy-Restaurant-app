import React from 'react'
import burger1 from "../../../public/assets/floating_burger_02.png"
import "./Home.css"
import bent1 from "../../../public/assets/reviews_01.png"
import bent2 from "../../../public/assets/reviews_02.png"
import bent3 from "../../../public/assets/reviews_03.png"
import bent4 from "../../../public/assets/reviews_04.png"

const ReviewsProp=(props:any)=>{
    return(
        <main>
        <div className="img-div">
            <img src={props.src} alt="" />
        </div>
        <p className="quote text-[white] "> {props.quote }</p>
        <h5 className="signature"> {props.signature} </h5>
        </main>
    )
}

const Reviews = () => {
  return (
    <main>
        <section className="review-section bg-[#e84242]  pb-[10em] mt-[-1px] ">
        <h1 className="Review-head  text-[6em] text-center  text-[#F4E6C0] leading-[0.75em] 
     font-['Rakkas']  pt-[1.3em] pb-[1.5em]  relative ">
        Reviews
      </h1>
      <div className="nmnm">
        <img src={burger1} alt="" className="hero-img w-[25em] relative bottom-[14em] " />
      </div>
      
        </section>
    </main>
  )
}

export default Reviews