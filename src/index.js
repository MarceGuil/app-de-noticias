import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente principal
import './index.css'; // Estilos globales
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  // Renderiza el componente App
  </React.StrictMode>
);

// Reporte de rendimiento opcional
reportWebVitals();
