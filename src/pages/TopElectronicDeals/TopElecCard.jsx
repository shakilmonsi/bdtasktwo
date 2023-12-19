import React from "react";

import promoter from  "../../assets/promotorImg/logo/promoter.png"

 const TopElecCard = ({elec}) => {
    const { name, description, img, alt,delPirce,price } = elec;
    return (
       


   

          <div className=" card rounded-md bg-white shadow-md overflow-hidden	gap-row-20  sm:ms-8" style={{height:"260px",width:"221px"}}>
  <div className="bg-white 	">
 <div className='bg-red m-3' >
 <img src={img} alt={alt}className=" ms-8 mt-2 p-4" />
 </div>

      <div className='absolute -mt-44 ms-6 bg-green-50  rounded-full'>
        <img  style={{color:"green"}} className=' p-2  
 ' src={promoter} alt='promoterlogo'></img>
      </div>
      <div className='absolute -mt-44 ms-32 rounded-md bg-opacity-60 bg-pink-200 transform rotate-45 '>
 <p className='text-red-500	px-8 py-1 text-xs text-center'>{description}</p>
      </div>

  </div>
  <div className="card-body bg-blue-100 p-4">
  <div className='text-center -mt-4'>
     <p className='text-base text-gray-800 '>{name}</p>
     <div className='flex items-center  gap-4 px-2'>
      <p className='-ms-3 text-gray-900 text-base'>{price}</p> 
      <del className='text-orange-500'>{delPirce} </del>
     </div>
  </div>
  
  </div>
</div>




    );
 };
 

export default TopElecCard;