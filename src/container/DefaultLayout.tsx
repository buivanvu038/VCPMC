import React from 'react';
import Login from './pages/Login/login'; // Ensure proper casing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForGotpass from './pages/forGotPass/forGotpass';
import PasswordRecovery from './pages/passwordRecovery/passwordRecovery';
import ResetPassword from './pages/resetPassword/resetPassword';
import Navbar from '../component/Navbar/Navbar';



const DefaultLayout = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Use PascalCase for component names */}
          <Route path="/Login" element={<Login />} /> {/* Use PascalCase for component names */}
          <Route path="/ForGotpass" element={<ForGotpass />} />
          <Route path="/passwordRecovery" element={<PasswordRecovery />} />
          <Route path="/passwordRecovery" element={<ResetPassword />} />
          <Route path="/navbar" element={<Navbar />} />



        </Routes>
      </div>
    </Router>
  );
};

export default DefaultLayout;
