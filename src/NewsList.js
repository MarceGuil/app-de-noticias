import React, { useEffect, useState } from 'react';
import { fetchNews } from './api'; // Importa la función de api.js
import './NewsList.css';

const NewsList = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getNews = async () => {
            try {
                const data = await fetchNews(); // Llama a la función para obtener noticias
                setNews(data); // Establece el estado de las noticias
            } catch (err) {
                setError(err.message); // Manejo de errores
            }
        };

        getNews(); // Llama a la función para obtener noticias
    }, []);

    return (
        <div className="news-list">
            <h1>Últimas Noticias</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar mensaje de error */}
            <div className="card-container">
                {news.map(item => (
                    <div className="news-card" key={item.id}>
                        <img src={item.image} alt={item.title} /> {/* Asegúrate de que esto sea correcto */}
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsList; // Exporta el componente

