import React from 'react';

import img1 from '../../assets/topElectonisDela2/img1.png';
import img2 from '../../assets/topElectonisDela2/img2.png';
import img3 from '../../assets/topElectonisDela2/img3.png';
import img4 from '../../assets/topElectonisDela2/img4.png';
import img5 from '../../assets/topElectonisDela2/img5.png';
import img6 from '../../assets/topElectonisDela2/image 56 (2).png';
import img7 from '../../assets/topElectonisDela2/6.png';
import TopElecCard from './TopElecCard';
import { Link } from 'react-router-dom';



const  TopElectronicDeals=()=> {

    
const  TopElecData= [
    {
       id: 1,
       name: 'Sony WNC Headset',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'bestSeller.',
       img: img1,
    },
    {
       id: 2,
       name: 'Joyroom TWS Bluetooth',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'bestSeller.',
       img: img2,
    },
    {
       id: 2,
       name: 'Sony Playstation 5',
       description:
          'bestSeller.',
          price: 'SAR31821.00',
          delPirce: 'SAR31821.00',
       img: img3,
    },
    {
       id: 2,
       name: 'Electric Tea Kettle',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'bestSeller.',
       img: img4,
    },

    {
       id: 2,
       name: 'Apple Watch Series 8',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'bestSeller',
       img: img5,
    },
    {
       id: 2,
       name: 'Intel Core i5 12th Gen CPU .',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'BestSeller',
       img: img6,
    },
    {
       id: 2,
       name: 'Intel Core i5 12th Gen CPU .',
       price: 'SAR31821.00',
       delPirce: 'SAR31821.00',
       description:
          'BestSeller',
       img: img7,
    },
    
 ];


    return (
        <div className='ps-8 pe-24'>
                <div  className="flex justify-between ps-8	 py-4 "> 
      <div>
        <h4 className="text-gray-700 font-inter text-md font-medium">Top Electronic Deals</h4>
      </div>
      <div>
        <Link className="text-gray-800 font-inter text-xs font-semibold" to="/Viewall">View all</Link>
      </div>
       </div>
            <div className=' grid gap-y-5  gap-x-3  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 '>
                {TopElecData.map(elec=> <TopElecCard  key={elec.id}
                elec={elec}>
                </TopElecCard>)
                }
            </div>           
        </div>
    );
}

export default TopElectronicDeals;