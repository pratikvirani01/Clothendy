import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About'; // Create this component
import NewArrivals from './pages/NewArrivals/NewArrivals';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/NewArrivals" element={<NewArrivals />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;