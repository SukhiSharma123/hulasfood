import React from 'react'
import InnerBanner from './InnerBanner'
import image from '../Assets/images/members/ceo.jpeg'

function AboutPage() {
    return (
        <>
            <InnerBanner title="About Us" page="About Us"/>
            <div class=" container aboutouter">
                <div class="aboutbox">


                    <div class="aboutmain">

                        <div class="abouttext row">
                            <div className="col-md-3">
                                <img src={image} alt="maingolchha" style={{width:"100%"}}/>
                            </div>
                            <div className="col-md-9">
                                <p>The rice grain in famous for its versatility and is a supremely important crop over 150 million hectares of paddy fields around the world yield nearly 500 million tons of rice. Rice provides about 21% of the total food calories consumed by the people of the world. The most demanding Basmati rice is cultivated in the large field of Eastern Tarai region of Nepal: Jhapa, Morang, Sunsari. The particular soil and climate of this region is thought to account for Basmati's unique taste and texture. Among 14000 varieties of Rice available in the world, eastern region of the country is famous for Mansuli and Kanchi Sona rice too. But unique basmati is excellent in almost any breviary rice dish and is perfect for countless rice recipes across the country.</p><p>Bhudeo Khadya Udyog(P) Ltd. is an expanded and diversify units of M/s Hans Rice Mills Pvt Ltd. Founded in 1962 A.D. by Late Shree Ramlal ji Golchha the great Philanthropist &amp; founder of Golchha Organisation. Similarly Dhiraj Chamal Udyog (P) Ltd. is another unit established in Eastern Nepal.</p><p>Always focused towards the consumer's taste and preferences the company enjoys a formidable share in the rice market under a renowned &amp; reputed brand name of Hulas. And as classic rice recipes sit alongside dishes, the company is moving towards a bright future. Dhiraj Chamal Udyog (P) Ltd. also produce the finest range of Beaten Rice (Chiura) an oven dry fresh &amp; delicious item.</p><p>The Plant was set up by world renowned German Technology, operational know how &amp; high skilled. It has State of the art manufacturing facilities the products are very stringently tested for conformation to international standards. The Product range is diverse and packing range is wide it has products for all strata of society.</p><p>The factory is professionally managed by a team of visionaries and experts functionally specialized in their area of operation the factory systems are fully computerized.</p><p>Bhudeo Food and Snacks Industries (P) Ltd. an unit of Golchha Organisation manufacturing various food production. The Unit is at Biratnagar. Recently it brings in the market delicious verities of Papad. It is eaten as an appetizer or a snack and can be eaten with various toppings such as chopped onions chutney or other dips and condiments.</p><p>Whenever you need papad, you can count on 'HULAS' just Roast or fry it and use it for your breakfast, lunch, tiffin and dinner or as
                                    plain. You will love the taste. After all it is from Hulas. The famous ' Hulas Bhaye Aru Kin Khojne.</p>
                            </div>
                        </div>



                    </div>





                </div>
            </div>
        </>
    )
}

export default AboutPage