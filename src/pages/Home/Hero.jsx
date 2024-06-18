import React from "react"
import BannerImg from "../../assets/images/banner_img.png"
import BannerShape1 from "../../assets/images/banner_shape01.png"
import BannerShape2 from "../../assets/images/banner_shape02.png"
import BannerShape3 from "../../assets/images/banner_shape03.png"
import BannerShape4 from "../../assets/images/banner_shape04.png"
import {Link} from "react-router-dom"
export default function Hero(){
    return(
        <>
          <section className="hero section-padding">
           
           <div className="hero-content">
               <h2>
                   Fresh Meat
               </h2>
               <h6>
                   Butcher & Meat shop
               </h6>
               <Link to="/products">
                   <button>
                       ORDER NOW
                   </button>
               </Link>
               <img src={BannerImg} alt="banner" />
               
           </div>
           <div className="banner-shape-wrap">
               <img className="object" src={BannerShape1} data-value="-2" alt="" />
               <img className="object" src={BannerShape2} data-value="6" alt="" />
               <img className="object" src={BannerShape3} data-value="4" alt="" />
               <img className="object" src={BannerShape4} data-value="-6" alt="" />
           </div>

          </section>
        
        </>
    )
}