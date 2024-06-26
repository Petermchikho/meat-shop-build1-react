import React , { useRef, useState } from "react"
import HeroGeneral from "../components/HeroGeneral"
import {useParams} from "react-router-dom"
import {MarketData} from "../Data/Data"
import ProductShop from "../components/ShopComponents/ProductShop"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Navigation, Thumbs ,Pagination , Autoplay} from 'swiper/modules';


export default function ShopDetail(){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const params=useParams()
    const [products,setProducts]=React.useState(MarketData)
    const product=products.filter((item)=>{
        return(item.id===(parseInt(params.id)))
    })
    function addition(id){
        setProducts((prev)=>{
            return prev.map((item)=>{
                return (item.id === id ?{...item,amount:item.amount +1} : item)
            })
        })
    }
    function subtract(id){
        setProducts((prev)=>{
            return prev.map((item)=>{
                return (item.id === id && item.amount>0 ?{...item,amount:item.amount -1} : item)
            })
        })

    }
    return(
        <div id="about">
        <HeroGeneral
             title={`${product[0].name}`}
        />
        <section class="shop-details">
              <div class="shop-details-left">
                  <Swiper
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2 first"
                >
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                  </SwiperSlide>
                  
                  
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper first"
                >
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                  </SwiperSlide>
                  
                </Swiper>
              </div>
              <div class="shop-details-right">
                <h5>
                    Necessary For Human Body
                </h5>
                <div class="review-count">
                    <div class="review-stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <span>( 4 customer reviews)</span>
                    </div>
                </div>
                <div class="price-status">
                    <p class="price-details red">
                        K 2500
                    </p>
                    <p class="status">
                        - In stock
                    </p>
                </div>
                <div class="sales-end-in">
                    <p>Hurry Up! Sale ends in:</p>
                    <div class="time-counter">
                        
                        <div class="info">
                            <span class="info-first" id="days">00</span>
                            <span>days</span>
                        </div>
                        <div class="info">
                            <span class="info-first" id="hours">00</span>
                            <span>hours</span>
                        </div>
                        <div class="info">
                            <span class="info-first" id="minutes">00</span>
                            <span>mins</span>
                        </div>
                        <div class="info">
                            <span class="info-first" id="seconds">00</span>
                            <span>secs</span>
                        </div>
                    </div>
                </div>
                <div class="minor-details-sale">
                    <p>Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times meat, the flesh</p>
                </div>
                <div class="minor-details-sale">
                    <p>Quantity :</p>
                </div>
                <div class="purchase-quantity">
                    <div class="quantity">
                        <div class="add-sub">
                            <span class="subtract hover">-</span>
                            <span class="border">0</span>
                            <span class="add hover">+</span>
                        </div>
                        <div class="purchase-button">
                            <span>Purchase</span>
                        </div>
                    </div>
                    <div class="Buy-now">
                        <span>BUY IT NOW</span>
                    </div>
                </div>
                <div class="sales-end-in">
                    <p>GUARANTEED SAFE CHECKOUT:</p>
                    <img src="../assets/images/payment_method.png" alt="" />
                </div>
                <div class="wish-list">
                    <div class="add-to">
                        <i class="bi bi-heart"></i>
                        <span>add to wishlist</span>
                    </div>
                    <div class="random">
                        <span class="random-left"> SKU:
                        </span>
                        <span class="random-right">
                            002  
                        </span>
                    </div>
                    <div class="random">
                        <span class="random-left">
                            CATEGORY:
                        </span>
                        <span class="random-right">
                            lipstick
                        </span>
                    </div>

                </div>
              </div>
        </section>
        <section class="description-review">
            <div class="nav">
                <div class="nav-elements">
                    <a href="#description">
                        Description
                    </a>
                    <span>-</span>
                    <a href="#review">
                        Review(0)
                    </a>
                </div>
                <div class="nav-line"></div>
                <div class="nav-line"></div>
            </div>
            <div class="show-content show" id="description-1">
                <p>
                    committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting and playing with them over the years, but always staying on the same track I design from instinct. It’s the only way I know how to live.
                </p>
            </div>
            <div class="show-content" id="review-1">
                <h6>                  
                 Customer Reviews (0)

                </h6>
                <p class="review">
                    
                 No reviews yet

                </p>
                <p class="write-review">
                    write a review
                </p>
            </div>
            
        </section>
        <section class="related-products">
            <div class="organic-products-intro section-padding">
                <p class="fancy-text">
                    organic products

                </p>
                <h4>
                    Related Products
                </h4>
                <img src="../assets/images/title_shape.png" alt="" />
            </div>
            <div class="related-slides ">
            <Swiper breakpoints={
                  {
                    // when window width is >= 594px
                  0: {
                      slidesPerView: 1,
                      spaceBetween: 10
                      },
                  600: {
                  slidesPerView: 2,
                  spaceBetween: 10
                  },
                  // when window width is >= 902px
                  902: {
                  slidesPerView: 3,
                  spaceBetween: 10
                  },
                  // when window width is >= 1200px
                  1200: {
                  slidesPerView: 4,
                  spaceBetween: 10
                  }
                  }
              }
              
              spaceBetween={10}
              loop= "true"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              
              className="mySwiper second"
            >
              {
                products.map((item)=>{
                  return(
                    <SwiperSlide>
                      <ProductShop 
                      key={item.id}
                      id={item.id}
                      new={item.new}
                      category={item.category}
                      name={item.name}
                      price={item.price}
                      amount={item.amount}
                      image1={item.image1}
                      onAdd={addition}
                      onSubtract={subtract}
                      />
                    </SwiperSlide>
                  )

                })
              }
              
            </Swiper>
                

            </div>
        </section>
    
        
        </div>
    )
}