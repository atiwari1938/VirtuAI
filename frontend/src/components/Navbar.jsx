import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <div className="text-xl font-bold">VirtuAI</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
