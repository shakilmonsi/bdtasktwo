import bannerImg from "../../assets/sectionImg/banners/image 51.png";
import bannerImg2 from "../../assets/sectionImg/banners/image 58 (1).png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {} from "swiper";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import arrowdown from "../../assets/electronice/uptodown/up.svg";
import arrowup from "../../assets/electronice/uptodown/down.svg";
import BannerCard from "./BannerCard";

const Products = [
  {
    id: 1,
    img: bannerImg,
  },

  {
    id: 2,
    img: bannerImg2,
  },
];

const Banner = () => {
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
    <section className="mt-4 bg-red-200 bg-opacity-50 backdrop-filter backdrop-blur-md ">
      <div className="flex  items-center  justify-between">
        <h6 className="text-gray-700 font-inter text-base font-semibold">
          Deals You Might Like{" "}
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
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },

                1024: {
                  slidesPerView: 1,
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
                    <BannerCard
                      key={item.id}
                      image={item.img}
                     
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

export default Banner;
