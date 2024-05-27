import React from 'react'
import logo from '../Assets/images/logo/logo.png'
import wa from '../Assets/images/logo/wa.png'

function Footer() {
  return (
    <>
    <footer className="spc-large">
  <div className="container"> 
    
    
    <div className="logo text-center"> <a href="index.php"> <img src={logo} style={{maxHeight:"110px"}} alt="logo"/></a> </div>
    <div className="logo text-center" style={{marginTop:"25px"}}> <a href="index.php"> <img src={wa} style={{maxHeight:"110px"}} alt="logo"/></a> </div>
    
    
    <div className="social-icon text-center">
      <ul className="text-center">
        <li> <a href="https://www.facebook.com/profile.php?id=100090009187497&mibextid=rS40aB7S9Ucbxw6v" target='_blank'><i className="fab fa-facebook" aria-hidden="true"></i></a> </li>
        <li> <a href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a> </li>
        <li> <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a> </li>
        <li> <a href="#"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a> </li>
        <li> <a href="#"><i className="fab fa-vimeo" aria-hidden="true"></i></a> </li>
      </ul>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-md-offset-1">
        <div className="address">Main Road, Biratnagar -2<br/>
        Province-1, Nepal</div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <div className="phone"> <a href="tel:+977-21-515627"> +977-21-515627</a><br/>
          <a href="tel:+977-21-514395">+977-21-514395</a> </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <div className="email"> <a href="mailto:info@hulasfood.com ">info@hulasfood.com </a> 
        <a href="mailto:www.hulasfood.com">www.hulasfood.com</a> </div>
      </div>
      <div className="copyright text-center">© 2024 <span>Bhudeo Khadya Udyog (P) Ltd.</span> All Rights Reserved. <br/>
      Powered by <a href="">Kritrima Tech</a></div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer