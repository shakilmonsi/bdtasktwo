import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { } from 'swiper';
import 'swiper/css/pagination';
import  {  Navigation , Pagination, Autoplay } from 'swiper/modules';
import './slider.css';

import fire from '../../assets/electronice/firelogo/fire.png';

import arrowdown from '../../assets/electronice/uptodown/up.svg';
import arrowup from '../../assets/electronice/uptodown/down.svg';

import img1 from '../../assets/electronice/elec1.png';
import img2 from '../../assets/electronice/elec2.png';
import img3 from '../../assets/electronice/elec4 (2).png';
import img4 from '../../assets/electronice/elec4.png';
import img5 from '../../assets/electronice/image 59 (1).png';
import img6 from '../../assets/electronice/elec4 (2).png';




import ElecDataCard from './ElecDataCard';
import { Link } from 'react-router-dom';

const Products = [
    {
       id: 1,
       name: 'Sony WNC Headset',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'bestSeller.',
       img: img1,
    },
    {
       id: 2,
       name: 'Joyroom TWS Bluetooth',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'bestSeller.',
       img: img2,
    },
    {
       id: 2,
       name: 'Sony Playstation 5',
       description:
          'bestSeller.',
          price: 'SAR31821.00',
          delPirce: 'SAR31821.00',
       img: img3,
    },
    {
       id: 2,
       name: 'Electric Tea Kettle',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'bestSeller.',
       img: img4,
    },

    {
       id: 2,
       name: 'Apple Watch Series 8',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'bestSeller',
       img: img5,
    },
    {
       id: 2,
       name: 'Intel Core i5 12th Gen CPU .',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'BestSeller',
       img: img6,
    },
    
    {
       id: 2,
       name: 'Intel Core i5 12th Gen CPU..',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'BestSeller',
       img: img6,
    },
    
    {
       id: 2,
       name: 'Intel Core i5 12th Gen CPU .....',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'BestSeller',
       img: img6,
    },
    
    {
       id: 2,
       name: 'Intel Core i5 12th Gen CPU .....',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'BestSeller',
       img: img6,
    },
    
   
 ];

const ElectronicsSl=()=> {

    const [slideBegOrNot, handleSlideByState] = useState({
        isFirst: true,
        isLast: false,
     });
     const SlideRef = useRef();
  
     const handleNext = () => {
        SlideRef.current.swiper.slideNext();
     };
  
     const handlePrev = () => {
        SlideRef.current.swiper.slidePrev();
     };
  
     const onSlideChange = (swiper) => {
        handleSlideByState({
           isFirst: swiper.isBeginning,
           isLast: swiper.isEnd,
        });
     };
  
     const { isLast, isFirst } = slideBegOrNot;

     return (
      <section className='mt-4 bg-red-200 bg-opacity-50 backdrop-filter backdrop-blur-md  px-20 py-4'> 

<div className='flex gap-8 justify-center	items-center mt-4'>

<div className='flex'>
<img className='w-8 h-8' src={fire} alt='fire'></img>
<h6 className='text-gray-900 font-inter text-2xl font-semibold'>Flash Sale</h6>
</div>

<div  className='flex  gap-2'>
<div>
<div className='rounded-md bg-red-500 flex p-2 justify-center items-center gap-4'>
   <p className='text-white font-inter text-lg font-semibold'>28 </p>
</div>
<p className='text-red-500 font-inter text-base font-semibold'>Day</p>
</div>
<div>
<div className='rounded-md bg-red-500 flex p-2 justify-center items-center gap-4'>
   <p className='text-white font-inter text-lg font-semibold'>04</p>
</div>
<p className='text-red-500 font-inter text-base font-semibold'>Hour</p>
</div>
<div>
<div className='rounded-md bg-red-500 flex p-2 justify-center items-center gap-4'>
   <p className='text-white font-inter text-lg font-semibold'>36</p>
</div>
<p className='text-red-500 font-inter text-base font-semibold'>Min</p>
</div>
<div>
<div className='rounded-md bg-red-500 flex p-2 justify-center items-center gap-4'>
   <p className='text-white font-inter text-lg font-semibold'>56</p>
</div>
<p className='text-red-500 font-inter text-base font-semibold'>Sec</p>
</div>


</div>


<div>
<h6 className='text-gray-900 font-inter text-3xl font-semibold'>Up to <span className='text-red-500 font-inter text-3xl font-semibold'> 70% </span> off</h6>


</div>


</div>


<div className='flex  items-center  justify-between'>
   <div className='flex items-center gap-6	'>
<Link className='text-red-500 font-inter text-xl font-semibold'>Electronics </Link>
<Link className='text-gray-900 font-inter text-xl font-medium'>Clothing's </Link>
<Link className='text-gray-900 font-inter text-xl font-medium'>Sports </Link>
<Link className='text-gray-900 font-inter text-xl font-medium'>Toys </Link>
   </div>

   <div className='flex'> 
               <img src={arrowup}

                  className={`Arrow ${isFirst ? 'disabled' : ''}`}
                  onClick={handlePrev}
               />
               <img  src={arrowdown}
                  className={`Arrow ${isLast ? 'disabled' : ''}`}
                  onClick={handleNext}
               />
            </div>




</div>

           <div className="">
      
{/* <h1 className="heading">Post Carousel Using React Swiper Js</h1> */}

<div className="post-box">
   <div className="bg-left"></div>
   <div className="bg-right"></div>

   <div className="post-heading">
      <div className="heading-box">
 

         <div className="pagination-slide">
            <p className="swiper-paginations"></p>
           
         </div>
      </div>
   </div>
   <div className="post-conatin">
      <Swiper
         
         
         autoplay={{ delay: 1000 }}
         spaceBetween={0}
         className={` ${'mySwiper'}`}
         ref={SlideRef}
         slidesPerView={6}

         onSlideChange={onSlideChange}
         pagination={{
            el: '.swiper-paginations',
            type: 'fraction',
         }}
         navigation={false}
         modules={[Pagination, Navigation,Autoplay]}


      >
         {Products.map((item) => {
            return (
               <SwiperSlide key={item.id}>
                  <ElecDataCard
                     key={item.id}
                     image={item.img}
                     title={item.name}
                     price={item.price}
                     delPirce={item.delPirce}
                     
                     description={item.description}
                     alt={item.name}
                  />
               </SwiperSlide>
            );


          

         })}
      </Swiper>
   </div>
</div>
</div>
      </section>
      
     );
  };

export default ElectronicsSl;