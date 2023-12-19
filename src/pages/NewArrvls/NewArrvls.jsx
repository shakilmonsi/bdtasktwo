import React from "react";

import banner1 from "../../assets/bannertwo/banner1.png";
import banner2 from "../../assets/bannertwo/banner2.png";

const NewArrvls = () => {
  const newArrblaBanner = [
    {
      id: 1,
      banner: banner1,
    },
    {
      id: 1,
      banner: banner2,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2  gap-x-11 gap-y-11	ms-12 px-6 py-4 pe-14">
      {newArrblaBanner.map((bannerS) => (
        <div >
          <img
            className="rounded-sm	h-[400px]"
            src={bannerS.banner}
            alt="banner1"
          ></img>
        </div>
      ))}
    </div>
  );
};

export default NewArrvls;
