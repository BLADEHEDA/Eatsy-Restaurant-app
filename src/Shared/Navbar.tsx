import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHamburger } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <main className='Navbar'>
      {/* build the mobile screen size navbar  */}
      <section className="mobile-navbar">
      <FontAwesomeIcon icon={faHamburger} />
      </section>
    </main>
  )
}

export default Navbar
