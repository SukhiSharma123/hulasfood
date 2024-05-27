import React from 'react';

const ProductDetailModal = (props) => {

    
    return (
        <div>
            
            <div>
            <div 
            className={`modal fade ${props.isOpen ? 'show' : ''}`}
            tabIndex="-1"
            role="dialog"
            style={{ display: props.isOpen ? 'block' : 'none', zIndex:"9999" }}
            onRequestClose={props.onClose}
            >
                <div className="modal-dialog modal-xl modal-dialog-centered printable-content">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title">{props?.product?.name}</h6>
                            <button type="button" onClick={props.onClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className="col-md-6">
                                    <img src={props?.product?.image} alt="product" style={{width:"100%", height:"250px", border:"1px solid #ddd", borderRadius:"10px"}}/>
                                </div>
                                <div className="col-md-6">
                                    <p><span style={{fontWeight:"bold", fontSize:"20px"}}>{props?.product?.name}</span></p>
                                    <p><span style={{fontWeight:"bold", fontSize:"16px"}}>Description: </span><br></br>{props?.product?.description}</p>
                                    <p><span style={{fontWeight:"bold", fontSize:"16px"}}>Price: </span><br></br><span style={{color:"red"}}>{props?.product?.price}</span></p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div style={{float:"right", marginTop:"20px", marginBottom:"20px"}}>
                                <button className='btn btn-warning' onClick={props.onClose} style={{marginLeft:"5px", backgroundColor:"#efefef", color:"#555", border:"none"}}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProductDetailModal;