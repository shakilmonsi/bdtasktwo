import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {} from "swiper";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import arrowdown from "../../assets/electronice/uptodown/up.svg";
import arrowup from "../../assets/electronice/uptodown/down.svg";

import img1 from "../../assets/electronice/elec1.png";
import img2 from "../../assets/electronice/elec2.png";
import img3 from "../../assets/electronice/elec4 (2).png";
import img4 from "../../assets/electronice/elec4.png";
import img5 from "../../assets/electronice/image 59 (1).png";
import img6 from "../../assets/electronice/elec4 (2).png";
import LaptopACard from "./LaptopACard";

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

const LaptopAccessories = () => {
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
    <section className="mt-4 bg-red-200 bg-opacity-50 backdrop-filter backdrop-blur-md  px-20 py-4">
      <div className="flex  items-center  justify-between">
        <h6 className="text-gray-700 font-inter text-base font-semibold">
          Laptop & Accessories
        </h6>

        <div className="flex">
          <img
            src={arrowup}
            className={`Arrow ${isFirst ? "disabled" : ""}`}
            onClick={handlePrev}
          />
          <img
            src={arrowdown}
            className={`Arrow ${isLast ? "disabled" : ""}`}
            onClick={handleNext}
          />
        </div>
      </div>

      <div className="">
        {/* <h1 className="heading">Post Carousel Using React Swiper Js</h1> */}

        <div className="">
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
              className={` ${"mySwiper"}`}
              ref={SlideRef}
              slidesPerView={6}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },

                1024: {
                  slidesPerView: 6,
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
              {Products.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <LaptopACard
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

export default LaptopAccessories;
