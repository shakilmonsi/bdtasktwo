import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="flex items-center justify-between arrows ">
      <span
        className="cursor-pointer text-3xl text-gray-700 -mt-96 hover:text-gray-900"
        onClick={prevSlide}
      >
        &#10094;
      </span>
      <span
        className="cursor-pointer -mt-96 text-3xl text-gray-700 hover:text-gray-900"
        onClick={nextSlide}
      >
        &#10095;
      </span>
    </div>
  );
}

export default Arrows;