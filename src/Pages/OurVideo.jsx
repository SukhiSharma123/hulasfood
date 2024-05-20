import React from 'react'

function OurVideo() {
  return (
    <>
    <div id="testimonial" className="spc-equal" style={{background:"#f5f5f5", marginTop:"30px", paddingTop:"30px", paddingBottom:"50px"}}>
            <div className="container">
                <div className="row">
                    <h2 className="sec-title">Our Video</h2>
                    <h3 className="sec-sub-title" style={{color:"#555"}}>Watch our Video</h3>
                    <div id="testimonal-two" className="owl-carousel">
                        <div className="videolist" style={{marginTop:"30px", maxWidth:"900px", margin:"0px auto", padding:"20px"}}>
                             <div className="row">


                                  <div className="col-sm-6 mt-2">
                                       <div className="videoone" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                            {/* <button className="playbtn"><i className="fas fa-play"></i></button> */}
                                            <img src="https://hulasfood.com/img/nhh1.jpg"/>
                                       </div>
                                  </div>

                                  <div className="col-sm-6 mt-2">
                                       <div className="videoone" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            {/* <button className="playbtn"><i className="fas fa-play"></i></button> */}
                                            <img src="https://hulasfood.com/img/nh2.jpg"/>
                                       </div>
                                  </div>


                             </div>
                        </div>
                        
                        
                    </div>
                </div>      
            </div>
        </div>


        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Video 2</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/1e09XJH01Qk" frameborder="0" className="yvideo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div> */}
                </div>
            </div>
        </div>

<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModal2Label">Video 1</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <iframe width="100%" height="500" src="https://www.youtube.com/embed/OAKoNP2j8W8" frameborder="0" className="yvideo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
    </>
  )
}

export default OurVideo