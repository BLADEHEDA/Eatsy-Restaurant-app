import React from 'react'
import Hero from './Hero'
import Seller from './Seller'
import Popular from './Popular'
import Delivery from './Delivery'

const Home = () => {
  return (
    <main>
        <Hero/>
        <Seller/>
        <Popular/>
        <Delivery/>
    </main>
  )
}

export default Home