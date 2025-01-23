import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from '../components/Signup';
import Login from '../components/Login';

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <nav className="flex justify-center mt-8">
          <Link to="/signup" className="mr-4 text-blue-500 hover:underline">
            Signup
          </Link>
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;