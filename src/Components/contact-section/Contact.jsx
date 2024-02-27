import React from 'react'

function Div5() {
  return (
    <section className="div4">
        <div class="subdiv6">
            <div class="service">
                <h1>OUR SERVICES</h1>
            </div>
            <div class="service1">
                <div class="service1a">
                    <img  src=".\Assets\images\s1.png" alt="img" />
                    <h2>Maintenance</h2>
                    <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                </div>
                <div class="service1b">
                    <img src=".\Assets\images\s2.png" alt="img" />
                    <h2>Electrical</h2>
                    <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                </div>
                <div class="service1c">
                    <img src=".\Assets\images\s3.png" alt="img" />
                    <h2>Plumbing</h2>
                    <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                </div>
            </div>
            <div class="service2">
                <a class="readmore" href=" " target="_blank">VIEW MORE</a>
            </div>
        </div>
        <div class="subdiv7">
            <div class="clients">
                <h1>WHAT OUR CLIENTS SAY</h1>
            </div>
            <div class="clients1">
                <div class="clients1a">
                    <div class="clientimg">
                        <img src=".\Assets\images\client-1.jpg" alt="img" />
                        <div class="clientstar">
                            <p>Jorch morik</p>
                            <i class="fa-solid fa-star" style={{color: '#ff8a1d'}}/>
                            <i class="fa-solid fa-star" style={{color: '#ff8a1d'}}/>
                            <i class="fa-solid fa-star" style={{color: '#ff8a1d'}}/>
                            <i class="fa-solid fa-star" style={{color: '#ff8a1d'}}/>
                            <i class="fa-solid fa-star" style={{color: '#ff8a1d'}}/>                           
                        </div>
                    </div>
                    <div class="clientsreview">
                        <p>chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum</p>
                    </div>
                </div>
                <div class="clients1b">
                    <div class="clientimg">
                        <img src=".\Assets\images\client-2.jpg" alt="img" />
                        <div class="clientstar">
                            <p>Jorch morik</p>
                            <i class="fa-solid fa-star" style={{color: '#ff8a1d'}}/>
                            <i class="fa-solid fa-star" style={{color: '#ff8a1d'}}/>
                            <i class="fa-solid fa-star" style={{color: '#ff8a1d'}}/>
                            <i class="fa-solid fa-star" style={{color: '#ff8a1d'}}/>
                            <i class="fa-regular fa-star" style={{color: '#ff8a1d'}}/>
                        </div>
                    </div>
                    <div class="clientsreview">
                        <p>chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div class="clients2">
                <div class="arrow">
                    <i class="fa-solid fa-arrow-left" style ={{color: '#ffffff'}}/>
                </div>
                <div class="arrow">
                    <i class="fa-solid fa-arrow-right" style ={{color: '#ffffff'}}/>
                </div>
            </div>
        </div>
        <div class="subdiv8">
            <div class="contact">
                <div class="contactform">
                    <div class="contactus">
                        <h1>CONTACT US</h1>
                    </div>
                    <div class="form">
                        <input class="input1" type="text" placeholder="Name" required name="Name" />
                        <input class="input1" type="text" placeholder="Phone Number" required name="Phone Number"/>
                        <input class="input1" type="text" placeholder="Email" required name="Email"/>
                        <input class="input1" type="text" placeholder="Message" required name="Message"/>
                    </div>
                    <div class="buttonwrap">
                        <button class="send">SEND</button>
                    </div> 
                </div>
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.22108912497!2d76.30467857507804!3d9.998587890106762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08730401d61933%3A0x4c46d6629c2dcd37!2sMetric%20Tree%20Labs%20-%20Web%20app%2C%20Mobile%20app%2C%20Ecommerce%2C%20Web%20development%2C%20software%20services%20company%20%7CKochi%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sin!4v1705492071696!5m2!1sen!2sin" width="600" height="380" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Div5
