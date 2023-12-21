import React from 'react';
import Navber from '../pages/Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/footer/Footer';
import Sitebar from '../pages/SiteInfo/Sitebar';

function Main(props) {
    return (
        <div>
            <Navber></Navber>
            <Sitebar></Sitebar>

  <Outlet></Outlet>
<Footer></Footer>
        </div>
    );
}

export default Main;