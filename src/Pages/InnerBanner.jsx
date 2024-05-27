import React from 'react'

function InnerBanner() {
  return (
    <>
        <div className="inner-banner" 
        style={{
            backgroundImage: 'url("images/banner/25.jpg")',
            backgroundSize: 'cover',
            paddingTop: '170px'
            
        }}
        >
            <div className="title" style={{position:"relative"}}>
                <h1>Associate Company</h1>
                <span><a href="index.php">Home</a> <i className="fa fa-bolt" aria-hidden="true">

                </i><span className="last"> Associate Company</span></span>
            </div>    
        </div>
    </>
  )
}

export default InnerBanner