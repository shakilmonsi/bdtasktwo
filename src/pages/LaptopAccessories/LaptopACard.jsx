import React from 'react';


 const LaptopACard = (props) => {
    const { title, description, image, alt,delPirce,price } = props;
    return (
       


   

      <div className=" card rounded-md bg-white shadow-md overflow-hidden  mx-1	my-4	" 
      style={{width:"200px"}}>
<div className="bg-white h-[160px]">
<div className='-mt-4 -ms-2' >
<img src={image} alt={alt}className=" ms-8 mt-2 p-4" />
</div>
</div>
<div className="card-body bg-blue-100 h-[75px]">
<div className='text-center '>
 <p className='text-base text-gray-800 -mt-4 text-center'>{title}</p>

</div>

</div>
</div>





    );
 };
 




export default LaptopACard;