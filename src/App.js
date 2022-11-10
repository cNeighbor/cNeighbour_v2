import React from 'react';
import './App.css';
import SmNavbar from "./components/SM-navbar"
import Home from "./pages/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Footer from './components/Footer';
import LgNavbar from './components/LG-navbar';
import Events from './components/Events';
import HorizontalScroll from './components/HorizontalScroll';

function App() {
  return (
    <div className="App">
      <Router>
      <SmNavbar />
      <LgNavbar />
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          
          <Route path="/" element={
            <Home />
          } />

        </Routes>
      </div>
      <Events/>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
