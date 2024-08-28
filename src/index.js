import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente principal
import './index.css'; // Estilos globales
import reportWebVitals from './reportWebVitals'; // Importa la función para reportar el rendimiento

// Crea la raíz del DOM donde se montará la aplicación React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro de React.StrictMode
root.render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente App */}
  </React.StrictMode>
);

// Reporte de rendimiento opcional
reportWebVitals(); // Llama a reportWebVitals para medir el rendimiento de la aplicación


