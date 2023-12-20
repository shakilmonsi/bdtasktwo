

import React, { useEffect, useState } from "react";
import "./hero.css"
import sliderImage from "./sliderImage";
import Arrows from "./Arrows";
import SliderContent from "./SliderContent";
import Dots from "./Dots";


const len = sliderImage.length - 1;

function Heros(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
<section className="rounded-lg overflow-hidden bg-white shadow-md p-6" >
<div className="ps-14 pe-14">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
</section>
  );
}

export default Heros;