import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./deals.css"
import {} from "swiper";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import arrowdown from "../../assets/electronice/uptodown/up.svg";
import arrowup from "../../assets/electronice/uptodown/down.svg";


import img1 from "../../assets/delSectionProducts/image 58 (1).png";
import img2 from "../../assets/delSectionProducts/image 62.png";
import img3 from "../../assets/delSectionProducts/image 64 (1).png";
import img4 from "../../assets/delSectionProducts/image 64.png";
import img5 from "../../assets/delSectionProducts/image 65.png";
import img6 from "../../assets/delSectionProducts/image 68.png";
import DelasMigCard from "./DelasMigCard";
import { Link } from "react-router-dom";

const Products = [
  {
    id: 1,
    name: "Desktops",
    delPirce: "SAR31821.00",
    description: "bestSeller.",
    img: img1,
  },
  {
    id: 2,
    name: "Smartwatches",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "bestSeller.",
    img: img2,
  },
  {
    id: 2,
    name: "Airpods",
    description: "bestSeller.",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    img: img3,
  },
  {
    id: 2,
    name: "Gadgets",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "bestSeller.",
    img: img4,
  },

  {
    id: 2,
    name: "Gaming Consoles",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "bestSeller",
    img: img5,
  },
  {
    id: 2,
    name: "Cameras .",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "BestSeller",
    img: img6,
  },

  {
    id: 2,
    name: "Headsets",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "BestSeller",
    img: img6,
  },

  {
    id: 2,
    name: "Powerbanks",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "BestSeller",
    img: img6,
  },
  {
    id: 1,
    name: "Desktops",
    delPirce: "SAR31821.00",
    description: "bestSeller.",
    img: img1,
  },
  {
    id: 2,
    name: "Smartwatches",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "bestSeller.",
    img: img2,
  },
  {
    id: 2,
    name: "Airpods",
    description: "bestSeller.",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    img: img3,
  },
  {
    id: 2,
    name: "Gadgets",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "bestSeller.",
    img: img4,
  },

  {
    id: 2,
    name: "Gaming Consoles",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "bestSeller",
    img: img5,
  },
  {
    id: 2,
    name: "Cameras .",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "BestSeller",
    img: img6,
  },

  {
    id: 2,
    name: "Headsets",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "BestSeller",
    img: img6,
  },

  {
    id: 2,
    name: "Powerbanks",
    price: "SAR31821.00",
    delPirce: "SAR31821.00",
    description: "BestSeller",
    img: img6,
  },
];

const DealsYouMightLike = () => {

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

    function chunkArray(array, chunkSize) {
      const result = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
      }
      return result;
    }
  
    const originalArray = [
      {
        id: 1,
        name: "Desktops",
        delPirce: "SAR31821.00",
        description: "bestSeller.",
        img: img1,
      },
      {
        id: 2,
        name: "Smartwatches",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        description: "bestSeller.",
        img: img2,
      },
      {
        id: 2,
        name: "Airpods",
        description: "bestSeller.",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        img: img3,
      },
      {
        id: 2,
        name: "Gadgets",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        description: "bestSeller.",
        img: img4,
      },
    
      {
        id: 2,
        name: "Gaming Consoles",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        description: "bestSeller",
        img: img5,
      },
      {
        id: 2,
        name: "Cameras .",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        description: "BestSeller",
        img: img6,
      },
    
      {
        id: 2,
        name: "Headsets",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        description: "BestSeller",
        img: img6,
      },
    
      {
        id: 2,
        name: "Powerbanks",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        description: "BestSeller",
        img: img6,
      },
      {
        id: 1,
        name: "Desktops",
        delPirce: "SAR31821.00",
        description: "bestSeller.",
        img: img1,
      },
      {
        id: 2,
        name: "Smartwatches",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        description: "bestSeller.",
        img: img2,
      },
      {
        id: 2,
        name: "Airpods",
        description: "bestSeller.",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        img: img3,
      },
      {
        id: 2,
        name: "Gadgets",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        description: "bestSeller.",
        img: img4,
      },
    
      {
        id: 2,
        name: "Gaming Consoles",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        description: "bestSeller",
        img: img5,
      },
      {
        id: 2,
        name: "Cameras .",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        description: "BestSeller",
        img: img6,
      },
    
      {
        id: 2,
        name: "Headsets",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        description: "BestSeller",
        img: img6,
      },
    
      {
        id: 2,
        name: "Powerbanks",
        price: "SAR31821.00",
        delPirce: "SAR31821.00",
        description: "BestSeller",
        img: img6,
      },
    ];
    const [chunkedArray, setChunkedArray] = useState([]);
  
    useEffect(( ) => {
      const chunks = chunkArray(originalArray, 2);
      console.log(chunks);
      setChunkedArray(chunks);
    }, []);
  
   
  
    return (
      <section className=" ps-2 pe-2 ">
 
<div className='flex  items-center  justify-between pe-2 py-2 ps-2'>
   <div className='flex items-center '>
<p className='deals_you_might'>Deals You Might Like </p>


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
          <div className="post-conatin">
            <Swiper
              autoplay={{ delay: 2500}}
              spaceBetween={0}
              className={`row-gap-4${"mySwiper"}`}
              ref={SlideRef}
              slidesPerView={3}
              grabCursor={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              onSlideChange={onSlideChange}
              pagination={{
                el: ".swiper-paginations",
                type: "fraction",
              }}
              navigation={false}
              modules={[Pagination, Navigation, Autoplay]}
            >
              {chunkedArray.map((chunk, index) => (
                <SwiperSlide key={index}>
                  {/* Render your chunk of items here */}
                  {chunk.map((item) => (
              <DelasMigCard
              key={item.id}
              image={item.img}
              title={item.name}
              price={item.price}
              delPirce={item.delPirce}
              description={item.description}
              alt={item.name}
            />
                  ))}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    );
  };

export default DealsYouMightLike;
