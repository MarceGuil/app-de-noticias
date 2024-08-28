import React, { useState } from 'react';
import { login } from './api';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(formData.username, formData.password);
      localStorage.setItem('token', token);
      setMessage('Inicio de sesión exitoso.');
    } catch (error) {
      setMessage('Error al iniciar sesión.');
    }
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Iniciar Sesión</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Login;

