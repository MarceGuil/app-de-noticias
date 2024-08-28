import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNews } from './api'; // Asegúrate de que esta función esté bien configurada en api.js
import './Home.css';

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const fetchedNews = await fetchNews();
      setNews(fetchedNews);
    };

    loadNews();
  }, []);

  return (
    <div className="home-container">
      {news.map(article => (
        <div key={article.id} className="article-summary">
          <Link to={`/article/${article.id}`}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
