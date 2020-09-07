import React from 'react'
import { NavLink } from 'react-router-dom'
import porkslope from './icons/porkslope.png'



console.log(porkslope)

function Navbar() {

    return (
        <div className="navbar">
           <img src={porkslope} className="logo" alt="logo" />
           
            <ul>
                <NavLink to="/login"><li>Logout</li></NavLink>
                <NavLink to="/history"><li>History</li></NavLink>
                <NavLink to="/cart"><li>Cart</li></NavLink>
                <NavLink to="/"><li>Home</li></NavLink>
            </ul>
        </div>
    )
}

export default Navbar

