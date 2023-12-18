import React from "react";
import "./topPromoter.css"
import promoter from "../../assets/promotorImg/promore1.png";
import Medal from "../../assets/promotorImg/logo/Medal 5.svg";
import promoterlogo from "../../assets/promotorImg/logo/promoter.png";
import rating from "../../assets/promotorImg/logo/rating.svg";
import Frame from "../../assets/promotorImg/logo/Frame (1).svg";








const TopPromoter = () => {

  const promoterData=[
    {
        id: 1,
         name:  'fluoride tretment',
         description: 'pless add a services and may life is ok ',
    img:promoter
        },
    {
        id: 2,
         name:  'cavity tretment',
         description: 'pless add a services and may life is ok ',
    img:promoter
        },
    {
        id: 3,
         name:  'whitenig tretment',
         description: 'pless add a services and may life is ok ',
    img:promoter
        },
]

  return (
    <div className="flex justify-items-center px-4 mx-atuo	">
      <div className="card w-99.62 h-98  rounded-lg border border-verified-2 bg-white ">

        <div className="avatar ">
          <div className="w-24 h-24  ms-10 mt-4  rounded-full">
            <img className="" src={promoter} />
          </div>
        </div>
        <div className="card-body ">
          <div className="flex items-center gap-2">
            <div>
              <img className="w-5	 h-5" src={promoterlogo} alt="promoter"></img>
            </div>

            <div className="rounded-lg w-14	h-6 bg-Border-v2 shadow-md">
              <div className="p-2 mr-2 flex items-center justify-items-center -mt-1 ">
                <img className="w-3 h-3 " src={rating} alt="promoter"></img>
                <p className="text-xs	">4.2</p>
              </div>
            </div>

            <div>
              <img className="w-5 h-5" src={Medal} alt="promoter"></img>
            </div>
          </div>

          {/* //  promoter name  */}
          <div className="text-center -ms-2	">
            <p className="text-sm text-center"> MuhammadSalah</p>
          </div>

          {/* //followin  section  */}
          <div className="flex  gap-6 -ms-4">
            <div className="flex items-center gap-1">
              <img className=" w-3 h-3" src={Frame} alt="userlogo"></img>
              <span className="text-xs	">1.2k</span>
            </div>

            <button className="button__style "><span className="follwo__style">Follow</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};



































export default TopPromoter;
