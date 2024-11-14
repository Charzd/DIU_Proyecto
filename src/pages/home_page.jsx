import React from 'react';
import NavBar from '../components/nav_bar';
import ChatButton from '../components/chatbutton';
import Buscador from '../components/buscador';
import { useNavigate } from 'react-router-dom';

import '../stylesheets/home-page/home-page.scss';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="home">
      <p className="home__contenido">¡Bienvenido a Relaciones Estudiantiles USM!</p>
      
      <div className="home__cards">
        <div className="home__card" onClick={() => handleCardClick('/tramites')}>
          <h3>Trámites</h3>
          <p>Consulta y gestiona tus trámites universitarios aquí.</p>
        </div>
        
        <div className="home__card" onClick={() => handleCardClick('/becas')}>
          <h3>Becas</h3>
          <p>Revisa el estado de tus becas y postulaciones.</p>
        </div>
      </div>

      <ChatButton />
    </div>
  );
};

export default HomePage;