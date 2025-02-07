import React from 'react'
import NavbarMain from './Navbar'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className=''>
        <h5>About</h5>
        <Link to='/home'>
        <li className="nav-item">home</li>
        </Link>
    
    </div>
  )
}

export default About