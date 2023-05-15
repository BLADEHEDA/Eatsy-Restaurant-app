import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faTruck ,faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import bag from "../../../public/assets/homedelivery.png"
import Home from "../../../public/assets/stay_home.png"

const DeliverProp=(props:any)=>{
    return(
        <main>
            <div className="icon-div">   
              <FontAwesomeIcon className='text-[2em] text-[#EB5A5A] ' icon={props.icon} /></div>
            <div className="content-div">
                <h2>{props.head} </h2>
                <p>{props.content} </p>
            </div>
        </main>
        )
}

const Delivery = () => {
  return (
    <main>
        <section className="left">  
        <div className="img-part bg-[#F5E7C1] pt-[5em]  ">
        <img src={bag} alt="bag"  className=' bg-[g-[green]] ' />
        </div>
        </section>

        <section className="main-section bg-[#F5E7C1] px-[1.5em] pt-[-1px] pb-[35em]">
            <div className="pic pt-[4em] pb-[1em] ">
                <img src={Home } alt="home-icon" className="img-pic" />
            </div>
            <h1 className="delivery-head  font-[600]  font-['Rakkas'] text-[#E84242]
            text-[2.5em] pb-[1em]  ">Free delivery 7 days a week</h1>

        <DeliverProp
        icon={faHamburger}
        head="Choose Burger"
        content="Sesame snaps tootsie roll dessert candy canes apple pie marzipan topping toffee croissant."
        />
        <DeliverProp
        icon={faTruck}
        head="Delivery or Takeaway"
        content="Capitalize on low hanging fruit to identify a ballpark value added activity to beta t"
        />
       <DeliverProp
        icon={faGlassCheers}
        head="Enjoy Burger"
        content="Praesent interdum mollis neque purus sed diam integer, in egestas nulla eget pede"
        />
        </section>
    </main>
  )
}

export default Delivery