import React from 'react'
import imgeS from '../image/imgeS.png'
import imgeF from '../image/imgeF.png'
import logoImage from '../image/logo.png'
import HeroSection from './HeroSection'
import Footer from './Footer'

function Header() {
  return (

    <>
    <div className='mainContainer'>
 <div className='firstDiv'>
 <img className='image_second' src={imgeF} alt='ig2' /> 
 </div>

   <div className='secondDiv'>
   <img className='logo_Image' src={logoImage} alt='ig2' /> 
      <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>

    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for<br/>various projects across the globe to save energy.</li>
    <li>C.R.I. is the highest contributor in the country the projects of EESL (Energy Efficiency Services Limited) to replace the<br/>old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
    <img className='image_frist' src={imgeS} alt='ig' />
    <p className='image_footer'>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
  </div>
  


</div>

<div>
<HeroSection/>
 <Footer/> 
</div>

</>
  )
}

export default Header