import React from 'react';
import TopPromoter from '../../TopPromoter/TopPromoter';
import Electronics from '../../Electronics/Electronics';
import FollowedProducts from '../../FollowedProducts/FollowedProducts';

const Home=()=> {
    return (
        <div>
            <TopPromoter></TopPromoter>
            <Electronics></Electronics>
            <FollowedProducts></FollowedProducts>
            <h3 className='text-center'>home</h3>

        </div>
    );
}

export default Home;