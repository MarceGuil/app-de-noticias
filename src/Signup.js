import React, { useState } from 'react';
import { createUser } from './api';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser(formData);
      setMessage('Usuario registrado con éxito.');
    } catch (error) {
      setMessage('Error al registrar usuario.');
    }
  };

  return (
    <div className="signup-container">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Usuario" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
        <button type="submit">Registrarse</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Signup;
