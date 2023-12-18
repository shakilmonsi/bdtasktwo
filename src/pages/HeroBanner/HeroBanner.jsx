import React, { useState, useEffect } from "react";
import SliderContent from "./SliderContent";

import sliderImage from "./sliderImage";

import Arrows from "./Arrows";
import Dots from "./Dots";
const HeroBanner = () => {
  const len = sliderImage.length - 1;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, len]);

  return (
    <section className="relative">
      <div className="overflow-hidden">
        <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
        <Arrows
          prevSlide={() =>
            setActiveIndex((prevIndex) => (prevIndex < 1 ? len : prevIndex - 1))
          }
          nextSlide={() =>
            setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1))
          }
        />

        <Dots
          activeIndex={activeIndex}
          sliderImage={sliderImage}
          onClick={(index) => setActiveIndex(index)}
        />
      </div>
    </section>
  );
};

export default HeroBanner;
