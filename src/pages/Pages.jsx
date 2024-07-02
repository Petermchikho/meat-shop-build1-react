import React from "react"
import HeroGeneral from "../components/HeroGeneral"
import GetAQuote from "./Home/GetAQuote"
import FAQ from "../components/FAQ"
import Shape1 from "../assets/images/about_shape01.png"
import Shape2 from "../assets/images/about_shape02.png"
import {Link} from "react-router-dom"
import MeatType from "../components/PagesComponents/MeatType"
import Services from "../components/PagesComponents/Services"
import Meat1 from "../assets/images/cat_icon01.png"
import Meat2 from "../assets/images/cat_icon02.png"
import Meat3 from "../assets/images/cat_icon03.png"
import Meat4 from "../assets/images/cat_icon04.png"
import AboutIcon from "../assets/images/about_icon.png"
export default function Pages(){
    return(
        <div id="about">
            <HeroGeneral
                title="services"
            />
            <section class="services">
                <div class="services-top">
                    <div class="services-top-details">
                        <div class="services-top-details-left">
                            <p class="fancy-text">
                                Customer Quotes
                            </p>
                            <h5>                        
                                Organic Premium 
                            </h5>
                            <h5 class="margin-bottom">
                                <span class="red">Quality</span>  
        
                            </h5>
                            <Link to="/about">
                                <button>
                                    More about

                                </button>
                            </Link>
                            

                        </div>
                        <div class="services-top-details-right">
                            <MeatType 
                            image={Meat1}
                            name="Duck Meat"
                            
                            />
                            <MeatType 
                            image={Meat2}
                            name="Chicken Meat"
                            
                            />
                            <MeatType 
                            image={Meat3}
                            name="Horse Meat"
                            
                            />
                           <MeatType 
                            image={Meat4}
                            name="Sheep Meat"
                            
                            />
                            
                        </div>

                    </div>
                    <h1>About</h1>
                    
                        <img class="shapes" src={Shape1} alt="" />
                        <img class="shapes" src={Shape2} alt="" />
                    
                </div>
                <div class="services-bottom">
                    
                    
                </div>
            </section>
            <section class="our-services">
                <div class="our-services-left">
                    <p class="fancy-text">
                        Our services
                    </p>
                    <h5 class="margin-bottom">
                        Offer Premium <span class="red">Quality</span>  

                    </h5>
                    <div class="paragraph">
                        <p>We provide well shaped fresh and organic meat from our farm very hygienic way.</p>
                    </div>
                    <p class="bolder"><img src={AboutIcon} alt=""/>Shaped fresh and organic meat our farm</p>
                    <div class="time-icon">
                        <div class="icon">
                            <i class="flaticon-gift-1">

                            </i>

                        </div>
                        <div class="time">   
                        <span class="red">Friday ( 30% Off )</span>
                        <span class="time-bottom">2:30 PM - 7:30 PM </span>
                        </div>
                    </div>
                    <div class="our-services-button"><Link to="/products"><button>Shop Now</button></Link></div>

                </div>
                <div class="our-services-right">
                    <Services 
                     icon="flaticon-online-shop"
                     number="01"
                     title="Organic Product"
                     description="We provide well shaped fresh and the organic meat from"
                    />
                    <Services 
                     icon="flaticon-gift-1"
                     number="02"
                     title="Payment Secure"
                     description="We provide well shaped fresh and the organic meat from"
                    />
                    <Services 
                     icon="flaticon-chicken-wings"
                     number="03"
                     title="100% Organic Meat"
                     description="We provide well shaped fresh and the organic meat from"
                    />
                    <Services 
                     icon="flaticon-chicken"
                     number="04"
                     title="Organic Product"
                     description="We provide well shaped fresh and the organic meat from"
                    />
                    

                </div>

            </section>
            <GetAQuote />
            <FAQ />
        
        </div>
    )
}