import React from "react";
import { motion } from "framer-motion";

import Resume from "./Resume";
import Info from "./Info";
import Profile from "./Profile";

const TabContent = ({ tabIndex }) => {
  const tabComponents = [Profile, Resume, Info];
  const SelectedTabComponent = tabComponents[tabIndex];

  return (
    <motion.div
      key={tabIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mt-8 w-[90%] md:w-[70%] h-[75vh] bg-white dark:bg-gray-800 shadow-lg rounded-3xl flex flex-col md:transition-all md:duration-300 overflow-y-auto py-2 items-center justify-center"
    >
      <SelectedTabComponent />
    </motion.div>
    
  );
};

export default TabContent;
