import React, { useEffect, useState } from 'react';
import { fetchNews } from './api'; // Importa la función fetchNews desde api.js

// Definición del componente NewsList
function NewsList() {
  const [news, setNews] = useState([]); // Estado para almacenar las noticias
  const [error, setError] = useState(''); // Estado para almacenar errores

  // useEffect para ejecutar la función cuando el componente se monta
  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews(); // Llama a la API para obtener las noticias
        setNews(data); // Almacena las noticias en el estado
      } catch (error) {
        setError('Error al cargar las noticias.'); // Maneja errores
      }
    };

    getNews(); // Ejecuta la función para obtener las noticias
  }, []); // El arreglo vacío significa que este efecto se ejecutará solo una vez al montar el componente

  // Si hay un error, lo mostramos
  if (error) {
    return <p>{error}</p>;
  }

  // Renderizamos las noticias
  return (
    <div>
      <h1>Últimas Noticias</h1>
      {news.map(article => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.body}</p> {/* Asume que 'body' es el contenido de la noticia */}
        </div>
      ))}
    </div>
  );
}

export default NewsList;  // Exporta el componente


