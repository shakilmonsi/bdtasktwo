import React from 'react';
import banner  from "../../../assets/blackBanner/black.png"
function BlackBanner(props) {
    return (
        <div>
            <img className='h-[420px] ms-4' src={banner} alt='banner'></img>
            
        </div>
    );
}

export default BlackBanner;