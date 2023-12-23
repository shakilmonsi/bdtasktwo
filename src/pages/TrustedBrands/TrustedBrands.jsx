import React from "react";

import img1 from "../../assets/tustedProducts/img1.png";
import two from "../../assets/tustedProducts/two.png";
import img2 from "../../assets/tustedProducts/img2.png";
import img3 from "../../assets/tustedProducts/img3.png";
import img4 from "../../assets/tustedProducts/img4.png";
import img5 from "../../assets/tustedProducts/img5.png";
import img6 from "../../assets/tustedProducts/img6.png";
import img7 from "../../assets/tustedProducts/img7.png";

function TrustedBrands(props) {
  const trustData = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: two,
    },
    {
      id: 3,
      img: img2,
    },
    {
      id: 4,
      img: img3,
    },
    {
      id: 5,
      img: img4,
    },
    {
      id: 6,
      img: img5,
    },
    {
      id: 7,
      img: img6,
    },
    {
      id: 8,
      img: img7,
    },
  ];

  return (
    <div className="bg-white ">
      <div className="   ms:ps-20 pe-10  py-8">
      <div className=" ps-40 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-9  gap-y-4 gap-x-4 items-center ">
        <div>
          <h5 className="text-gray-600 font-inter text-lg font-medium">
            Trusted Brands
          </h5>
        </div>
        {trustData.map((data) => (
          <div key={data.id}>
            <img src={data.img} alt="Shoes" className="" />
          </div>
        ))}
      </div>
      </div>

    </div>
  );
}

export default TrustedBrands;
