import React from 'react'

function ChatInput({ darkMode, input, setinput, loading }) {
  return (
    <div className={`${
        darkMode 
        ? "bg-gray-800 border-t border-gray-700"
        : "bg-white border-t border-gray-200"
    } p-4`}>

    <div className="max-w-5xl mx-auto">
        <div className="flex items-center space-x-3">
            <input type="text" 
            placeholder="Type Your Nessage"
             />

        </div>
    </div>
    </div>
  );
}

export default ChatInput