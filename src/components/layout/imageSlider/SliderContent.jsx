import React from "react";
import Slide from "./Slide"

const SliderContent = ({ translate, transition, width, slideImages }) => {
  const sliderContentStyle = {
    transform: `translateX(-${translate})px`,
    transition: `transform ease-out ${transition}s`,
    height: `100%`,
    width: `${width}px`,
    display: `flex`,
  };
  return (
    <div style={sliderContentStyle}>
      {slideImages.map((slide, i) => (
        <Slide key={slide + i} content={slide} />
      ))}
    </div>
  );
};

export default SliderContent;
