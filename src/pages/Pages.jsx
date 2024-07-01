import React from "react"
import HeroGeneral from "../components/HeroGeneral"
import GetAQuote from "./Home/GetAQuote"
import FAQ from "../components/FAQ"
import Shape1 from "../assets/images/about_shape01.png"
import Shape2 from "../assets/images/about_shape02.png"
import {Link} from "react-router-dom"
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
                            <div class="services-container-holder">
                                <div class="services-container-round">
                                    <div class="services-container-round-inner">
                                        <img src="../assets/images/cat_icon01.png" alt=""/>
                                        
                                    </div>
                                    
                
                                </div>
                                <p>Duck Meat</p>
                            </div>
                            <div class="services-container-holder">
                                <div class="services-container-round">
                                    <div class="services-container-round-inner">
                                        <img src="../assets/images/cat_icon02.png" alt="" />
                                        
                                    </div>
                                    
                
                                </div>
                                <p>Duck Meat</p>
                            </div>
                            <div class="services-container-holder">
                                <div class="services-container-round">
                                    <div class="services-container-round-inner">
                                        <img src="../assets/images/cat_icon03.png" alt="" />
                                        
                                    </div>
                                    
                
                                </div>
                                <p>Duck Meat</p>
                            </div>
                            <div class="services-container-holder">
                                <div class="services-container-round">
                                    <div class="services-container-round-inner">
                                        <img src="../assets/images/cat_icon04.png" alt="" />
                                        
                                    </div>
                                    
                
                                </div>
                                <p>Duck Meat</p>
                            </div>
                            
                            
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
                    <p class="bolder"><img src="../assets/images/about_icon.png" alt=""/>Shaped fresh and organic meat our farm</p>
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
                    <div class="services-box">
                        <div class="services-box-top">
                            <div class="icon-number">
                                <i class="flaticon-online-shop">

                                </i>
                            </div>
                            <div class="number">
                                <span>
                                    01
                                </span>
                            </div>
                        </div>
                        <div class="services-bottom-box">
                            <p class="title">Organic Product

                            </p>
                            <div class="paragraph">
                                <p>We provide well shaped fresh and the organic meat from</p>
                            </div>
                        </div>
                    </div>
                    <div class="services-box">
                        <div class="services-box-top">
                            <div class="icon-number">
                                <i class="flaticon-gift-1">

                                </i>
                            </div>
                            <div class="number">
                                <span>
                                    02
                                </span>
                            </div>
                        </div>
                        <div class="services-bottom-box">
                            <p class="title">Payment Secure

                            </p>
                            <div class="paragraph">
                                <p>We provide well shaped fresh and the organic meat from</p>
                            </div>
                        </div>
                    </div>
                    <div class="services-box">
                        <div class="services-box-top">
                            <div class="icon-number">
                                <i class="flaticon-chicken-wings">

                                </i>
                            </div>
                            <div class="number">
                                <span>
                                    03
                                </span>
                            </div>
                        </div>
                        <div class="services-bottom-box">
                            <p class="title">100% Organic Meat

                            </p>
                            <div class="paragraph">
                                <p>We provide well shaped fresh and the organic meat from</p>
                            </div>
                        </div>
                    </div>
                    <div class="services-box">
                        <div class="services-box-top">
                            <div class="icon-number">
                                <i class="flaticon-chicken">

                                </i>
                            </div>
                            <div class="number">
                                <span>
                                    04
                                </span>
                            </div>
                        </div>
                        <div class="services-bottom-box">
                            <p class="title">Organic Product

                            </p>
                            <div class="paragraph">
                                <p>We provide well shaped fresh and the organic meat from</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <GetAQuote />
            <FAQ />
        
        </div>
    )
}