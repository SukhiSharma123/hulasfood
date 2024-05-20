import React from 'react'
import '../Assets/css/testimonial-style.css'

function Testimonial() {
  return (
    <>

<div className="demo">
    <div className="container">
        <div className="row">
            <div className="col-md-6 mt-4">
                {/* <div id="testimonial-slider" className="owl-carousel"> */}
                    <div className="testimonial">
                        <div className="pic">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"/>
                        </div>
                        <h3 className="title">Williamson</h3>
                        <span className="post">Web Developer</span>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat sit vitae, consectetur adipisicing elit ipsam.
                        </p>
                    </div>
                    </div>
                    <div className="col-md-6 mt-4">
                    <div className="testimonial">
                        <div className="pic">
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"/>
                        </div>
                        <h3 className="title">Kristina</h3>
                        <span className="post">Web Designer</span>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam ipsum minima modi necessitatibus nemo officia, omnis perferendis placeat sit vitae, consectetur adipisicing elit ipsam.
                        </p>
                    </div>
                {/* </div> */}
            </div>
        </div>
    </div>
</div>
                    
    </>
  )
}

export default Testimonial

