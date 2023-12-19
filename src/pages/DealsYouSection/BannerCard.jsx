import React from "react";

const BannerCard = (props) => {
  const { title, description, image, alt, delPirce, price } = props;
  return (
    <div className=" card rounded-md bg-white shadow-md overflow-hidden w-48 ps-2">
        <img className="w-[375.747px] h-[240px]" src={image} alt=""></img>
    </div>
  );
};

export default BannerCard;
