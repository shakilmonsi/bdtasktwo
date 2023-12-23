import React from 'react';

import  Electronics  from "../../assets/catagoryproduct/img1.png"
import  witch  from "../../assets/catagoryproduct/witch.png"
import  img3  from "../../assets/catagoryproduct/img3.png"
import  img4  from "../../assets/catagoryproduct/img4.png"
import  img5  from "../../assets/catagoryproduct/img5.png"
import  image6  from "../../assets/catagoryproduct/image 6.png"
import  img7  from "../../assets/catagoryproduct/img7.png"
import  img8  from "../../assets/catagoryproduct/img8.png"
import  image9  from "../../assets/catagoryproduct/image 9.png"
import  image10  from "../../assets/catagoryproduct/img9.png"
import  img11  from "../../assets/catagoryproduct/img11.png"
import  img12  from "../../assets/catagoryproduct/12.png"
// import  Electronicss  from "../../assets/catagoryproduct/image 15.png"
const CatagoryProduct=()=> {
 
    const catagrytrowelproducts = [
        {
                id: 1,
                name: "Electronics",
                catagryimg: Electronics

        },
        {
                id: 2,
                name: "Smartwatches",
                catagryimg: witch

        },
        {
                id: 3,
                name: "Smart Home",
                catagryimg: img3

        },
        {
                id: 4,
                name: "Clothing's",
                catagryimg: img4

        },
        {
                id: 5,
                name: "& Tablets",
                catagryimg: img5

        },
        {
                id: 6,
                name: "Laptops & Tablets ",
              
                catagryimg: image6

        },
        {
                id: 7,
                name: "Fitness",
                catagryimg: img7

        },
        {
                id: 8,
                name: "Toys",
                catagryimg: img8

        },
        {
                id: 9,
                name: "Books",
                catagryimg: image9

        },
        {
                id: 10,
                name: "Gaming Accessories",
               
                catagryimg: image10

        },
        {
                id: 11,
                name: " Health & Personal Care",
              
                catagryimg: img11

        },
        {
                id: 12,
                name: "Home & Kitchen",
                
                catagryimg: img12

        },


]




return (
        <section className='flex items-center justify-center w-screen bg-white ms:ps-20 pr-24 '>
                <div className='grid grid-cols-1 md:grid-cols-6  ms-32      lg:grid-cols-12  gap-x- 2 gap-y-2 mt-2'>


                        {
                                catagrytrowelproducts?.map(catagrytrowelproduct => <div className='flex p-2 text-center' key={catagrytrowelproduct.id}>
                                        <div className=''>

                                                <img className='ms-4 p-2' src={catagrytrowelproduct.catagryimg} ></img>
                                                <h6 className=''>{catagrytrowelproduct.name}</h6>
                                        </div>

                                      

                                </div>)
                        }
                </div>
        </section>
    );
}

export default CatagoryProduct;