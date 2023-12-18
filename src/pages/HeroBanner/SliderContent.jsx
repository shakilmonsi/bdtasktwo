import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="slider" >  
   
         {sliderImage.map((slide, index) => ( <div  key={index} className={index === activeIndex ? "slide active" : "inactive"} >
      
      
    
    <div className="">
<div className="">
<div className="">
<p  className="" > {slide.title}</p>
<h2 className="">{slide.description}</h2>
<p className="price" >Exclusive Offer <span >-35%</span> .off this week</p>
<button className=""><span>
shop new</span></button>
   
</div>
</div>
<div className="">    <img src={slide.urls} alt="" /></div>
    </div>
        </div>
      ))}
    </section>
  );
}
export default SliderContent;