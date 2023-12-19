import React from 'react';


 const DelasMigCard = (props) => {
    const { title, description, image, alt,delPirce,price } = props;
    return (
       


   

          <div className=" card rounded-md bg-white shadow-md overflow-hidden w-48		" style={{height:"260px",width:"221px"}}>
  <div className="bg-white h-60">
 <div className='bg-red m-3' >
 <img src={image} alt={alt}className=" ms-8 mt-2 p-4" />
 </div>
  </div>
  <div className="card-body bg-blue-100 h-14">
  <div className='text-center '>
     <p className='text-base text-gray-800 -mt-4 text-center'>{title}</p>
 
  </div>
  
  </div>
</div>




    );
 };
 

export default DelasMigCard;