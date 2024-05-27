import React, { useState, useEffect } from 'react';
import logo from '../Assets/images/logo/logo.png'
import { Link } from 'react-router-dom';

function Header() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(true);
    
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setActive(true);
        } else {
          setActive(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const handleNav = () => {
        setOpen(!open);
      }
    return (
        <>
            <header>
    
              <div className={`header-area header-area2 ${active ? 'sticky-header' : ''}`} style={{padding:"0px", background:"rgba(0,0,0,0)"}}>
                <div id="logo" className="text-center" style={{paddingTop:"10px"}}> <a href="index.php"><img src={logo} alt="logo" style={{maxHeight:"90px"}}/></a> </div>
                <div className="">
                  <div id="logo-sticky" className="text-center"><a href="index.php"><img src={logo} style={{maxHeight:"90px", paddingTop:"0px", marginTop:"-10px"}} alt="logo"/></a> </div>
                  <div className=""> <a className={`rs-menu-toggle ${open ? 'rs-menu-toggle-close' : 'rs-menu-toggle-open'}`} onClick={handleNav}><i className="fa fa-bars"></i>Menu</a>
                    <nav className={`rs-menu ${open ? 'rs-menu-close' : ''}`} style={{height:"0px"}}>
                      <ul className="nav-menu">
                        <li className="active"><Link to="/" style={{color:"#fff"}} className="active"><i className="fas fa-home"></i>Home</Link></li>
                        <li> <Link to="/about-us">About Us</Link></li>
                        <li> <Link to="/products">Our Products</Link></li>
                        <li> <Link to="">Recipes</Link></li>
                        <li> <Link to="/associate-company">Associate Company</Link></li>
                        {/* <li><a href="careers.php">Career</a></li> */}
                        <li><Link to="">Contact Us</Link></li>
                        {/* <li><a href="complains.php">Complains</a></li> */}
                        
                      </ul>
                  </nav>
                  </div>
                </div>
              </div>

           </header>
        </>
    )
}

export default Header