import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Locate from "./pages/Locate"
import EventPage from './pages/EventPage';
import BusinessReg from './pages/BusinessReg';
import BusinessList from './pages/BusinessList';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/find" element={<Locate />} />

          <Route path="/event-details" element={<EventPage />} />

          <Route path="/business-list" element={<BusinessList />} />

          <Route path="/register-business" element={<BusinessReg />} />
          
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
