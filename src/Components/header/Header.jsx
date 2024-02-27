import React from 'react';

function Header() {
  return (
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
    
  )
}

export default Header

