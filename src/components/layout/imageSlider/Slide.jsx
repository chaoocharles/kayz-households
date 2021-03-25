import React from "react";

const Slide = ({ content }) => {
  const slideStyle = {
    height: "100%",
    width: "100%",
    backgroundImage: `url(${content})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  };
  return <div style={slideStyle}></div>;
};

export default Slide;
