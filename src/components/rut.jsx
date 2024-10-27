import React, { useState } from 'react';
import Ventana from './ventana';
import '../stylesheets/rut/rut.scss';

const Rut = ({ context }) => {
    const [rut, setRut] = useState('');
    const [showVentana, setShowVentana] = useState(false);

    const handleInputChange = (event) => {
        setRut(event.target.value);
    };

    const handleSearchClick = () => {
        setShowVentana(true);
    };

    return (
        <div className="rut">
            <input 
                type="text" 
                placeholder="Ingrese RUT (Ej: 12345678-9)" 
                value={rut} 
                onChange={handleInputChange} 
                className="rut__input"
            />
            <button onClick={handleSearchClick} className="rut__button">
                ➔
            </button>
            {showVentana && <Ventana context={context} />}
        </div>
    );
};

export default Rut;