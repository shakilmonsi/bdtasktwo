import React from 'react'
import BlackBanner from './BlackBanner/BlackBanner';
import BlackProducts from './BlackProducts';
function Black(props) {
    return (
        <div className='flex items-center gap-14 ps-12 pe-14'>

<div className='w-3/12 hidden md:block'><BlackBanner></BlackBanner></div>
            <div className='w-9/12	'>
<BlackProducts></BlackProducts>
            </div>
            
        </div>
    );
}

export default Black;