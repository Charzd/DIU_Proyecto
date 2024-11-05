import React from 'react';
import '../stylesheets/noticia-page/noticia-page.scss';
import noticia from '../assets/noticia.png';

const NoticiaPage = () => {
  return (
    <div className="noticia">
      <h1 className="noticia__titulo">Título de Noticia 3</h1>
      <img src={noticia} alt="Noticia 3" className="noticia__imagen" />
      <p className="noticia__contenido">
        Descripción Noticia 3
      </p>
    </div>
  );
};

export default NoticiaPage;
