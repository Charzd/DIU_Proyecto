import React from 'react';
import '../stylesheets/ventana/ventana.scss';

const Ventana = ({ context }) => {
  return (
    <div className='ventana'>
      {context === 'tramites' ? (
        <p>Estado de trámites del usuario...</p>
      ) : (
        <p>Estado de becas del usuario...</p>
      )}
    </div>
  );
};

export default Ventana;