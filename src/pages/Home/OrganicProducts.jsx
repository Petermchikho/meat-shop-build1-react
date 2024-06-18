import React from "react"
import { register } from "swiper/element/bundle"
import Slide1 from "../../assets/images/gallery_img01.png"
import Slide2 from "../../assets/images/gallery_img02.png"
import Slide3 from "../../assets/images/gallery_img03.png"
import ProductCool from "../../assets/images/product_shape01.png"
import TitleShape from "../../assets/images/title_shape.png"
import {OrganicProductData} from "../../Data/Data"
import HomeOrganicProducts from "../../components/HomeComponents/HomeOrganicProducts"
export default function OrganicProducts(){
    register();
    const [data,setData] =React.useState([]);
    React.useEffect(()=>{
        setData(OrganicProductData)
    },[data])
    const elements=data.map((item)=>{
        return(
            <HomeOrganicProducts
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
            />
        )
    })
    return(
        <>
         <section className="organic-products ">
            <div className="cool-shape">
                <img src={ProductCool} alt="" />
            </div>
            <div className="organic-products-intro section-padding">
                <p className="fancy-text">
                    Organic Shop
                </p>
                <h4>
                    Our Organic Products
                </h4>
                <img src={TitleShape } alt="" />
            </div>
            <div className="organic-container section-padding">
                {elements}
            </div>
            <div className="slides">
            <swiper-container
                    slides-per-view= "1.3"
                    space-between= "10"
                    centered-slides= "true"
                    watch-slides-visibility= "true"
                    loop= "true"
                    slide-to-clicked-slide= "true"
                    loop-fill-group-with-blank= "true"
                    autoplay-delay=" 2000"
                    autoplay-disable-on-interaction= " false"
                    autoplay-reverse-direction=" true"
                    pagination-el= ".swiper-pagination"
                    pagination-clickable=" true"
                      
                    
                    >
                      <swiper-slide className="swiper-slide"><img src={Slide1} alt="" /></swiper-slide>
                      <swiper-slide className="swiper-slide"><img src={Slide2} alt="" /></swiper-slide>
                      <swiper-slide className="swiper-slide"><img src={Slide3} alt="" /></swiper-slide>
                    </swiper-container>

            </div>
        </section>
        
        </>
    )
}