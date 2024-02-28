import React from 'react'
import telephone from '../image/telephone.png'
import facebook from '../image/facebook.png'
import internet from '../image/internet.png'
function Footer() {
  return (
    <>
    <div className='container_footer'>
      <div className='footer_first' >
        
      <img src={telephone} alt='' className='image_telephone'></img>
      Toll free 1800 200 1234
        </div>
        
<div className='footer_second'>
<img src={facebook} alt='' className='image_facebook'>

</img>
www.facebook.com/cripumps
      </div>
      <div className='footer_thrid'>
      <img src={internet} alt='' className='image_internet'>
        
      </img>
      www.crigroups.com
      </div>
    </div>
    
    </>
  )
}

export default Footer