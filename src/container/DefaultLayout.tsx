import React from 'react';
import Login from './pages/Login/login'; // Ensure proper casing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForGotPass from './pages/forGotPass/forGotPass'; // Ensure proper casing

const DefaultLayout = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Use PascalCase for component names */}
          <Route path="/Login" element={<Login />} /> {/* Use PascalCase for component names */}
          <Route path="/forGotPass" element={<ForGotPass/>} /> {/* Use PascalCase for component names */}
        </Routes>
      </div>
    </Router>
  );
};

export default DefaultLayout;
