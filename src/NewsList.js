import React, { useEffect, useState } from 'react';
import { fetchNews } from './api';

const NewsList = () => {
    const [news, setNews] = useState([]); // Estado para almacenar las noticias
    const [error, setError] = useState(''); // Estado para manejar errores

    useEffect(() => {
        const getNews = async () => {
            try {
                const data = await fetchNews(); // Llama a la función para obtener noticias
                setNews(data); // Establece las noticias en el estado
            } catch (err) {
                setError(err.message); // Maneja el error
            }
        };

        getNews(); // Llama a la función cuando el componente se monta
    }, []);

    return (
        <div>
            <h1>Lista de Noticias</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar mensaje de error */}
            <ul>
                {news.length > 0 ? (
                    news.map(item => (
                        <li key={item.id}>{item.title}</li> // Asume que cada noticia tiene un id y un título
                    ))
                ) : (
                    <p>No hay noticias disponibles.</p> // Mensaje si no hay noticias
                )}
            </ul>
        </div>
    );
};

export default NewsList; // Exporta el componente
