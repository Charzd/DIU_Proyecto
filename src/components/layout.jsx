import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from '../pages/home_page';
import TramitesPage from '../pages/tramites_page';
import ResultadosPage from '../pages/resultados';
import BecasPage from '../pages/becas_page';
import NoticiaPage from '../pages/noticia_page'; // Importa la nueva página de noticia

import usmLogo from '../assets/usm_rree.png';

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <header className="layout__header">
          <Link to="/" className="layout__logo">
            <img src={usmLogo} alt="Dirección de Relaciones Estudiantiles" />
          </Link>
          <h1 className="layout__title">Dirección de Relaciones Estudiantiles</h1>
        </header>
        <main className="layout__page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tramites" element={<TramitesPage />} />
            <Route path="/resultados" element={<ResultadosPage />} />
            <Route path="/becas" element={<BecasPage />} />
            <Route path="/noticia-3" element={<NoticiaPage />} /> {/* Ruta para Noticia 3 */}
          </Routes>
        </main>
        <footer className="layout__footer"></footer>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
