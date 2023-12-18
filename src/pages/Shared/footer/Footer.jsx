import React from 'react';
import footerlgor from "../../../assets/footerlogo/footerr.png"
import car from "../../../assets/footerlogo/car.png"
import mastercard from "../../../assets/footerlogo/mastercard.png"
import naps from "../../../assets/footerlogo/naps.png"
import paypal from "../../../assets/footerlogo/paypal.png"
import Group from "../../../assets/footerlogo/Group.svg"
import Group from "../../../assets/footerlogo/mastercard.png"

const Footer=()=> {
    return (
        <footer>
          <div>
            <div className='flex'>
                
<div>
<div>
                    <h6>© 2022 cart24.com  </h6>
                   </div>
                   
                   <div className='flex'>
                    <img src={footerlgor} alt=''></img>
                    <h6>All Rights Reserved. </h6>
                   </div>

                   <div className='flex'>
                    <h6>Terms & Condition</h6>
                   </div>

                   <div className='flex'>
                    <h6>Privacy Policy</h6>
                   </div>

<div>


<div>
    <img src='' alt='logo'></img>
</div>

</div>


</div>





            </div>

          </div>



        </footer>
    );
}

export default Footer;