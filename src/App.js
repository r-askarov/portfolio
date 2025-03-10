import React, { useState, useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import TabBar from './components/TabBar';
import TabContent from './components/TabContent';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center transition-colors duration-300">
      <TabBar onTabChange={setSelectedTab} selectedTab={selectedTab} />
      <button onClick={() => setDarkMode(!darkMode)} className="absolute top-5 right-5 bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-full shadow-md transition duration-300">
        {darkMode ? "☀️" : "🌙"}
      </button>
      <TabContent tabIndex={selectedTab} />
      <footer className="absolute bottom-3 right-5 flex items-center text-center font-semibold py-3 text-sm text-gray-700 dark:text-gray-300">
        <FaGithub className="text-xl mr-2" />
        <a href="https://github.com/r-askarov/portfolio" target="_blank" rel="noopener noreferrer" className="hover:underline">
          View Code
        </a>
      </footer>
    </div>
  );
}

export default App;
