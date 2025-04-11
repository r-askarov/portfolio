import { React, useEffect, useRef }  from "react";

const TabBar = ({ onTabChange, selectedTab }) => {
  const tabRefs = useRef([]);

  const tabs = [
    { id: 0, icon: "fas fa-user", label: "Profile" },
    { id: 1, icon: "fas fa-file-alt", label: "Resume" },
    { id: 2, icon: "fas fa-code", label: "Projects" },
    { id: 3, icon: "fas fa-info-circle", label: "Info" }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        onTabChange((selectedTab + 1) % tabs.length);
      } else if (e.key === "ArrowLeft") {
        onTabChange((selectedTab - 1 + tabs.length) % tabs.length);
      } 
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedTab, onTabChange, tabs.length]);
  
  return (
    <div className="w-[70%] md:w-[40%] rounded-3xl mt-8 bg-pink-800 dark:bg-blue-950 p-4 flex justify-around items-center shadow-2xl transition-colors duration-300">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          ref={(el) => (tabRefs.current[index] = el)}
          onClick={() => onTabChange(tab.id)}
          aria-label={tab.label}
          className={`flex flex-col items-center transition duration-300 ease-in-out hover:scale-95 text-white ${
            selectedTab === tab.id ? "text-blue-400" : "text-white"
          }`}
        >
          <i
            className={`${
              tab.id === selectedTab
                ? "scale-125"
                : "scale-80 opacity-50"
            } ${tab.icon} text-xl transform transition duration-300 ease-in-out`}
          ></i>
        </button>
      ))}
    </div>
  );
};

export default TabBar;
