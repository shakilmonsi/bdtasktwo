import React from "react";
import DealsYouMightLike from "./DealsYouMightLike";
import Banner from "./Banner";

function DelasSection(props) {
  return (
    <div className="flex items-center ps-20 pe-10 ">
      <div className="w-5/12 pe-8 ">
        <div>
          <DealsYouMightLike></DealsYouMightLike>
        </div>
      </div>
      <div className="w-5/12 pe-8 ">
        <div>
          <DealsYouMightLike></DealsYouMightLike>
        </div>
      </div>
      <div className="w-2/12 ps-1 ">
        <div>
          {" "}
          <Banner></Banner>
        </div>
      </div>
    </div>
  );
}

export default DelasSection;
