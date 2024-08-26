import React, { useState } from 'react';
import { createUser } from './api';
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUser({ username, dni, email, password }); 
            window.location.href = '/login'; 
        } catch (err) {
            setError('Error al crear la cuenta. Intenta de nuevo.');
        }
    };

    return (
        <div className="signup-container">
            <h2>Crear Cuenta</h2>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>DNI:</label>
                    <input
                        type="text"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Signup;
