import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    
         <div className='navBar'>
                    <div className='home'>
                        <Link to="/">home</Link>
                    </div>
                    <div className='about'>
                        <Link to="/about">about</Link>
                    </div>
                    <div className='contact'>
                        <Link to="/contact">contact</Link>
                </div>
                </div>
    
  )
}

export default NavBar