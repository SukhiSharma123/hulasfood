import React from 'react'
import kheer from '../Assets/images/Kheer.jpg'
import dinner from '../Assets/images/dinner.jpg'
import paratha from '../Assets/images/paratha.jpg'

function Services() {
  return (
    <>
    
    <div className="home-two-services-area">
          <div className="container-fluid acurate">
              <div className="row acurate">
                  <ul>
                      <li>
                          <div className="single-services">
                                <img src={kheer} alt="" style={{minHeight:"100px"}} />
                                <h3>Kheer</h3>
                                <p>Learn the stepwise method to prepare Kheer for extra test for your lunch and Dinner
                                   with Hulas products. Hulas Food is perfect for Kheer.
                                </p>
                                <div className="read-more"><a href="#">VIEW RECIPES</a></div>                           
                          </div>                                                       
                      </li>
                      <li>
                          <div className="single-services">
                                <img src={dinner} alt="" style={{minHeight:"100px"}} />
                                <h3>Pulao</h3>
                                <p>Learn the stepwise method to prepare pulao for your family with Hulas products.
                                   Hulas Food is perfect for the pulao.
                                </p>
                                <div className="read-more"><a href="#">VIEW RECIPES</a></div>                           
                          </div>                                                       
                      </li>
                      <li>
                          <div className="single-services">
                                <img src={paratha} alt="" style={{minHeight:"100px"}} />
                                <h3>Paratha</h3>
                                <p>Learn the stepwise method to prepare paratha for your family with Hulas products.
                                   Hulas Food is perfect for the paratha.</p>
                                <div className="read-more"><a href="#">VIEW RECIPES</a></div>                           
                          </div>                                                       
                      </li>
                  </ul>
              </div>
          </div>
        </div>
    </>
  )
}

export default Services