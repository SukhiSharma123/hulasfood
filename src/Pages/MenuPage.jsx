import React from 'react'

function MenuPage() {
  return (
    <>
    <div id="menu" class="menus-page-area menus-area spc-large">
    <div class="container">
        <div class="row">
          <div class="col-sm-12">
                  <h2 class="sec-title">Our Products</h2>
                  <h3 class="sec-sub-title">Find Our Product</h3>
                  <div id="filters" class="button-group">
                                                  
                                        <button style={{overflow:"hidden"}} class="btn btn-primary active" data-filter=".cat1">
                                           <img src="cp/img/uploads/98f13708210194c475687be6106a3b84.jpg" style={{height:"70px", width:"70px", borderRadius:"100%", marginBottom:"15px"}} /><br/>
                                            Rice                                         
                                        </button>
                                        <button style={{overflow:"hidden"}} class="btn btn-primary active1" data-filter=".cat2">
                                           <img src="cp/img/uploads/44f683a84163b3523afe57c2e008bc8c.jpg" style={{height:"70px", width:"70px", borderRadius:"100%", marginBottom:"15px"}} /><br/>
                                         Flour                                         </button>
                                                                                 <button style={{overflow:"hidden"}} class="btn btn-primary active1" data-filter=".cat4">
                                           <img src="cp/img/uploads/ea5d2f1c4608232e07d3aa3d998e5135.jpg" style={{height:"70px", width:"70px", borderRadius:"100%", marginBottom:"15px"}} /><br/>
                                         Chiura poha                                         </button>
                                                                                 <button style={{overflow:"hidden"}} class="btn btn-primary active1" data-filter=".cat5">
                                           <img src="cp/img/uploads/d67d8ab4f4c10bf22aa353e27879133c.jpg" style={{height:"70px", width:"70px", borderRadius:"100%", marginBottom:"15px"}} /><br/>
                                         Papad                                         </button>
                                                                                 <button style={{overflow:"hidden"}} class="btn btn-primary active1" data-filter=".cat6">
                                           <img src="cp/img/uploads/f7177163c833dff4b38fc8d2872f1ec6.jpg" style={{height:"70px", width:"70px", borderRadius:"100%", marginBottom:"15px"}} /><br/>
                                         Pulses                                         </button>
                                                                      
                                              </div>          
                    <div class="menu-page">
                        <div id="posts">

                            <div class="row">


                                <div id="1" class="item lunch cat1 col-md-6 col-sm-12">
                                    <div class="item-wrap">
                                        <div class="col-md-7 col-sm-7 col-xs-7">
                                            <div class="row">
                                                <div class="col-md-3 col-sm-3 col-xs-3">
                                                    <div class="inner-img">
                                                        <a href="#"> <img src="cp/img/uploads/33e75ff09dd601bbe69f351039152189.jpg" alt=""/></a>
                                                    </div>
                                                </div>
                                                <div class="col-md-9 col-sm-9 col-xs-9">
                                                    <div class="inner-content">
                                                        <h3>Premium Mansuli - Jhapako Masino Chamal (Steam)</h3>
                                                        <p>Premium Mansuli - Jhapako Masino Chamal (Steam)</p>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="col-md-5 col-sm-5 col-xs-5">                                    
                                            <div class="inner">
                                                <span class="price">5 Kg., 10 Kg., 25 Kg. &amp; 30 Kg.</span>
                                                <span class="order"><a href="products.php?cid=1">View Details 
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i></a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div id="2" class="item lunch cat1 col-md-6 col-sm-12">
                                    <div class="item-wrap">
                                        <div class="col-md-7 col-sm-7 col-xs-7">
                                            <div class="row">
                                                <div class="col-md-3 col-sm-3 col-xs-3">
                                                    <div class="inner-img">
                                                        <a href="#"> <img src="cp/img/uploads/33e75ff09dd601bbe69f351039152189.jpg" alt=""/></a>
                                                    </div>
                                                </div>
                                                <div class="col-md-9 col-sm-9 col-xs-9">
                                                    <div class="inner-content">
                                                        <h3>Premium Mansuli - Jhapako Masino Chamal (Steam)</h3>
                                                        <p>Premium Mansuli - Jhapako Masino Chamal (Steam)</p>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="col-md-5 col-sm-5 col-xs-5">                                    
                                            <div class="inner">
                                                <span class="price">5 Kg., 10 Kg., 25 Kg. &amp; 30 Kg.</span>
                                                <span class="order"><a href="products.php?cid=1">View Details 
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i></a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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

export default MenuPage