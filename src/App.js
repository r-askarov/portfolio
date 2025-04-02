import React, { createContext, useContext, useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import TabBar from "./components/TabBar";
import TabContent from "./components/TabContent";
import ParticlesComponent from "./components/ParticlesComponent";

const DarkModeContext = createContext();
export const useDarkMode = () => useContext(DarkModeContext);

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode }}>
      <div className="relative min-h-screen flex flex-col items-center transition-colors duration-300">
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 -z-20">
          <ParticlesComponent />
        </div>

        <TabBar onTabChange={setSelectedTab} selectedTab={selectedTab} />

        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          className="hidden md:block absolute top-5 right-3 md:top-5 md:right-5 bg-gray-600 text-gray-900 dark:text-white p-1 md:px-3 md:py-2 rounded-full shadow-md transition duration-300"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <TabContent tabIndex={selectedTab} />

        <footer className="md:absolute bottom-3 right-5 flex items-center text-center font-semibold py-3 text-sm text-gray-700 dark:text-gray-300">
          <FaGithub className="text-xl mr-2" />
          <a
            href="https://github.com/r-askarov/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View Code
          </a>
        </footer>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
