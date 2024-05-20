import React from 'react'
import logo from '../Assets/images/logo/logo.png'
import wa from '../Assets/images/logo/wa.png'

function Footer() {
  return (
    <>
    <footer class="spc-large">
  <div class="container"> 
    
    
    <div class="logo text-center"> <a href="index.php"> <img src={logo} style={{maxHeight:"110px"}} alt="logo"/></a> </div>
    <div class="logo text-center" style={{marginTop:"25px"}}> <a href="index.php"> <img src={wa} style={{maxHeight:"110px"}} alt="logo"/></a> </div>
    
    
    <div class="social-icon text-center">
      <ul class="text-center">
        <li> <a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a> </li>
        <li> <a href="#"><i class="fab fa-google-plus" aria-hidden="true"></i></a> </li>
        <li> <a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a> </li>
        <li> <a href="#"><i class="fab fa-pinterest-p" aria-hidden="true"></i></a> </li>
        <li> <a href="#"><i class="fab fa-vimeo" aria-hidden="true"></i></a> </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-md-offset-1">
        <div class="address">Main Road, Biratnagar -2<br/>
        Province-1, Nepal</div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <div class="phone"> <a href="tel:+977-21-515627"> +977-21-515627</a><br/>
          <a href="tel:+977-21-514395">+977-21-514395</a> </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <div class="email"> <a href="mailto:info@hulasfood.com ">info@hulasfood.com </a> 
        <a href="mailto:www.hulasfood.com">www.hulasfood.com</a> </div>
      </div>
      <div class="copyright text-center">© 2024 <span>Bhudeo Khadya Udyog (P) Ltd.</span> All Rights Reserved. <br/>
      Powered by <a href="">Kritrima Tech</a></div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer