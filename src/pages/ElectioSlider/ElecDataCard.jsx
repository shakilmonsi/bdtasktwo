import React from "react";

import promoter from  "../../assets/promotorImg/logo/promoter.png"

 const ElecDataCard = (props) => {
    const { title, description, image, alt,delPirce,price } = props;
    return (
       


   

      <div className=" card rounded-md bg-white shadow-md overflow-hidden	gap-row-20  sm:ms-8" style={{width:"210px"}}>
      <div className="bg-white h-[160px]">
     <div className='' >
     <img src={image} alt={alt}className=" ms-8 mt-2 p-4" />
     </div>
    
          <div className='absolute -mt-[160px] ms-3 bg-green-50  rounded-full'>
            <img  style={{color:"green"}} className=' p-2  
     ' src={promoter} alt='promoterlogo'></img>
          </div>
          <div className='absolute -mt-[160px] ms-32 rounded-md bg-opacity-60 bg-pink-200 transform rotate-45 '>
     <p className='text-red-500	px-8 py-1 text-xs text-center'>{description}</p>
          </div>
    
      </div>
      <div className="card-body bg-blue-100 h-[76px]">
      <div className='text-center text-center -mt-7'>
         <span className='style__name'>{title}</span>
         <div className='flex items-center  -ms-5 gap-8 mt-2'>
          <p className=' price_style'>{price}</p> 
          <del className='text-orange-500  pe-6'>{delPirce} </del>
         </div>
      </div>
      
      </div>
    </div>



    );
 };
 


export default ElecDataCard;