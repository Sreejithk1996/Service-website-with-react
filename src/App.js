import React from 'react';
import Header from './Components/header/Header';
import Div1 from './Components/div1/Div1';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Services from './Pages/services/Services';
import Footer from './Components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './Pages/contactUs/ContactUs';



function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Div1 />
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
