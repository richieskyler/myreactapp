import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Components/Navbar'

const About = () => {
  return (
    <div className=''>
      <Navbar/>
        <h5>About</h5>
        <Link to='/home'>
        <li className="nav-item">home</li>
        </Link>
    
    </div>
  )
}

export default About