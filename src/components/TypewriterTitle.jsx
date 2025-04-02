import React from "react";
import Typist from "react-typist";

const TypewriterTitle = ({ title }) => {
  return (
    <Typist avgTypingDelay={100} startDelay={500} cursor={{ show: true, blink: true }}>
      {title}
    </Typist>
  );
};

export default TypewriterTitle;
