import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import TramitesPage from '../pages/tramites'
import ResultadosPage from '../pages/resultados'


const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title'>Dirección de Relaciones Estudiantiles</h1>
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/tramites' element={<TramitesPage />} />
            <Route path="/resultados" element={<ResultadosPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
