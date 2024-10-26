import React from 'react'
import NavBar from '../components/nav_bar'
import Chatbot from '../components/chatbot'
import Buscador from '../components/buscador'


export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Buscador />
      <p> ¡Bienvenido a Relaciones Estudiantiles USM!</p>
      <Chatbot /> 
    </>
  )
}

export default HomePage
