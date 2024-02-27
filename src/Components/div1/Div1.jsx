import React from 'react'

function Div1() {
  return (
    <header className="navigation home">
    <div className="head">
        <h2>INANCE</h2>
    </div>
    <div className="navitems">
        <ul className="menu">
            <li className="menuitems homeactive"><a class="active" href="./home.html">Home</a></li>
            <li className="menuitems"><a href="./about.html">About</a></li>
            <li className="menuitems"><a href="./services.html"> Services</a></li>
            <li className="menuitems"><a href="./contact.html">Contact Us</a></li>
        </ul>
    </div>
</header>
  )
}

export default Div1
