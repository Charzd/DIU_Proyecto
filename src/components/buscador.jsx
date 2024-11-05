import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Asegúrate de estar usando react-router-dom para la navegación
import '../stylesheets/buscador/buscador.scss';

const Buscador = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleTextSearch = () => {
        if (query.trim()) {
            navigate(`/resultados?query=${encodeURIComponent(query)}`);
        }
    };

    const handleVoiceSearch = () => {
        if (!("webkitSpeechRecognition" in window)) {
            alert("Tu navegador no soporta la búsqueda por voz.");
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = "es-ES";
        recognition.start();

        recognition.onresult = (event) => {
            const voiceQuery = event.results[0][0].transcript;
            setQuery(voiceQuery);
            navigate(`/resultados?query=${encodeURIComponent(voiceQuery)}`);
        };

        recognition.onerror = (event) => {
            console.error("Error en la búsqueda por voz:", event.error);
        };
    };

    return (
        <div className="buscador">
            <input
                type="text"
                className="buscador__input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Escribe tu búsqueda..."
            />
            <button className="buscador__button" onClick={handleTextSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85Zm-5.442-9.344a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Z"/>
                </svg>
            </button>
            <button className="buscador__voice-button" onClick={handleVoiceSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
                    <path d="M8 10A2.5 2.5 0 0 0 10.5 8V5A2.5 2.5 0 1 0 5.5 5v3A2.5 2.5 0 0 0 8 10Z"/>
                    <path d="M8 13a5.5 5.5 0 0 0 5.5-5.5V5a5.5 5.5 0 1 1-11 0v2.5A5.5 5.5 0 0 0 8 13Z"/>
                </svg>
            </button>
        </div>
    );
};

export default Buscador;