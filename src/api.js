const API_URL = 'https://sandbox.academiadevelopers.com/docs/'; // Ajusta la URL base según la documentación

// Función para autenticar al usuario y obtener un token
export const login = async () => {
    const username = '31733731'; // Tu usuario
    const password = 'VZcYPByUWK'; // Tu contraseña

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

// Función para obtener todas las categorías de artículos
export const fetchCategories = async () => {
    const token = await login();
    const response = await fetch(`${API_URL}/infosphere/article-categories/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Error al obtener categorías');
    }

    return await response.json();
};

// Función para crear una nueva categoría de artículos
export const createCategory = async (name) => {
    const token = await login();
    const response = await fetch(`${API_URL}/infosphere/article-categories/`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    });

    if (!response.ok) {
        throw new Error('Error al crear la categoría');
    }

    return await response.json();
};

// Función para actualizar una categoría de artículos existente
export const updateCategory = async (id, name) => {
    const token = await login();
    const response = await fetch(`${API_URL}/infosphere/article-categories/${id}/`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    });

    if (!response.ok) {
        throw new Error('Error al actualizar la categoría');
    }

    return await response.json();
};

// Función para eliminar una categoría de artículos
export const deleteCategory = async (id) => {
    const token = await login();
    const response = await fetch(`${API_URL}/infosphere/article-categories/${id}/`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Error al eliminar la categoría');
    }

    return await response.json();
};
//Funcion para crear usuario 
export const createUser = async ({ username, dni, email, password }) => {
    const response = await fetch(`${API_URL}/signup`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, dni, email, password }),
    });

    if (!response.ok) {
        throw new Error('Error al crear la cuenta');
    }

    return await response.json();
};
