import React from "react";
import arobinCard from "../../../assets/arobinCard.png";
import locationlogo from "../../../assets/Location (1).svg";
import car from "../../../assets/car.png";
import delivery from "../../../assets/delivery.png";
import mark from "../../../assets/mark.svg";
import net from "../../../assets/net.svg";
import moon from "../../../assets/moon.svg";

const Navber = () => {
  return (
    <div>

      <div className="flex items-center  justify-around ">
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


<div>
{/* 
<div className="navbar border border-white-U bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>

  <form>
  <label
    htmlFor="search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
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
      </svg>
    </div>
    <input
      type="search"
      id="search"
      className="block w-100 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search"
      required=""
    />
   
  </div>
</form>

  




  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div> */}




</div>


    </div>
  );
};

export default Navber;
