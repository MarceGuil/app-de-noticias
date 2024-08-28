import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Header'; // Importa el componente del encabezado
import Login from './Login'; // Importa el componente de inicio de sesión
import NewsList from './NewsList'; // Importa el componente que muestra las noticias
import Profile from './Profile'; // Importa el componente de perfil (si lo tienes)
import Signup from './Signup'; // Importa el componente de registro (si lo tienes)

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />  {/* Ruta para el inicio de sesión */}
        <Route path="/signup" element={<Signup />} />  {/* Ruta para el registro de usuario */}
        <Route path="/profile" element={<Profile />} />  {/* Ruta para el perfil del usuario */}
        <Route path="/" element={<NewsList />} />  {/* Ruta principal para mostrar las noticias */}
      </Routes>
    </Router>
  );
}

export default App;



