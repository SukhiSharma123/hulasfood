import React, { useState } from 'react'
import InnerBanner from './InnerBanner'

function AssociateCompany() {
    const [toggle, setToggle] = useState("menu0")

    const handleToggle = (value) => {
        console.log(value)
        setToggle(value)
    }
    return (
        <>  
            <InnerBanner title="Associate Company" page="Associate Company"/>
            <div className="aboutouter-company">
                <div className="aboutbox-company">
                    <div className="aboutmain">
                        <div className="tabbox text-center">
                            <ul className="row nav nav-tabs" style={{borderBottom: "1px solid #ddd"}}>
                            <li className={toggle === 'menu0' ? 'col-md-4 btn active' : 'col-md-4 btn'} onClick={() => handleToggle('menu0')}>Barsha rice and flour mill<br></br>Pan no: 607577437</li>
                            <li className={toggle === 'menu1' ? 'col-md-4 btn active' : 'col-md-4 btn'} onClick={() => handleToggle('menu1')}>Shree ram and Govind Baba agro industries Pvt ltd<br></br>Pan no: 610226397</li>
                            <li className={toggle === 'menu2' ? 'col-md-4 btn active' : 'col-md-4 btn'} onClick={() => handleToggle('menu2')}>Ravishankar agro industries Pvt ltd<br></br>Pan no: 610149524</li>
                            </ul>
                        </div>
                        <div className="abouttext-company">
                            <div className="tab-content">
                            <div id="menu0" className={toggle === 'menu0' ? 'tab-pane active in' : 'tab-pane fade'}>
                                <ul>
                                <li>Hulas Atta</li>
                                <li>Royal Choice Basmati Rice</li>
                                <li>Suji</li>
                                <li>Hulas P. Basmati Rice</li>
                                <li>Resham Mansuli Rice, Non Steam</li>
                                <li>Zeera Masino Rice</li>
                                <li>Sonam Rice</li>
                                <li>Shiv Bhog Rice, Non Steam</li>
                                <li>Hulas P. Rahar Dal</li>
                                <li>Masoor Dal</li>
                                <li>Supriya Long Grain Rice</li>
                                <li>Atta Regular</li>
                                <li>Hulas Besan</li>
                                <li>Hulas Nepali Jeera Rice</li>
                                <li>Hulas Nepali Sonam Rice</li>
                                <li>Hulas Bhuja</li>
                                </ul>
                            </div>
                            <div id="menu1" className={toggle === 'menu1' ? 'tab-pane active in' : 'tab-pane fade'}>
                                <ul>
                                    <li>Premium Mansuli - Jhapako Masino Chamal, Steam</li>
                                    <li>Shiv Bhog Rice, Steam</li>
                                    <li>Hulas Gouri Basmati Rice</li>
                                    <li>Idly Mansuli Rice</li>
                                    <li>Idly Basmati Rice</li>
                                    <li>Hulas Super Fine Chiura</li>
                                                                                    <li>Hulas Kurum Kurum Chiura</li>
                                </ul>
                            </div>
                            <div id="menu2" className={toggle === 'menu2' ? 'tab-pane active in' : 'tab-pane fade'}>
                                <ul>
                                    <li>Hulas Bikaneri Papad</li>
                                    <li>Hulas Masala Papad</li>
                                    <li>Hulas Surya Papad </li>
                                    <li>Jain Papad</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssociateCompany