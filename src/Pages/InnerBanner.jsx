import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Assets/images/banner/25.jpg'

function InnerBanner(props) {
  return (
    <>
        <div className="inner-banner" 
        style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            paddingTop: '170px'
            
        }}
        >
            <div className="title" style={{position:"relative"}}>
                <h1>{props.title}</h1>
                <span><Link to="/">Home</Link> <i className="fa fa-bolt" aria-hidden="true">

                </i><span className="last"> {props.page}</span></span>
            </div>    
        </div>
    </>
  )
}

export default InnerBanner