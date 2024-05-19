import React, { useState, useEffect } from 'react';

function Header() {
    const [active, setActive] = useState(false);
    
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
    return (
        <>
            {/* <header>
                <div class="header-area header-area2 sticky-header" style={{padding:"0px", background:"rgba(0,0,0,0)"}}>
                    <div id="logo" class="text-center" style={{paddingTop:"10px"}}> <a href="index.php"><img src="https://img.freepik.com/premium-vector/food-logo-vector-silhouette-black-color-illustration-3_554682-6453.jpg" alt="logo" style={{maxHeight:"90px"}}/></a> </div>
                    <div class="container">
                        <div id="logo-sticky" class="text-center"><a href="index.php"><img src="https://img.freepik.com/premium-vector/food-logo-vector-silhouette-black-color-illustration-3_554682-6453.jpg" style={{maxHeight:"90px", paddingTop:"0px", marginTop:"-10px"}}  alt="logo"/></a> </div>
                        <div class="row margin"> <a href="" class="rs-menu-toggle rs-menu-toggle-close"><i class="fa fa-bars"></i>Menu</a>
                            <nav class="rs-menu rs-menu-close" style={{height:"0px"}}>
                                <ul class="nav-menu">
                                    <li><a href="index.php" style={{color:"#fff"}}><i class="fas fa-home"></i>Home</a></li>
                                    <li> <a href="about.php">About Us</a></li>
                                    <li> <a href="products.php">Our Products</a></li>
                                    <li> <a href="recipes.php">Recipes</a></li>
                                    <li> <a href="companies.php">Associate Company</a></li>
                                    <li><a href="careers.php">Career</a></li>
                                    <li><a href="contact_us.php">Contact Us</a></li>
                                    <li><a href="complains.php">Complains</a></li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </header> */}


            <header>
    
  <div class={`header-area header-area2 ${active ? 'sticky-header' : ''}`} style={{padding:"0px", background:"rgba(0,0,0,0)"}}>
    <div id="logo" class="text-center" style={{paddingTop:"10px"}}> <a href="index.php"><img src="https://img.freepik.com/premium-vector/food-logo-vector-silhouette-black-color-illustration-3_554682-6453.jpg" alt="logo" style={{maxHeight:"90px"}}/></a> </div>
    <div class="container">
      <div id="logo-sticky" class="text-center"><a href="index.php"><img src="https://img.freepik.com/premium-vector/food-logo-vector-silhouette-black-color-illustration-3_554682-6453.jpg" style={{maxHeight:"90px", paddingTop:"0px", marginTop:"-10px"}} alt="logo"/></a> </div>
      <div class="row margin"> <a class="rs-menu-toggle rs-menu-toggle-close"><i class="fa fa-bars"></i>Menu</a>
        <nav class="rs-menu rs-menu-close" tyle={{height:"0px"}}>
          <ul class="nav-menu">
            <li class="active"><a href="index.php" style={{color:"#fff"}} class="active"><i class="fas fa-home"></i>Home</a></li>
            <li> <a href="about.php">About Us</a></li>
            <li> <a href="products.php">Our Products</a></li>
            <li> <a href="recipes.php">Recipes</a></li>
            <li> <a href="companies.php">Associate Company</a></li>
            <li><a href="careers.php">Career</a></li>
            <li><a href="contact_us.php">Contact Us</a></li>
            <li><a href="complains.php">Complains</a></li>
            
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