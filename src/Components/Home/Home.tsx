import React from 'react'
import Hero from './Hero'
import Seller from './Seller'
import Popular from './Popular'
import Delivery from './Delivery'
import Reviews from './Reviews'
import Follow from './Follow'
import Location from './Location'

const Home = () => {
  return (
    <main>
        <Hero/>
        <Seller/>
        <Popular/>
        <Delivery/>
        <Reviews/>
        <Follow/>
        <Location/>
    </main>
  )
}

export default Home