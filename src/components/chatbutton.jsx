import React, { useState, useRef, useEffect } from 'react';
import { BsChatDots } from 'react-icons/bs'; 
import Chatbot from './chatbot'; 

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatbotRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Función para manejar clics fuera del chatbot
  const handleClickOutside = (event) => {
    if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
      setIsChatOpen(false);
    }
  };

  useEffect(() => {
    // Agregar event listener al montar el componente
    document.addEventListener('mousedown', handleClickOutside);
    
    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button className="chat-button" onClick={toggleChat}>
        <BsChatDots size={24} color="#fff" />
      </button>
      {isChatOpen && (
        <div ref={chatbotRef}>
          <Chatbot />
        </div>
      )}
    </div>
  );
};

export default ChatButton;