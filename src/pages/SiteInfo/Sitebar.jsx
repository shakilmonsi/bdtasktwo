

import React from "react";
import "./siteber.css";
import compare from "../../assets/SitInfologo/compare (2).svg";
import chat from "../../assets/SitInfologo/chat (1).svg";
import love from "../../assets/SitInfologo/love (2).png";
import cart from "../../assets/SitInfologo/cart (1).png";

const Sitebar = () => {
  return (
    <div  className='fixed	 absolute' style={{marginTop:250,marginLeft:1627}}>
      <div className="leyout_site " style={{rowGap:"18px"}}>
        <div className=" ">
          <p
            className="absolute card_number "
            style={{ marginLeft: "10px", marginTop: -7 }}
          >
            <span style={{ color: "#FFF", fontSize: "12px" }}>44</span>
          </p>

          <div
            className=" mt-1 "
            style={{
              borderRadius: "50%",
            }}
          >
            <img
              src={cart}
              style={{ width: "18px", height: "18px", color: "#FFFFFF" }}
              alt=""
            />
          </div>
        </div>

        <div className=" ">
          <p
            className="absolute card_number "
            style={{ marginLeft: "10px", marginTop: -7 }}
          >
            <span style={{ color: "#FFF", fontSize: "12px" }}>44</span>
          </p>

          <div
            className=" mt-1 "
            style={{
              borderRadius: "50%",
            }}
          >
            <img
              src={love}
              style={{ width: "18px", height: "18px", color: "#FFFFFF" }}
              alt=""
            />
          </div>
        </div>

        <div className=" ">
          <p
            className="absolute card_number "
            style={{ marginLeft: "10px", marginTop: -7 }}
          >
            <span style={{ color: "#FFF", fontSize: "12px" }}>44</span>
          </p>

          <div
            className=" mt-1 "
            style={{
              borderRadius: "50%",
            }}
          >
            <img
              src={compare}
              style={{ width: "18px", height: "18px", color: "#FFFFFF" }}
              alt=""
            />
          </div>
        </div>


        <div className=" ">
          <p
            className="absolute card_number "
            style={{ marginLeft: "10px", marginTop: -7 }}
          >
            <span style={{ color: "#FFF", fontSize: "12px" }}>44</span>
          </p>

          <div
            className=" mt-1 "
            style={{
              borderRadius: "50%",
            }}
          >
            <img
              src={chat}
              style={{ width: "18px", height: "18px", color: "#FFFFFF" }}
              alt=""
            />
          </div>
        </div>
      </div>

    </div>
  );
};



export default Sitebar;