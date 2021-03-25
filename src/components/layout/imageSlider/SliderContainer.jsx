import React, { useState } from "react";
import "./Slider.css";
import SliderContent from "./SliderContent";
import Slide from "./Slide";

import pot from "../../../assets/images/products/pot-and-pans-set-0.jpg";

const slideImages = [pot, pot, pot];

const SliderContainer = () => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition } = state;

  return (
    <div className="slider">
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slideImages.length}
        slideImages={slideImages}
      />
    </div>
  );
};

export default SliderContainer;
