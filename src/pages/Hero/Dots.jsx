import React from "react";

function Dots({ activeIndex, onClick, sliderImage }) {
  return (
    <div className="flex items-center space-x-2 mt-4">
      {sliderImage?.map((slide, index) => (
        <span
          key={index}
          className={`h-3 w-3 rounded-full cursor-pointer  -mt-44 ms-[800px] ${
            activeIndex === index ? "bg-indigo-500" : "bg-gray-300"
          }`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  );
}



export default Dots;