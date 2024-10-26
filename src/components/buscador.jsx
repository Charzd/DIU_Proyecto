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
                    <path d="M8 12a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3Z"/>
                    <path d="M5 10a5 5 0 0 0 6 0v2a4 4 0 1 1-8 0v-2a5 5 0 0 0 2 0Z"/>
                </svg>
            </button>
        </div>
    );
};

export default Buscador;