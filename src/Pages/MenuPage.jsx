import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import poha from '../Assets/images/Products/Poha.jpg';
import rice from '../Assets/images/Products/Rice.jpg';
import floor from '../Assets/images/Products/floor.jpg';
import papad from '../Assets/images/Products/Papad.jpg';
import pulse from '../Assets/images/Products/Pulse.jpg';
import ProductDetailModal from './ProductDetailModal';

import data from '../dataset';

function MenuPage() {

    const [showProductModal, setShowProductModal] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [filterData, setFilterData] = useState('');

    const openProductModal = (product) => {
        setSelectedProduct(product);
        setModalIsOpen(true);
      };

    const handleShowProductModal = () => {
        setShowProductModal(true);
    }

    const handleHideProductModal = (e) => {
        setShowProductModal(false);
    }
    const closeProductModal = () => {
        setSelectedProduct(null);
        setModalIsOpen(false);
      };

    useEffect(() => {
        const filtered = data.filter((item) =>
            item?.category?.toLowerCase().includes(filterData.toLowerCase())
        );
        setFilteredData(filtered);
    }, [data, filterData]);


  return (
    <>
    <div id="menu" className="menus-page-area menus-area spc-large">
    <div className="container">
        <div className="row">
          <div className="col-sm-12">
                  <h2 className="sec-title">Our Products</h2>
                  <h3 className="sec-sub-title">Find Our Product</h3>
                  <div id="filters" className="button-group">
                                                  
                                        <button style={{overflow:"hidden"}} className="btn btn-primary active" data-filter=".cat1" onClick={() => setFilterData("rice")}>
                                           <img src={rice} style={{height:"70px", width:"70px", borderRadius:"100%", marginBottom:"15px"}} /><br/>
                                            Rice                                         
                                        </button>
                                        <button style={{overflow:"hidden"}} className="btn btn-primary active1" data-filter=".cat2" onClick={() => setFilterData("flour")}>
                                           <img src={floor} style={{height:"70px", width:"70px", borderRadius:"100%", marginBottom:"15px"}} /><br/>
                                         Flour                                         </button>
                                                                                 <button style={{overflow:"hidden"}} className="btn btn-primary active1" data-filter=".cat4" onClick={() => setFilterData("poha")}>
                                           <img src={poha} style={{height:"70px", width:"70px", borderRadius:"100%", marginBottom:"15px"}} /><br/>
                                         Chiura poha                                         </button>
                                                                                 <button style={{overflow:"hidden"}} className="btn btn-primary active1" data-filter=".cat5" onClick={() => setFilterData("papad")}>
                                           <img src={papad} style={{height:"70px", width:"70px", borderRadius:"100%", marginBottom:"15px"}} /><br/>
                                         Papad                                         </button>
                                                                                 <button style={{overflow:"hidden"}} className="btn btn-primary active1" data-filter=".cat6" onClick={() => setFilterData("pulse")}>
                                           <img src={pulse} style={{height:"70px", width:"70px", borderRadius:"100%", marginBottom:"15px"}} /><br/>
                                         Pulses                                         </button>
                                                                      
                                              </div>          
                    <div className="menu-page">
                        <div id="posts">

                            <div className="row">


                                {/* <div id="1" className="item lunch cat1 col-md-4 col-sm-12">
                                    <div className="item-wrap">
                                        <img src={poha} className="card-img-top" alt="..." style={{height:"250px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">View Details</a>
                                        </div>
                                    </div>
                                </div> */}
                                {filteredData.map((item, index) => {
                                    return (
                                        <>
                                            <div id="{item.id}" className="item lunch cat1 col-md-4 col-sm-12" key={{index}}>
                                                <div className="item-wrap">
                                                    <img src={item.image} className="card-img-top rounded img-thumbnail" alt="..." style={{height:"250px"}}/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.name}</h5>
                                                        <p className="card-text">{item.description}</p>
                                                        <p className="card-text" style={{color:"red"}}>{item.price}</p>
                                                        <li className="btn btn-primary" onClick={() => openProductModal(item)}>View Details</li>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                )}

                                {/* <div id="1" className="item lunch cat1 col-md-4 col-sm-12">
                                    <div className="item-wrap">
                                        <img src={pulse} className="card-img-top rounded img-thumbnail" alt="..." style={{height:"250px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Premium Mansuli - Jhapako Masino Chamal (Steam)</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <p className="card-text" style={{color:"red"}}>5 Kg., 10 Kg., 25 Kg. &amp; 30 Kg.</p>
                                            <a href="#" className="btn btn-primary">View Details</a>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div id="1" className="item lunch cat1 col-md-4 col-sm-12">
                                    <div className="item-wrap">
                                        <img src={floor} className="card-img-top rounded img-thumbnail" alt="..." style={{height:"250px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Premium Mansuli - Jhapako Masino Chamal (Steam)</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <p className="card-text" style={{color:"red"}}>5 Kg., 10 Kg., 25 Kg. &amp; 30 Kg.</p>
                                            <a href="#" className="btn btn-primary">View Details</a>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div id="1" className="item lunch cat1 col-md-4 col-sm-12">
                                    <div className="item-wrap">
                                        <img src={papad} className="card-img-top rounded img-thumbnail" alt="..." style={{height:"250px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Premium Mansuli - Jhapako Masino Chamal (Steam)</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <p className="card-text" style={{color:"red"}}>5 Kg., 10 Kg., 25 Kg. &amp; 30 Kg.</p>
                                            <a href="#" className="btn btn-primary">View Details</a>
                                        </div>
                                    </div>
                                </div> */}


                        

                            </div> 
                        
                        </div>
                    </div>
            </div>
        </div>
    </div>    
</div>
<ProductDetailModal
    product={selectedProduct}
    isOpen={modalIsOpen}
    onClose={closeProductModal}
/>
    </>
  )
}

export default MenuPage