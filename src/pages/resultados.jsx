import React from 'react';
import { useNavigate } from 'react-router-dom';
import Buscador from '../components/buscador';
import Filtros from '../components/filtros';
import noticia from '../assets/noticia.png';

import '../stylesheets/resultados-page/resultados-page.scss';

const ResultadosPage = () => {
  const navigate = useNavigate();

  const handleClickNoticia3 = () => {
    navigate('/noticia-3');
  };

  return (
    <div className="resultados">
      <Buscador />
      <h2 className="resultados__titulo">Resultados de la búsqueda</h2>
      <Filtros />
      <div className="resultados__publicaciones">
        {/* Noticia 3 con evento onClick para navegar a la página de la noticia */}
        <div className="publicacion" onClick={handleClickNoticia3}>
          <img src={noticia} alt="Noticia 3" />
          <h3>Noticia 3</h3>
          <p>Descripción</p>
        </div>
        {/* Otras publicaciones */}
        <div className="publicacion">
          <img src={noticia} alt="Charla Postulación FUAS" />
          <h3>Charla Postulación FUAS</h3>
          <p>Descripción</p>
        </div>
        <div className="publicacion">
          <img src={noticia} alt="Fondos Concursables" />
          <h3>Fondos Concursables</h3>
          <p>Descripción</p>
        </div>
      </div>
    </div>
  );
};

export default ResultadosPage;
