
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login'; // Asegúrate de que el componente Login.js esté en la misma carpeta
import NewsList from './NewsList'; // Importa el componente de lista de noticias (si ya lo tienes)

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} /> {/* Ruta para el inicio de sesión */}
          <Route path="/" component={NewsList} /> {/* Ruta para mostrar las noticias */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
