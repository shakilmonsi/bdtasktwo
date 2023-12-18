import React from "react";

import banner1 from "../../assets/bannerthre/banner1.png";
import banner2 from "../../assets/bannerthre/banner2.png";
import banner3 from "../../assets/bannerthre/banner3.png";


const ModErnBanner = () => {

const bannerThre =[
  {
    id:1,
    bannerImg : banner2
  },
  {
    id:2,
    bannerImg : banner3
  },
  {
    id:3,
    bannerImg : banner1
  },
]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-3	 gap-x-4 py-2 px-10">
{
  bannerThre.map(bannerOne=><did key={bannerOne.id}>
      <img className=" rounded-md	 h-[308px] w-[616px]" src={bannerOne.bannerImg} alt="banner2"></img>
 
  </did> )
}

        
    </div>
  );
};

export default ModErnBanner;