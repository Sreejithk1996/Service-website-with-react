import React from 'react';
import Header from './Components/header-section/Header';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Services from './Pages/services/Services';
import ContactUs from './Pages/contactUs/ContactUs';
import Footer from './Components/footer-section/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services />} />
        <Route path='/contactUs' element={<ContactUs/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
 
    </>
  );
}

export default App;
