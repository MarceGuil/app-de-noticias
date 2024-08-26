
import React, { useState } from 'react';
import { login } from './auth'; // Importa la función de login

const Login = () => {
    const [username, setUsername] = useState(''); // Estado para el nombre de usuario
    const [password, setPassword] = useState(''); // Estado para la contraseña
    const [error, setError] = useState(''); // Estado para manejar errores

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        try {
            const token = await login(username, password); // Llama a la función de login
            localStorage.setItem('token', token); // Almacena el token en localStorage
            
            window.location.href = '/'; // Redirige a la página principal 
        } catch (err) {
            setError(err.message); // Manejo de errores
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Iniciar Sesión</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Usuario"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
            />
            <button type="submit">Iniciar Sesión</button>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar mensaje de error */}
        </form>
    );
};

export default Login; // Exporta el componente
