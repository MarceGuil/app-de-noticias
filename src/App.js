import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import NewsList from './NewsList';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<NewsList />} />
        </Routes>
        <div className="footer">
          © 2024 Your News App
        </div>
      </div>
    </Router>
  );
}

export default App;

