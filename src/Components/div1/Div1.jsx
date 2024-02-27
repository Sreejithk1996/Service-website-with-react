import React from 'react'
import { Link } from 'react-router-dom'

function Div1() {
  return (
    <header className="navigation home">
    <div className="head">
        <h2>INANCE</h2>
    </div>
    <div className="navitems">
        <ul className="menu">
            <li className="menuitems"><Link  to="/">Home</Link></li>
            <li className="menuitems"><Link to="/about">About</Link></li>
            <li className="menuitems"><Link to="/services"> Services</Link></li>
            <li className="menuitems"><Link to="/contactUs">Contact Us</Link></li>
        </ul>
    </div>
</header>
  )
}

export default Div1
