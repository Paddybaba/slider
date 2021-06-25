import React from "react";

const Slide = ({ content }) => {
  const css = {
    height: `100%`,
    width: `100%`,
    backgroundImage: `url(${content})`,
    backgroundSize: `cover`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return <div style={css}></div>;
};

export default Slide;
