import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {} from "swiper";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

// style
import "./FollowedProductsd.css";
// logo img import
import FollowedProductss from "../../assets/FollowedProducts/FollowedProducts.png";
import ay from "../../assets/FollowedProducts/logo/ay.svg";
import coopy from "../../assets/FollowedProducts/logo/coopy.svg";
import love from "../../assets/FollowedProducts/logo/love.svg";
import star from "../../assets/FollowedProducts/logo/star.svg";
import grystart from "../../assets/FollowedProducts/logo/grystart.svg";
import verifide from "../../assets/FollowedProducts/logo/verifide.png";
import trend from "../../assets/FollowedProducts/logo/trend.svg";
import hot from "../../assets/FollowedProducts/logo/hot.svg";
import userVerifide from "../../assets/FollowedProducts/logo/userVerifide.svg";
import addCard from "../../assets/FollowedProducts/logo/cart white.png";
import FollowedCard from "./FollowedCard";
import { Link } from "react-router-dom";

 function FollowedProducts(props)  {
  const followedProducts = [
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
    {
      id: 1,
      name: "Sony WNC Headset",
      price: "SAR31821.00",
      delPirce: "SAR31821.00",

      trend: trend,
      userVerifide: userVerifide,
      hot: hot,
      verifide: verifide,
      grystart: grystart,
      star: star,
      love: love,
      coopy: coopy,
      ay: ay,
      addCard:addCard,

      description: "bestSeller.",
      img: FollowedProductss,
    },
  ];

  return (
  <section className=" bg-yellow-50 shadow-md p-10 bg-slate-200	">
    <div  className="flex justify-between	"> 
      <div>
        <h4 className="text-gray-700 font-inter text-md font-medium">Followed Products</h4>
      </div>
      <div>
        <Link className="text-gray-800 font-inter text-xs font-semibold" to="/Viewall">View all</Link>
      </div>
       </div>
      <Swiper
      spaceBetween={30}
      slidesPerView={6}
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
  

      {followedProducts?.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <FollowedCard
              trend={item.trend}
              userVerifide={item.userVerifide}
              hot={item.hot}
              verifide={item.verifide}
              grystart={item.grystart}
              star={item.star}
              love={item.love}
              coopy={item.coopy}
              ay={item.ay}
              addCard={item.addCard}
              img={item.img}
              key={item.id}



            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  </section>
  );
};

export default FollowedProducts;
