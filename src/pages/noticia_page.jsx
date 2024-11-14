import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/noticia-page/noticia-page.scss';
import noticia from '../assets/noticia.png';

const NoticiaPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="noticia">
      <div className="noticia__contenido-enmarcado">
        <h1 className="noticia__titulo">Título de Noticia 3</h1>
        <img src={noticia} alt="Noticia 3" className="noticia__imagen" />
        <p className="noticia__contenido">
          Descripción Noticia 3
        </p>
      </div>
      <button onClick={handleBackClick} className="noticia__volver">
        Volver a Resultados
      </button>
    </div>
  );
};

export default NoticiaPage;
