import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNewsById } from './api'; // Asegúrate de tener esta función en api.js
import './ArticleDetail.css';

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      const fetchedArticle = await fetchNewsById(id);
      setArticle(fetchedArticle);
    };

    loadArticle();
  }, [id]);

  if (!article) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDetail;
