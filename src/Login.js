import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from './api';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const token = await login(username, password); 
            localStorage.setItem('token', token); 
            window.location.href = '/'; 
        } catch (err) {
            setError('Error en la autenticación. Verifica tus credenciales.'); 
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>
            <p>¿No tienes cuenta? <Link to="/signup">Crea una cuenta</Link></p>
        </div>
    );
};

export default Login;
