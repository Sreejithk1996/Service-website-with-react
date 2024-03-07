import React from 'react';
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    
    <header className="contactinfo">
        <div className="call">
            <i className="fa-solid fa-phone" style={{color: '#f59714'}}></i>
            <p>Call : +01 123455678990</p>
        </div>
        <div className="email">
            <i className="fa-solid fa-envelope" style={{color: '#f59714'}}></i>
            <p>Email : demo@gmail.com</p>
        </div>
    </header>
        <header className="navigation home">
        <div className="head">
            <h2>INANCE</h2>
        </div>
        <div className="navitems">
            <ul className="menu">
                <li className="menuitems"><NavLink  to="/">Home</NavLink></li>
                <li className="menuitems"><NavLink to="/about">About</NavLink></li>
                <li className="menuitems"><NavLink to="/services"> Services</NavLink></li>
                <li className="menuitems"><NavLink to="/contactUs">Contact Us</NavLink></li>
            </ul>
        </div>
    </header>
    
    </>
  )
}

export default Header

