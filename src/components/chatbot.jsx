import React from "react";
import '../stylesheets/chatbot/chatbot.scss';;

const Chatbot = () => {
    return (
        <div className="chatbot">
            <div className="chatbot__header">Chatbot</div>
            <div className="chatbot__body">
                {/* Aquí puedes agregar mensajes o contenido */}
            </div>
            <input
                type="text"
                className="chatbot__input"
                placeholder="Escribe un mensaje..."
            />
        </div>
    );
};

export default Chatbot;