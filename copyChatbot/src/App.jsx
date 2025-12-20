import React from "react";
import { useState } from "react";
import Header from "./components/Header";

function App()
  {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    return (
    <div className="flex flex-col h-screen">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      
    </div>
    );
  }

  export default App;