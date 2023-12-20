import React from "react";


function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section  >  
 
         {sliderImage.map((slide, index) => ( <div  key={index} className={index === activeIndex ? "slides active" : "inactive"} >
      
      


<div className="flex items-center	pe-44">  




  <img style={{paddingLeft:"80px", margin:60}} src={slide.urls} alt="" />
  <img style={{paddingLeft:"80px", margin:60}} src={slide.last} alt="" />
  <img style={{paddingLeft:"80px", margin:60}} src={slide.Layer} alt="" />
  <img style={{paddingLeft:"80px", margin:60}} src={slide.frist2} alt="" />
  
  </div>
  
        </div>
      ))}
    </section>
  );
}

export default SliderContent;