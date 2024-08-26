const API_URL = 'https://sandbox.academiadevelopers.com/docs';

// Función para autenticar al usuario y obtener un token
export const login = async () => {
    const username = '31733731'; // Mi usuario
    const password = 'VZcYPByUWK'; // Mi contraseña

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

// Función para obtener las noticias, utilizando el token para autenticación
export const fetchNews = async () => {
    const token = await login(); // Autenticación previa
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

// Función para crear una nueva noticia
export const createNews = async (title, content) => {
    const token = await login(); // Autenticación previa
    const response = await fetch(`${API_URL}/news`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`, // Incluye el token en la cabecera
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }), // Enviar el título y contenido de la noticia
    });

    if (!response.ok) {
        throw new Error('Error al crear la noticia'); // Manejo de error
    }

    return await response.json();
};
// Función para actualizar una noticia existente
export const updateNews = async (newsId, title, content) => {
    const token = await login(); // Autenticación previa
    const response = await fetch(`${API_URL}/news/${newsId}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`, // Incluye el token en la cabecera
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }), // Enviar los nuevos datos de la noticia
    });

    if (!response.ok) {
        throw new Error('Error al actualizar la noticia'); // Manejo de error
    }

    return await response.json(); // Devuelve la respuesta del servidor
};

// Función para eliminar una noticia
export const deleteNews = async (newsId) => {
    const token = await login(); // Autenticación previa
    const response = await fetch(`${API_URL}/news/${newsId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`, // Incluye el token en la cabecera
        },
    });

    if (!response.ok) {
        throw new Error('Error al eliminar la noticia'); // Manejo de error
    }

    return await response.json(); // Devuelve la respuesta del servidor
};