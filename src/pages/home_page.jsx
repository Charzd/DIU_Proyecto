import React from 'react';
import NavBar from '../components/nav_bar';
import ChatButton from '../components/chatbutton';
import Buscador from '../components/buscador';

import '../stylesheets/home-page/home-page.scss';

export const HomePage = () => {
  return (
    <div className="home">
      <NavBar />
      <Buscador />
      <p className="home__contenido">¡Bienvenido a Relaciones Estudiantiles USM!</p>
      <ChatButton />
    </div>
  );
};

export default HomePage;
