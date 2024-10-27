import React, { useState } from "react";
import '../stylesheets/chatbot/chatbot.scss';

const Chatbot = () => {
    const [message, setMessage] = useState(''); // Estado para el mensaje actual
    const [messages, setMessages] = useState([]); // Estado para la lista de mensajes

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            // Agrega el mensaje a la lista de mensajes
            setMessages([...messages, message]);
            setMessage(''); // Limpia el campo de entrada
        }
    };

    return (
        <div className="chatbot">
            <div className="chatbot__header">Chatbot</div>
            <div className="chatbot__body">
                {/* Renderiza la lista de mensajes */}
                {messages.map((msg, index) => (
                    <div key={index} className="chatbot__message">
                        {msg}
                    </div>
                ))}
            </div>
            <div className="chatbot__input-container">
                <input
                    type="text"
                    className="chatbot__input"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Escribe un mensaje..."
                />
                <button className="chatbot__send-button" onClick={handleSendMessage}>
                    ➔
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
