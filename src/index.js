import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(     // Esto lo que hace es decirle que tiene que inferir en algun lugar especifico del index.html .Al poner el id root le digo que en el index.html usando esa misma llave en un <div>  voy a inyectar lo que le diga aca abajo
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);              
// Y Al haber puesto document.getElementById('root') lo que hace es inyectar las 3 configuraciones anteriormente en el index.html


