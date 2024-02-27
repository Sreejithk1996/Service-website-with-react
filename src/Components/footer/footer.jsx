import React from 'react'

function Footer() {
  return (
    <>

    <footer className="div5">
        <div className="footer">
            <div className="footerhead">
                <h1>GET IN TOUCH</h1>
            </div>
            <div className="footerwrap">
                <div className="footer1">
                    <div className="icon1">
                        <i className="fa-solid fa-location-dot fa-beat" style={{color: '#ffffff'}} />
                    </div>
                    <p>Lorem Ipsum is simply dummy text</p>
                </div>
                <div className="footer2">
                    <div className="icon2">
                        <i className="fa-solid fa-phone fa-beat" style={{color: '#ffffff'}} />
                    </div>
                    <p>+02 1234567890</p>
                </div>
                <div className="footer3">
                    <div className="icon3">
                        <i className="fa-solid fa-envelope fa-beat" style={{color: '#ffffff'}} />
                    </div>
                    <p>demo@gmail.com</p>
                </div>
            </div>
            <div className="footer4">
                <h2>FOLLOW US</h2>
            </div>
            <div className="social">
                <i className="fa-brands fa-facebook" />
                <i className="fa-brands fa-instagram" />
                <i className="fa-brands fa-snapchat" />
                <i className="fa-brands fa-pinterest" />
                <i className="fa-brands fa-twitter" />
                <i className="fa-brands fa-linkedin" />
            </div>
        </div>
    </footer>

    <div className="footerend">
        <p>© 2024 All Rights Reserved By</p><a href="https://metrictreelabs.com/" target="_blank" rel="noreferrer">Metrictreelabs</a>
    </div>

    </>
  )
}

export default Footer
