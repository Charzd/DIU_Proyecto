import React from 'react';
import Rut from '../components/rut';
import '../stylesheets/becas-page/becas-page.scss';


const BecasPage = () => {
    return (
        <div className="tramites">
          <h1 className="tramites__titulo">Portal Becas USM</h1>
          <h2 className="tramites__subtitulo">RREE</h2>
          <Rut context='becas'/>
        </div>
      );
};

export default BecasPage;