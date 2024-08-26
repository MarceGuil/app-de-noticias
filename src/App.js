import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import NewsList from './NewsList';
import Signup from './Signup'; // Importa el componente Signup

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link> {/* Enlace a la página de registro */}
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* Ruta para la página de registro */}
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
