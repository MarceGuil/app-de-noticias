const API_URL = 'https://sandbox.academiadevelopers.com';

let token = null;

// Función para autenticar al usuario y obtener un token
export const login = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/api-auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Error en la autenticación');
        }

        const data = await response.json();
        token = data.token;
        return token;
    } catch (error) {
        console.error('Error en login:', error.message);
        throw error;
    }
};

// Función para obtener el token o realizar login si no está disponible
const getToken = async () => {
    if (!token) {
        token = await login('31733731', 'VZcYPByUWK'); // Usa tus credenciales aquí
    }
    return token;
};

export const fetchUserProfile = async () => {
    try {
        const token = await getToken();
        const response = await fetch(`${API_URL}/api/auth/user/`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error al obtener el perfil de usuario');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en fetchUserProfile:', error.message);
        throw error;
    }
};

// Función para obtener todas las noticias
export const fetchNews = async () => {
    try {
        const token = await getToken();
        const response = await fetch(`${API_URL}/infosphere/articles/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,  // Ajuste aquí
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error al obtener noticias');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en fetchNews:', error.message);
        throw error;
    }
};

// Función para obtener una noticia por ID
export const fetchNewsById = async (id) => {
    try {
        const token = await getToken();
        const response = await fetch(`${API_URL}/infosphere/articles/${id}/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,  // Ajuste aquí
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error al obtener la noticia');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en fetchNewsById:', error.message);
        throw error;
    }
};

// Función para crear un usuario
export const createUser = async ({ username, dni, email, password }) => {
    try {
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
    } catch (error) {
        console.error('Error en createUser:', error.message);
        throw error;
    }
};

// Función para crear un nuevo artículo
export const createArticle = async (articleData) => {
    try {
        const token = await getToken();
        const response = await fetch(`${API_URL}/infosphere/articles/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`,  // Ajuste aquí
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(articleData),
        });

        if (!response.ok) {
            throw new Error('Error al crear el artículo');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en createArticle:', error.message);
        throw error;
    }
};

// Función para actualizar un artículo existente
export const updateArticle = async (articleId, updatedData) => {
    try {
        const token = await getToken();
        const response = await fetch(`${API_URL}/infosphere/articles/${articleId}/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${token}`,  // Ajuste aquí
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el artículo');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en updateArticle:', error.message);
        throw error;
    }
};

// Función para eliminar un artículo
export const deleteArticle = async (articleId) => {
    try {
        const token = await getToken();
        const response = await fetch(`${API_URL}/infosphere/articles/${articleId}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Token ${token}`,  // Ajuste aquí
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el artículo');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en deleteArticle:', error.message);
        throw error;
    }
};

// Función para obtener todas las reacciones de un artículo
export const fetchArticleReactions = async (articleId) => {
    try {
        const token = await getToken();
        const response = await fetch(`${API_URL}/infosphere/articles/${articleId}/reactions/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,  // Ajuste aquí
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error al obtener las reacciones');
        }

        return await response.json();
    } catch (error) {
        console.error('Error en fetchArticleReactions:', error.message);
        throw error;
    }
};
