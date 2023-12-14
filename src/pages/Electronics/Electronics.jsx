import React from 'react';
import elec1 from  "../../assets/electronice/elec1.png"
import promoter from  "../../assets/promotorImg/logo/promoter.png"


const Electronics=()=> {
    return (
<section className='p-10'>
  
<div className=" card rounded-md bg-white shadow-md overflow-hidden	" style={{height:"260px",width:"221px"}}>
  <div className="bg-white 	">
 <div className='bg-red m-3' >
 <img src={elec1} alt="Shoes" className=" ms-8 mt-2 p-4" />
 </div>

      <div className='absolute -mt-44 ms-6 bg-green-50  rounded-full'>
        <img  style={{color:"green"}} className=' p-2  
 ' src={promoter} alt='promoterlogo'></img>
      </div>
      <div className='absolute -mt-44 ms-32 rounded-md bg-opacity-60 bg-pink-200 transform rotate-45 '>
 <p className='text-red-500	px-8 py-1 text-xs text-center'>BestSeller</p>
      </div>

  </div>
  <div className="card-body bg-blue-100 ">
  <div className='text-center -mt-4'>
     <p className='text-base text-gray-800	'>Sony Playstation 5</p>
     <div className='flex items-center  gap-6'>
      <p className='-ms-3 text-gray-900 text-base'>SAR31821.00</p> 
      <del className='text-orange-500'>5693.00 </del>
     </div>
  </div>
  
  </div>
</div>

</section>
   
    );
}

export default Electronics;