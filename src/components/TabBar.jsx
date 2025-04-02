import React from "react";

const TabBar = ({ onTabChange, selectedTab }) => {
  const tabs = [
    { id: 0, icon: "fas fa-user", label: "Profile" },
    { id: 1, icon: "fas fa-file-alt", label: "Resume" },
    { id: 2, icon: "fas fa-info-circle", label: "Info" },
  ];
  
  return (
    <div className="w-[70%] md:w-[40%] rounded-3xl mt-8 bg-pink-800 dark:bg-blue-950 p-4 flex justify-around items-center shadow-2xl transition-colors duration-300">
      {tabs.map((tab) => (
        <button
          key={tab.id}
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
