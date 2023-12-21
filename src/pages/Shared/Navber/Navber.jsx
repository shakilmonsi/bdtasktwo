import React from "react";

import "./navber.css"
import arobinCard from "../../../assets/arobinCard.png";
import locationlogo from "../../../assets/Location (1).svg";
import car from "../../../assets/car.png";
import delivery from "../../../assets/delivery.png";
import mark from "../../../assets/mark.svg";
import net from "../../../assets/net.svg";
import moon from "../../../assets/moon.svg";


// two setup navber ok 
import menu from "../../../assets/navberlogo/menu.svg";
import Layer from "../../../assets/navberlogo/layer.png";
import notification from "../../../assets/navberlogo/notification.png";
import Group from "../../../assets/navberlogo/Group 38.svg";


import scren from "../../../assets/navberlogo/inputlogo/scren.png";
import arrow from "../../../assets/navberlogo/inputlogo/arrow down fill (2).svg";
import screning from "../../../assets/navberlogo/inputlogo/search.svg";
import category from "../../../assets/navberlogo/inputlogo/category.svg";
import filter from "../../../assets/navberlogo/inputlogo/filter.png";
import { Link } from "react-router-dom";






const Navber = () => {
  return (
    <div>

      <div className="flex items-center navber__body  py-1 justify-around ">
        <div className="flex items-center gap-2">
          <div className="flex items-centergap-1 ">
            <img className=" w-6 h-6 " src={locationlogo} alt=""></img>
            <p className="text-sm">DeliverTo</p>
          </div>

          <div className="flex items-center ">
            <img className="w-6 h-6 " src={arobinCard} alt=""></img>
            <select className="bg-slate-100	">
                <option className='text-sm' disabled selected>  Saudi Arabia</option>
                      <option>Saudi Arabia</option>       
                </select>
          </div>

          <div className="flex items-center">
            <img className="w-6 h-6" src={car} alt=""></img>
            <select className="bg-slate-100	">
                <option className='text-sm' disabled selected> Track order</option>
                      <option>SAR</option>       
                </select>
          </div>

        </div>
        <div>
          <div className="flex items-center gap-1 ">
            <img className=" w-6 h-6 " src={delivery} alt=""></img>
            <p className="text-sm">
              Free delivery from 50 SAR and free returns within 60 days
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">

          <div className="flex items-center gap-1 ">
            <img className=" w-6 h-6 " src={mark} alt=""></img>
            <select className="bg-slate-100	">
                <option className='text-sm' disabled selected>EN</option>
                      <option>Top deals</option>       
                </select>
          </div>

          <div className="">
            
          <select className="bg-slate-100	">
                <option className='text-sm' disabled selected>SAR</option>
                      <option>SAR</option>       
                </select>
          </div>

          <div className="flex items-center gap-1 ">
            <img className=" w-6 h-6 " src={net} alt=""></img>
            <select className="bg-slate-100	">
                <option className='text-sm' disabled selected>EN</option>
                      <option>EN </option>       
                </select>
          </div>

          <div className="flex items-center rounded-full border-2 border-solid border-gray-300 bg-white px-2">
            <div className="rounded-full bg-bg-color">
            <img className=" w-6 h-6 " src={moon} alt=""></img>
            </div>
          
            <span className="text-sm">Dark </span>
          </div>
        </div>
      </div>
      {/* // Navber  to  */}


<div className="flex items-center justify-between  pb-7 pt-3  mt-2 navber__two_style ">

<div className="flex items-center gap-3 ps-32 ">
  <img className="h-2 w-[18.70px]" src={menu} alt=""></img>
  <img  className="w-[76px]	 h-8	" src={Layer} alt=""></img>
</div>


<div>
<form className="from_tag_style" style={{width:"1113px",}}>
  
  <div className="relative bg-[#FFFF]">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
    
<div className="rounded-full border p-1 border-1 border-solid border-var(--Border-v2, rgba(176, 176, 176, 0.15)) bg-var(--bg, #F1F1F1)">
<img  className="w-[14px] h-[14px]   " src={category} alt="logo"></img>

</div>

      {/* <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg> */}
   
   
    </div>
    <input
      type="search"
      id="search"
      className="block w-full p-4 ps-96 text-sm rounded-md border-1.5 border-solid border-var(--Border, #B0B0B0"
      placeholder="Search"
      required=""
    />
{/* //screning  */}

<div  className="text-white absolute  -mt-9  flex justify-center  ms-[360px]" >
<img  className="w-5 h-5   " src={screning} alt="logo"></img>

    </div>


<div  className="text-white absolute  -mt-10 end-10" >
   <div className="rounded-full border p-1 border-1 border-solid border-var(--Border-v2, rgba(176, 176, 176, 0.15)) bg-var(--bg, #F1F1F1)">
<img  className="w-4 h-4   " src={scren} alt="logo"></img>
</div>
    </div>



    <div 
      className="text-white absolute end-2.5   -mt-10 "
    >
   <div className="rounded-full border p-1 border-1 border-solid border-var(--Border-v2, rgba(176, 176, 176, 0.15)) bg-var(--bg, #F1F1F1)">
<img  className="w-4 h-4   " src={filter} alt="logo"></img>
</div>
    </div>

    

  </div>
</form>

</div>





<div className="flex items-center gap-8 pe-20">
<div className="flex items-center gap-1">
<img src={notification} alt=""></img>
<Link className="text-14 font-inter font-normal text-gray-700">sel</Link>
<img  className="w-2 h-2   " src={arrow} alt="logo"></img>
</div>
 
<div className="flex  gap-1 items-center">
<div className="accout__style">
<img  className="w-4 h-4   " src={Group} alt="logo"></img>
</div>

<p className="text-14 font-inter font-normal text-gray-700">accout</p>
<img  className="w-2 h-2   " src={arrow} alt="logo"></img>

</div>

</div>


</div>


    </div>
  );
};

export default Navber;
