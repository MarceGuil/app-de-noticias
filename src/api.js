const API_URL = 'https://sandbox.academiadevelopers.com/api'; // URL base de la API

export const login = async (username, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Enviando las credenciales
    });

    if (!response.ok) {
        throw new Error('Error en la autenticación'); // Manejo de error
    }

    const data = await response.json();
    return data.token; // Devuelve el token
};

export const fetchNews = async () => {
    const token = localStorage.getItem('token'); // Obtiene el token de localStorage
    const response = await fetch(`${API_URL}/news`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`, // Incluye el token en la cabecera
        },
    });

    if (!response.ok) {
        throw new Error('Error al obtener noticias'); // Manejo de error
    }

    return await response.json(); // Devuelve los datos de la respuesta
};
