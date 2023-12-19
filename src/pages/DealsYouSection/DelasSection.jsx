import React from "react";
import DealsYouMightLike from "./DealsYouMightLike";
import Banner from "./Banner";

function DelasSection(props) {
  return (
    <div className="flex ">
      <div className="w-5/12 p-5">
        <div>
          <DealsYouMightLike></DealsYouMightLike>
        </div>
      </div>
      <div className="w-5/12 p-5">
        <div>
          <DealsYouMightLike></DealsYouMightLike>
        </div>
      </div>
      <div className="w-2/12 p-5">
        <div>
          {" "}
          <Banner></Banner>
        </div>
      </div>
    </div>
  );
}

export default DelasSection;
