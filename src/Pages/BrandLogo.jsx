import React from 'react'

function BrandLogo() {
  return (
    <>
        <div class="brand-logo-area" style={{backgroundColor:"#fff"}}>
            <div class="container">
                <div id="logo-slider" class="owl-carousel owl-loaded owl-drag"> 
                    <div class="owl-stage-outer">
                        <div class="owl-stage">
                            <div class="owl-item cloned" style={{width:"172px", marginRight:"20px"}}>
                                <div class="text-center item"> 
                                    <a href="#"> 
                                        <img src="img/brands/iso.jpg" alt=""/>
                                    </a> 
                                </div>
                            </div>
                            <div class="owl-item cloned" style={{width:"172px", marginRight:"20px"}}>
                                <div class="text-center item"> 
                                    <a href="#"> 
                                        <img src="img/brands/iso.jpg" alt=""/>
                                    </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BrandLogo