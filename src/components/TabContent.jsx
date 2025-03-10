import React from "react";
import { motion } from "framer-motion";

import HomeTab from "./Home";
import Search from "./Search.jsx";
import Notifications from "./Notifications";
import Profile from "./Profile";

const TabContent = ({ tabIndex }) => {
  const tabComponents = [HomeTab, Search, Notifications, Profile];
  const SelectedTabComponent = tabComponents[tabIndex];

  return (
    <motion.div
      key={tabIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="mt-8 w-[70%] h-[75vh] bg-white dark:bg-gray-800 shadow-lg rounded-3xl flex flex-col transition-all duration-300 overflow-y-auto py-2 items-center justify-center"
    >
      <SelectedTabComponent />
    </motion.div>
    
  );
};

export default TabContent;
