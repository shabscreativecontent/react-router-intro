import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from './pages/Home'
import Vans from "./pages/Vans"
import About from "./pages/About"
import VanDetail from "./pages/VanDetail"

import './server'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/vans" element={ <Vans /> } />
        <Route path="/vans/:id" element={ <VanDetail /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
