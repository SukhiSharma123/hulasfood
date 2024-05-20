import React, { useState, useEffect } from 'react';
import logo from '../Assets/images/logo/logo.png'

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
                        <li className="active"><a href="index.php" style={{color:"#fff"}} className="active"><i className="fas fa-home"></i>Home</a></li>
                        <li> <a href="about.php">About Us</a></li>
                        <li> <a href="products.php">Our Products</a></li>
                        <li> <a href="recipes.php">Recipes</a></li>
                        <li> <a href="companies.php">Associate Company</a></li>
                        {/* <li><a href="careers.php">Career</a></li> */}
                        <li><a href="contact_us.php">Contact Us</a></li>
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