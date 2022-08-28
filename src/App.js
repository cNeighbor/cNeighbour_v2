import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          
          <Route path="/" element={
            <Home />
          } />

        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
