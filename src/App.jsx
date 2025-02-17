import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Places from './components/Places';
import Footer from './components/Footer';
import About from './Pages/About';
import Contactx from './Pages/Contactx';


 
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/places" element={<Places />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contactx />}></Route>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App