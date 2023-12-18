import React from "react";
import footerlgor from "../../../assets/footerlogo/footerr.png";
// onsite section logo 
import car from "../../../assets/footerlogo/car.png"
import mastercard from "../../../assets/footerlogo/mastercard.png";
import naps from "../../../assets/footerlogo/naps.png"
import paypal from "../../../assets/footerlogo/paypal.png"
import pay from "../../../assets/footerlogo/Group.svg"
import visa from "../../../assets/footerlogo/visa.png";
//  secendSite logo import 
import up from "../../../assets/footerlogo/up.svg"
import ent from "../../../assets/footerlogo/ent.svg"
import arb from "../../../assets/footerlogo/arb.png"
import Location from "../../../assets/footerlogo/Location.svg"

const Footer = () => {
  return (
    <footer className="flex w-full h-12 p-2 md:p-10  items-center gap-32 flex-shrink-0 border border-solid border-white-U bg-white shadow-lg">
     
        <div className=" flex items-center gap-32 ">

           {/* frist site setup  */}

          <div className="flex  items-center gap-5">

            <div className="flex  items-center gap-5">

          <div className="flex  items-center gap-3">
          <div>
              <p className="text-gray-700 font-inter text-base font-normal leading-normal">© 2022 cart24.com </p>
            </div>

            <div className="flex items-center">
              <img className="h-3 w-3" src={footerlgor} alt=""></img>
              <p className="text-gray-700 font-inter text-base font-normal leading-normal">All Rights Reserved. </p>
            </div>
          </div>

          <div className="flex  items-center gap-3">

          <div className="flex">
              <p className="text-gray-700 font-inter text-base font-normal leading-normal">Terms & Condition</p>
            </div>

            <div className="flex">
              <p className="text-gray-700 font-inter text-base font-normal leading-normal">Privacy Policy</p>
            </div>
            </div>


          </div>

          
            
{/* // setup to  */}
            <div className="flex  items-center gap-2">
              <div>
                <img className="h-6 w-6" src={visa} alt="logo"></img>
              </div>

              <div className="flex">           
                <img className="h-6 w-8" src={mastercard} alt="logo"></img>              
              </div>

              <div className="rounded-2 border border-solid ">           
              <div className="flex p-1  items-start   border-opacity-70 border-gray-700">
              <img className="h-6 w-8 " src={pay} alt="logo"></img>
                <p>Pay</p>
              </div>
              </div>

              <div className="rounded-2 border border-solid ">           
              <div className="flex justify-center   p-1  items-center   border-opacity-70 border-gray-700">
              <img className=" mt-2" src={naps} alt="logo"></img>
              </div>
              </div>

              <div className="rounded-2 border border-solid ">           
              <div className="flex justify-center   p-1  items-center   border-opacity-70 border-gray-700">
              <img className=" mt-2 w-14	 h-5" src={paypal} alt="logo"></img>
              </div>
              </div>

                 
              <div className="flex  items-center gap-2  ">
              <img className="  w-7	 h-7" src={car} alt="logo"></img>
              <p className="text-gray-700 font-inter text-base font-normal">Fast Express Delivery</p>
              </div>
           

            </div>

          </div>

{/* secoend section setup            */}


<div className="flex gap-3">

<div className="flex gap-3">
  <p className="text-black font-inter text-base font-normal">More details</p>
  <img className="h-2 w-2" src={up} alt="up"></img>
</div>

<div className="flex gap-5">
  <p className="text-black font-inter text-base font-normal">SAR</p>
  <img className="h-2 w-2" src={up} alt="up"></img>
</div>
<div class="bg-gray-300 w-1 h-5"></div>

<div className="flex gap-1">
<img className="" src={ent} alt="up"></img>
  <p className="text-black font-inter text-base font-normal">SAR</p>
  <img className="h-2 w-2" src={up} alt="up"></img>
</div>

<div className="flex gap-1">
<img className="" src={Location} alt="up"></img>
  <p className="text-black font-inter text-base font-normal">Deliver to</p>
</div>

<div className="flex gap-1">
<img className="" src={arb} alt="up"></img>
  <p className="text-black font-inter text-base font-normal">SaudiArabia</p>
  <img className="h-2 w-2" src={up} alt="up"></img>
</div>

</div>

        </div>
      
    </footer>
  );
};

export default Footer;
