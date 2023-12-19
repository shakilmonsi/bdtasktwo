import React from "react";
import TopPromoter from "../../TopPromoter/TopPromoter";
import Electronics from "../../Electronics/Electronics";
import FollowedProducts from "../../FollowedProducts/FollowedProducts";
import CatagoryProduct from "../../catagory/CatagoryProduct";
import ElectronicsSl from "../../ElectioSlider/ElectronicsSl";
import TopPromoterSlider from "../../TopPromoterSlider/TopPromoterSlider";
import NewArrvls from "../../NewArrvls/NewArrvls";
import ModErnBanner from "../../ModErnBanner/ModErnBanner";
import Services from "../../services/Services";
import TopElectronicDeals from "../../TopElectronicDeals/TopElectronicDeals";
import SpeakersHeadsets from "../../Speakers&Headsets/SpeakersHeadsets";
import LaptopAccessories from "../../LaptopAccessories/LaptopAccessories";
import Getthebestap from "../../Getthebestapp/Getthebestap";
import TrendingdealsElectronics from "../../TrendingdealsElectronics/TrendingdealsElectronics";
import RecommendedForYou from "../../NewArrival/RecommendedForYou";
import Deliveryorder from "../../deliveryorder/Deliveryorder";
import NewArrivalProducts from "../../NewArrivalProducts/NewArrivalProducts";
import TrustedBrands from "../../TrustedBrands/TrustedBrands";
import ExploreourtopHomeBusiness from "../../ExploreourtopHomeBusiness/ExploreourtopHomeBusiness";
import Black from "../../Black/Black";
import Exploreourtopbusinesssellers from "../../Exploreourtopbusinesssellers/Exploreourtopbusinesssellers";
import TopDealsoftheweek from "../../TopDealsoftheweek/TopDealsoftheweek";
import DelasSection from "../../DealsYouSection/DelasSection";

const Home = () => {
  return (
    <div>
      {/* <HeroBanner></HeroBanner> */}

      <TopPromoterSlider></TopPromoterSlider>
      <ElectronicsSl></ElectronicsSl>
      <FollowedProducts></FollowedProducts>

      <ModErnBanner></ModErnBanner>
      <TopPromoter></TopPromoter>
      <Electronics></Electronics>

   
      <DelasSection></DelasSection>
      <TopDealsoftheweek></TopDealsoftheweek>
      <NewArrvls></NewArrvls>
      <Exploreourtopbusinesssellers></Exploreourtopbusinesssellers>
      <Black></Black>
      <ExploreourtopHomeBusiness></ExploreourtopHomeBusiness>
      <TrustedBrands></TrustedBrands>
      <NewArrivalProducts></NewArrivalProducts>
      <Deliveryorder></Deliveryorder>
      <RecommendedForYou></RecommendedForYou>
      <ModErnBanner></ModErnBanner>
      <TrendingdealsElectronics></TrendingdealsElectronics>
      <Getthebestap></Getthebestap>
      <LaptopAccessories></LaptopAccessories>
      <SpeakersHeadsets></SpeakersHeadsets>
      <CatagoryProduct></CatagoryProduct>
      <TopElectronicDeals></TopElectronicDeals>
      <Services></Services>
    </div>
  );
};

export default Home;
