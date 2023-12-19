import React from "react";


 const PromoterCard = (props) => {
    const { title, description, image, alt,delPirce,price,promoterlogo,Medal,rating ,Frame} = props;

    return (

 
        <div className="flex justify-items-center px-4 mx-atuo  ">
        <div className="card w-99.62 h-98  rounded-lg bg-white rounded-lg border border-yellow-400 bg-white   -ms-2 ">
          <div className="avatar ">
            <div className="w-24 h-24  ms-10 mt-4  rounded-full">
              <img className="" src={image} />
            </div>
          </div>
          <div className="card-body ">
            <div className="flex items-center gap-2">
              <div>
                <img
                  className="w-5   h-5"
                  src={promoterlogo}
                  alt="promoter"
                ></img>
              </div>

              <div className="rounded-lg w-14  h-6 bg-Border-v2 shadow-md">
                <div className="p-2 mr-2 flex items-center justify-items-center -mt-1 gap-1 ">
                  <img className="w-3 h-3 " src={rating} alt="promoter"></img>
                  <p className="text-xs  ">4.2</p>
                </div>
              </div>

              <div>
                <img className="w-5 h-5" src={Medal} alt="promoter"></img>
              </div>
            </div>

            {/* //  promoter name  */}
            <div className="text-center -ms-2  ">
              <p className="text-sm text-center"> MuhammadSalah</p>
            </div>

            {/* //followin  section  */}
            <div className="flex  gap-6 -ms-4">
              <div className="flex items-center gap-1">
                <img className=" w-3 h-3" src={Frame} alt="userlogo"></img>
                <span className="text-xs  ">1.2k</span>
              </div>

              <button className="button__style ">
                <span className="follwo__style">Follow</span>
              </button>
            </div>
          </div>
        </div>
      </div>



    );
 };
 


export default PromoterCard;