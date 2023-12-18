import React from "react";
import TopPromoter from "../../TopPromoter/TopPromoter";
import Electronics from "../../Electronics/Electronics";
import FollowedProducts from "../../FollowedProducts/FollowedProducts";
import CatagoryProduct from "../../catagory/CatagoryProduct";
import ElectronicsSl from "../../ElectioSlider/ElectronicsSl";
import TopPromoterSlider from "../../TopPromoterSlider/TopPromoterSlider";
import NewArrvls from "../../NewArrvls/NewArrvls";
import ModErnBanner from "../../ModErnBanner/ModErnBanner";

const Home = () => {
  return (
    <div>
      {/* <HeroBanner></HeroBanner> */}

      <TopPromoterSlider></TopPromoterSlider>
      <ElectronicsSl></ElectronicsSl>
      <FollowedProducts></FollowedProducts>

      <NewArrvls></NewArrvls>


      <ModErnBanner></ModErnBanner>

      <CatagoryProduct></CatagoryProduct>
      <h3 className="text-center">home</h3>

      <TopPromoter></TopPromoter>
      <Electronics></Electronics>
    </div>
  );
};

export default Home;
