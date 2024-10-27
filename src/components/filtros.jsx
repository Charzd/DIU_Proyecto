import React from 'react';
import '../stylesheets/filtros/filtros.scss';


const Filtros = () => {
  return (
    <div className="filtros">
      <h3>Filtrar por:</h3>
      <ul>
        <li>
          <input type="checkbox" id="becas" />
          <label htmlFor="becas">Becas y Financiamiento</label>
        </li>
        <li>
          <input type="checkbox" id="intercambios" />
          <label htmlFor="intercambios">Intercambios y Noticias Internacionales</label>
        </li>
        <li>
          <input type="checkbox" id="apoyo" />
          <label htmlFor="apoyo">Apoyo y Orientación Estudiantil</label>
        </li>
        <li>
          <input type="checkbox" id="talleres" />
          <label htmlFor="talleres">Talleres y Charlas Informativas</label>
        </li>
        <li>
          <input type="checkbox" id="desarrollo" />
          <label htmlFor="desarrollo">Desarrollo Profesional Global</label>
        </li>
      </ul>
    </div>
  );
};

export default Filtros;