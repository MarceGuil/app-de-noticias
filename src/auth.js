
const API_URL = 'https://sandbox.academiadevelopers.com/docs/';

export const login = async (username, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Error en la autenticación'); // Manejo de error
    }

    const data = await response.json(); 
    return data.token; 
};
