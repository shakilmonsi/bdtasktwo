import React from "react";
import "./ecploreSeller.css"
const ExplorsellersCard = (props) => {
    const { title, description, image, alt,delPirce,price,promoterlogo,Medal,rating ,Frame} = props;

    return (

 
 
        <div className="card w-[148px] h-[212px]   rounded-lg bg-white rounded-lg border border-yellow-400 bg-white    ">
          <div className="avatar ">
            <div className="w-24 h-24 mt-3 ms-8 seller__Card_style  rounded-full">
              <img className="" src={image} />
            </div>
          </div>
          <div className="card-body ">
            <div className="flex items-center gap-2 -mt-4">
              <div>
                <img
                  className="w-[18px] h-[18px]"
                  src={promoterlogo}
                  alt="promoter"
                ></img>
              </div>

              <div className="rounded-lg w-14  h-6 bg-Border-v2 shadow-md ">
                <div className="p-2 mr-2 flex items-center justify-items-center -mt-1 gap-1 ">
                  <img className="w-3 h-3 " src={rating} alt="promoter"></img>
                  <p className="total__user ">4.2</p>
                </div>
              </div>

              <div>
                <img className="w-4 h-4" src={Medal} alt="promoter"></img>
              </div>
            </div>

            {/* //  promoter name  */}
            <div className="text-center -ms-4 mt-2 ">
              <p className="userName__Style"> MuhammadSalah</p>
            </div>

            {/* //followin  section  */}
            <div className="flex  gap-6   -ms-4 mt-1">
              <div className="flex items-center gap-1">
                <img className=" w-3 h-3" src={Frame} alt="userlogo"></img>
                <span className="total__user ">1.2k</span>
              </div>

              <button className="button__style ">
                <span className="follwo__style">Follow</span>
              </button>
            </div>
          </div>
        </div>
     


    );
 };

export default ExplorsellersCard;
