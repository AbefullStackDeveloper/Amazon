import React from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Product from "./Product";
import { Carousel } from 'react-responsive-carousel';

            function Home() {
            return (
                <div className="home">
                    <div className="home__container">
                        <Carousel
                        renderIndicator={false}
            showThumbs={false}
            className="home__image"
            autoPlay
            interval={2000}
            infiniteLoop
            // showArrows={false}
                    >
                    
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmVhMDM4ZmYt/ZmVhMDM4ZmYt-OTdjNmEzYzMt-w1500._CB668936041_.jpg" />
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDU3MTYxZjAt/ZDU3MTYxZjAt-NmMzZGE3YTYt-w1500._CB663411053_.jpg" />
                    
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
                    
                </div>
            </Carousel>
                <div className="home__row">
                <Product
                    id="12321341"
                    title="LG OLED65C1PUB Alexa Built-in C1 Series 65 4K Smart OLED TV (2021)"
                    price={2096.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91xRBg00xZL._AC_SR180,120_QL70_.jpg"
                />
                <Product
                    id="49538094"
                    title="GOOD & GRACIOUS Corner Curio Cabinet with Tempered Glass Door and Light System 6-Tier with Adjustable Glass Shelves Display Cabinet, Walnut"
                    price={275.0}
                    rating={5}
                        image=   "	https://m.media-amazon.com/images/I/81FGOyAHzuS._AC_UL320_.jpg"
                />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Dazzlingrock Collection
                                0.60 Carat (ctw) 10K Gold Round White Diamond Ladies Split Shank"
                        price={530.15}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81tVeylnOvL._AC_UL320_.jpg"
                    />
                <Product
                    id="23445930"
                    title="Sony a7 III (ILCEM3K/B) Full-frame Mirrorless Interchangeable-Lens Camera with 28-70mm Lens with 3-Inch LCD, Black"
                    price={2198.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91rQ3XfEYzL._AC_UY327_QL65_.jpg"
                />
                <Product
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
                </div>
                <div className="home__row">
                <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
                    </div>
                    <div className="home__row">
            <Product
                id="903850"
                title="Samsung Galaxy Watch (42mm) Smartwatch (Bluetooth) Android/iOS Compatible -SM-R810 – Intenational Version -No Warranty … (Rose Gold) (Renewed"
                price={109.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/71UFfCHSTVL._AC_UL320_.jpg"
            />
            <Product
                id="8903851"
                title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
                price={999.99}
                rating={4}
                    image="https://m.media-amazon.com/images/I/51IE4NSsceS._AC_SY200_.jpg"
            />
            <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            </div>
            </div>
            </div>
        );
        }

        export default Home;
