import React from 'react'
import ceo from '../Assets/images/members/ceo.jpeg';
import cto from '../Assets/images/members/cto.jpeg';
import member from '../Assets/images/members/member.jpeg';

function CompanyMembers() {
  return (
    <>
        <div id="testimonial" className="spc-equal" style={{background:"#f5f5f5", marginTop:"30px", paddingTop:"30px", paddingBottom:"50px"}}>
            <div className="container">
                <div className="row">
                    <h2 className="sec-title">Our Team</h2>
                    <h3 className="sec-sub-title" style={{color:"#555"}}>Our Team Members</h3>
                    <div id="testimonal-two" className="owl-carousel">
                        <div className="videolist" style={{marginTop:"30px", maxWidth:"900px", margin:"0px auto", padding:"20px"}}>
                             <div className="row">


                                  <div className="col-sm-4 mt-2">
                                       <div className="videoone" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                            {/* <button className="playbtn"><i className="fas fa-play"></i></button> */}
                                            <img alt='' src={ceo} style={{height:"300px", width:"100%"}}/>
                                            <p style={{fontWeight:"bold", fontSize:"20px", textAlign:"center"}}>Name, <span style={{fontSize:"12px"}}>Position</span></p>
                                            
                                       </div>
                                  </div>

                                  <div className="col-sm-4 mt-2">
                                       <div className="videoone" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            {/* <button className="playbtn"><i className="fas fa-play"></i></button> */}
                                            <img alt='' src={cto} style={{height:"300px", width:"100%"}}/>
                                            <p style={{fontWeight:"bold", fontSize:"20px", textAlign:"center"}}>Name, <span style={{fontSize:"12px"}}>Position</span></p>
                                       </div>
                                  </div>

                                  <div className="col-sm-4 mt-2">
                                       <div className="videoone" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            {/* <button className="playbtn"><i className="fas fa-play"></i></button> */}
                                            <img alt='' src={member} style={{height:"300px", width:"100%"}}/>
                                            <p style={{fontWeight:"bold", fontSize:"20px", textAlign:"center"}}>Name, <span style={{fontSize:"12px"}}>Position</span></p>
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

export default CompanyMembers