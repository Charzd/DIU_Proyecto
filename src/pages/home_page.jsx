import React from 'react'
import NavBar from '../components/nav_bar'
import ChatButton from '../components/chatbutton'
import Buscador from '../components/buscador'



export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Buscador />
      <p> ¡Bienvenido a Relaciones Estudiantiles USM!</p>
      <ChatButton />
    </>
  )
}

export default HomePage
