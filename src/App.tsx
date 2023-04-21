import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Shared/Navbar'
import Hero from './Home/Hero'

function App() {
  return (
    <div className="Appx">
{/* <h1 className='text-3xl font-bold text-blue-600' >  my name is blade heda </h1> */}
<Navbar/>
<Hero/>
    </div>
  )
}

export default App
