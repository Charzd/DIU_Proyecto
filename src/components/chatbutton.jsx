import React, { useState } from 'react';
import { BsChatDots } from 'react-icons/bs'; 
import Chatbot from './chatbot'; 

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <button className="chat-button" onClick={toggleChat}>
        <BsChatDots size={24} color="#000" />
      </button>
      {isChatOpen && <Chatbot />}
    </div>
  );
};

export default ChatButton;