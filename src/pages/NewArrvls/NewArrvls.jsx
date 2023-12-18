import React from "react";

import banner1 from "../../assets/bannertwo/banner1.png";
import banner2 from "../../assets/bannertwo/banner2.png";

const NewArrvls = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-11	ms-12 px-6 py-4">
      <img className="rounded-sm	" src={banner1} alt="banner1"></img>
      <img className="max-h-96	rounded-lg" src={banner2} alt="banner2"></img>
    </div>
  );
};

export default NewArrvls;
