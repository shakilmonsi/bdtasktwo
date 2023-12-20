import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {} from "swiper";

import { Navigation, Pagination, Autoplay } from "swiper/modules";


import Medal from "../../assets/promotorImg/logo/Medal 5.svg";
import promoterlogo from "../../assets/promotorImg/logo/promoter.png";
import rating from "../../assets/promotorImg/logo/rating.svg";
import Frame from "../../assets/promotorImg/logo/Frame (1).svg";

// import img  lnik
import promoter from "../../assets/promotorImg/promore1.png";
import promoter2 from "../../assets/promotorImg/promoter2.png";
import promoter3 from "../../assets/promotorImg/promoter3.png";
import promoter4 from "../../assets/promotorImg/promoter4.png";
import promoter5 from "../../assets/promotorImg/promoter5.png";
import promoter6 from "../../assets/promotorImg/promoter6.png";
import promoter7 from "../../assets/promotorImg/promoter7.png";
import promoter8 from "../../assets/promotorImg//promoter9.png";

import PromoterCard from "./PromoterCard";
import { Link } from "react-router-dom";

function TopPromoterSlider(props) {
  const Products = [
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,

      description: "bestSeller.",
      img: promoter,
    },
    {
      id: 2,
      name: "Joyroom TWS Bluetooth",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      description: "bestSeller.",

      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,

      img: promoter2,
    },
    {
      id: 2,
      name: "Sony Playstation 5",
      description: "bestSeller.",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,

      img: promoter3,
    },
    {
      id: 2,
      name: "Electric Tea Kettle",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      description: "bestSeller.",
      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,
      img: promoter4,
    },

    {
      id: 2,
      name: "Apple Watch Series 8",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      description: "bestSeller",
      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,
      img: promoter5,
    },
    {
      id: 2,
      name: "Intel Core i5 12th Gen CPU .",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      description: "BestSeller",
      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,
      img: promoter6,
    },

    {
      id: 2,
      name: "Intel Core i5 12th Gen CPU..",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      description: "BestSeller",
      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,
      img: promoter7,
    },
    {
      id: 2,
      name: "Intel Core i5 12th Gen CPU..",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      description: "BestSeller",

      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,
      img: promoter8,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,

      description: "bestSeller.",
      img: promoter,
    },
    {
      id: 2,
      name: "Joyroom TWS Bluetooth",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      description: "bestSeller.",

      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,

      img: promoter2,
    },
    {
      id: 2,
      name: "Sony Playstation 5",
      description: "bestSeller.",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,

      img: promoter3,
    },
    {
      id: 2,
      name: "Electric Tea Kettle",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      description: "bestSeller.",
      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,
      img: promoter4,
    },

    {
      id: 2,
      name: "Apple Watch Series 8",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      description: "bestSeller",
      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,
      img: promoter5,
    },
    {
      id: 2,
      name: "Intel Core i5 12th Gen CPU .",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      description: "BestSeller",
      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,
      img: promoter6,
    },

    {
      id: 2,
      name: "Intel Core i5 12th Gen CPU..",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      description: "BestSeller",
      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,
      img: promoter7,
    },
    {
      id: 2,
      name: "Intel Core i5 12th Gen CPU..",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",
      description: "BestSeller",

      promoterlogo: promoterlogo,
      Medal: Medal,
      rating: rating,
      Frame: Frame,
      img: promoter8,
    },
  ];

  return (
  <section className=" bg-yellow-50 shadow-md ps-20  pe-20 py-8 mt-6 overflow-hidden">

    <div  className="flex justify-between	 pe-4 "> 
      <div>
        <h4 className="text-gray-700 font-inter text-md font-medium">Explore our top promoters</h4>
      </div>
      <div>
        <Link className="text-gray-800 font-inter text-xs font-semibold" to="/Viewall">View all</Link>
      </div>
       </div>
      <Swiper
      spaceBetween={30}
      slidesPerView={9}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
     
        1024: {
          slidesPerView: 9,
          spaceBetween: 40,
        },
      }}


      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper mt-4"
    >
    
      {Products.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <PromoterCard
              key={item.id}
              image={item.img}
              title={item.name}
              price={item.price}
              promoterlogo={item.promoterlogo}
              delPirce={item.delPirce}
              Medal={item.Medal}
              Frame={item.Frame}
              rating={item.rating}
              description={item.description}
              alt={item.name}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  </section>
  );
}
export default TopPromoterSlider;
