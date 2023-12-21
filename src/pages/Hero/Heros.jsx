import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { } from 'swiper';
import 'swiper/css/pagination';
import  {  Navigation , Pagination, Autoplay } from 'swiper/modules';

import arrowdown from '../../assets/electronice/uptodown/up.svg';
import arrowup from '../../assets/electronice/uptodown/down.svg';

import imgTwo from '../../assets/electronice/elec1.png';
import img1 from '../../assets/heroBanner/1.png';
import imgThre from '../../assets/heroBanner/35297222_8281847 1.png';
import Discount from '../../assets/heroBanner/Discount-cuate 1.png';
import imgFive from '../../assets/heroBanner/last.png';
import Layer from '../../assets/heroBanner/Layer_1.svg';



import { Link } from 'react-router-dom';
import SliderContent from './SliderContent';
import Sitebar from '../SiteInfo/Sitebar';

const Products = [
    {
       id: 1,
       name: 'Sony WNC Headset',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'bestSeller.',
       img: img1,
       imgTwo: imgTwo,
       imgThre: imgThre,
       Discount:Discount,
       imgFive:imgFive,
       Layer:Layer


    },
    {
       id: 1,
       name: 'Sony WNC Headset',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'bestSeller.',
       img: img1,
       imgTwo: imgTwo,
       imgThre: imgThre,
       Discount:Discount,
       imgFive:imgFive,
       Layer:Layer


    },
    {
       id: 1,
       name: 'Sony WNC Headset',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'bestSeller.',
       img: img1,
       imgTwo: imgTwo,
       imgThre: imgThre,
       Discount:Discount,
       imgFive:imgFive,
       Layer:Layer


    },
    
   
 ];

const Heros=()=> {

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
      <section className=' bg-yellow-50 shadow-md ps-20  pe-20 py-8 mt-6 overflow-hidden'> 




           <div className="">
      <Swiper   
         autoplay={{ delay: 1000 }}
         spaceBetween={0}
         className={`static ${'mySwiper'}`}
         ref={SlideRef}
         slidesPerView={1}

         onSlideChange={onSlideChange}
     
         navigation={false}
         modules={[Autoplay, Pagination, Navigation]}
         pagination={{ clickable: true }}
      >
         {Products.map((item) => {
            return (
               <SwiperSlide key={item.id}>
                  <SliderContent
                     key={item.id}
                     image={item.img}
                     imgFive={item.imgFive}
                     Discount={item.Discount}
                     imgThre={item.imgThre}
                     imgTwo={item.imgTwo}
                     title={item.name}
                     Layer={item.Layer}
                     delPirce={item.delPirce}
                     
                     description={item.description}
                     alt={item.name}
                  />
               </SwiperSlide>
            );


          

         })}
      </Swiper>
</div>

              <div className=' absolute	 -mt-40  -ms-12'>
              <img src={arrowup}

className={`   Arrow ${isFirst ? 'disabled' : ''}`}
onClick={handlePrev}
/>
              </div>


              <div className='absolute	-mt-40  ms-[1550px]'> 
              <img  src={arrowdown}
                  className={`Arrow ${isLast ? 'disabled' : ''}`}
                  onClick={handleNext}
               />
              </div>
          


      </section>
      
     );
  };

export default Heros;