import React from 'react'
import './style.css'
import MoonIcon from './MoonIcon'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <h1>Where in the world?</h1>
            <p>
            <MoonIcon  />    Dark Mode</p>
        </div>
    )
}

export default Navbar;