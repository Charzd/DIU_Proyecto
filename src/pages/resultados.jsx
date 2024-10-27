import React from 'react';
import Buscador from '../components/buscador';
import Filtros from '../components/filtros';

import '../stylesheets/resultados-page/resultados-page.scss';


const ResultadosPage = () => {
  return (
    <div className="resultados">
      <Buscador />
      <h2 className="resultados__titulo">Resultados de la búsqueda</h2>
      <Filtros />
      <div className="resultados__publicaciones">
        {/* Ejemplos de publicaciones */}
        <div className="publicacion">
          <img src="imagen_placeholder.png" alt="Noticia 3" />
          <h3>Noticia 3</h3>
          <p>Descripción</p>
        </div>
        <div className="publicacion">
          <img src="imagen_placeholder.png" alt="Charla Postulación FUAS" />
          <h3>Charla Postulación FUAS</h3>
          <p>Descripción</p>
        </div>
        <div className="publicacion">
          <img src="imagen_placeholder.png" alt="Fondos Concursables" />
          <h3>Fondos Concursables</h3>
          <p>Descripción</p>
        </div>
      </div>
    </div>
  );
};

export default ResultadosPage;