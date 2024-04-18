import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar';
import UserCard from './UserCard';
import NumberCruncher from './NumberCruncher';
import { InventoryManagementPage } from './pages/inventory-page';
import { OtherStationaryItemsPage } from './pages/other-stationary-items';
import Signup from './signup';
import Login from './Login';
import User from './User';

function App() {
  const location = useLocation();

  // Check if the current path is either '/signup' or '/'
  const isLoginPage = location.pathname === '/' || location.pathname === '/signup';

  return (
    <div>
      {/* Conditional rendering for Navbar */}
      {!isLoginPage && <Navbar />}
      <div className="dashboard">
        <Routes>
          <Route path="/" element={<Login />} /> 
          {/* Login page as the initial route */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/user-card" element={<UserCard />} />
          <Route path="/numbers" element={<NumberCruncher />} />
          <Route path="/inventory-management" element={<InventoryManagementPage />} />
          <Route path="/other-items" element={<OtherStationaryItemsPage />} />
          <Route path="/user" element={<User />} /> {/* Add this line */}
        </Routes>
      </div>
    </div>
  );
}

export default App;