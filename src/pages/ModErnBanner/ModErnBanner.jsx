import React from "react";

import banner1 from "../../assets/bannerthre/banner1.png";
import banner2 from "../../assets/bannerthre/banner2.png";
import banner3 from "../../assets/bannerthre/banner3.png";


const ModErnBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-5	 gap-x-5 py-2">
          <img className=" rounded-md	" src={banner2} alt="banner2"></img>
      <img className="rounded-md	" src={banner3} alt="banner1"></img>
    
      <img className="rounded-md" src={banner1} alt="banner2"></img>
    </div>
  );
};

export default ModErnBanner;