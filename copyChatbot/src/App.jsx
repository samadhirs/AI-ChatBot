import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import ChatMessage from "./components/ChatMessage";
import { formatTime } from "../utils/chatutils";

function App()
  {
    const [darkMode, setDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([
      {
        id:1,
        text: "Hello! How can I assist you today?",
        sender: "bot",
        timestamp: new Date(),
      },
   ]);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    return (
    <div className="flex flex-col h-screen">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-5xl mx-auto space-y-4">
          <ChatMessage 
          darkMode={darkMode} 
          messages={messages}
          formatTime={formatTime}/>

          {isLoading && <LoadingIndicator darkMode={darkMode} />}

          <div>

          </div>
        </div>
        
      </div>
    </div>
    );
  }

  export default App;