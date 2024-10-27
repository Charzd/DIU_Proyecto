import React from 'react';
import Rut from '../components/rut';
import '../stylesheets/tramites-page/tramites-page.scss';


const TramitesPage = () => {
    return (
        <div className="tramites">
          <h1 className="tramites__titulo">Portal Trámites USM</h1>
          <h2 className="tramites__subtitulo">RREE</h2>
          <Rut context='tramites'/>
        </div>
      );
};

export default TramitesPage;