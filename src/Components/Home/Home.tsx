import React from 'react'
import Hero from './Hero'
import Seller from './Seller'
import Popular from './Popular'
import Delivery from './Delivery'
import Reviews from './Reviews'

const Home = () => {
  return (
    <main>
        <Hero/>
        <Seller/>
        <Popular/>
        <Delivery/>
        <Reviews/>
    </main>
  )
}

export default Home