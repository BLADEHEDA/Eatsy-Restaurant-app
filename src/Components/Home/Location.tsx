import React from 'react'
import "./Home.css"

const Location = () => {
  return (
    <main className='bg-[#F5E7C1] mt-[-1px] pb-[20em] px-[1.5em] pt-[5em] ' >
    <h1 className="text-[2.6em] text-[#E84242] font-['Rakkas'] font-[700] mb-[0.75em]
     " >Contactless delivery  available</h1>
          <div className="locate mb-[1em] ">
        <h2 className="locate-head font-[600] text-[1.3em] text-[black] ">Order by phone</h2>
        <p className="locate-content  text-[1.75em] text-[#E84242] font-[600] ">1-800-700-600</p>
      </div>
     <section className="locations">
      <div  className="locate mb-[1em] ">
        <h2 className="locate-head font-[600] text-[1.3em] text-[black] mb-[0.75em]">Location</h2>
        <p className="locate-content">60 East 65th Street, New York</p>
      </div>

      <div  className="locate mb-[1em] ">
        <h2 className="locate-head font-[600] text-[1.3em] text-[black] mb-[0.75em] ">Delivery hours</h2>
        <h3 className="locate-head font-[500] text-[1em] text-[black]">Monday – Saturday:</h3>
        <p className="locate-content">11AM – 11PM</p>
        <h3 className="locate-head font-[500] text-[1em] text-[black]  mt-[0.75em] ">Sunday:</h3>
        <p className="locate-content">111AM – 08PM</p>
      </div>

      <div  className="locate mb-[1em] ">
        <h2 className="locate-head font-[600] text-[1.3em] text-[black] mb-[0.75em] ">Takeaway hours</h2>
        <h3 className="locate-head font-[500] text-[1em] text-[black]">Monday – Saturday:</h3>
        <p className="locate-content">01PM – 10PM</p>
        <div className="flex mt-[0.75em]"> 
        <p className="locate-head font-[500] text-[1em] text-[black]">Sunday: </p>
        <p className="locate-content ml-1 ">Closed</p>
        </div>
      </div>
     </section>
    </main>

  )
}

export default Location