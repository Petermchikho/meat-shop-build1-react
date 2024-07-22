import React , { useRef, useState } from "react"
import HeroGeneral from "../components/HeroGeneral"
import {useLocation,NavLink,Link,Outlet,useLoaderData,useOutletContext,Await,useParams} from "react-router-dom"

import ProductShop from "../components/ShopComponents/ProductShop"
import ShopDateCount from "../components/ShopComponents/ShopDateCount"
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
import {getProducts} from "../api"
import {requireAuth} from "../utils"
import {selectAllProducts,selectAllCartProducts,getProductsStatus,getProductsError,fetchProducts} from "../store/productsSlice"
import { useSelector,useDispatch } from "react-redux";
import {productsActions} from "../store/productsSlice"


export default function ShopDetail(){
    const dispatch=useDispatch()
    const productsRedux=useSelector(selectAllProducts)
    const productsCart=useSelector(selectAllCartProducts)
    const productsStatus=useSelector(getProductsStatus)
    const error=useSelector(getProductsError)
    console.log("the products cart ",productsCart )
    
    React.useEffect(()=>{
        if(productsStatus=== 'idle'){
            dispatch(fetchProducts())
        }
    },[productsStatus,dispatch])
    const params=useParams()
    const id=params.id
    function addition(){
        dispatch(productsActions.addToCart({id}))
    }
    function subtract(){
        dispatch(productsActions.removeFromCart({id})) 
    }
    function showCart(){
      dispatch(productsActions.showCartItems())
    }
    const products=productsRedux
    const productArray=products.filter((item)=>item.id === params.id)
    const product=productArray[0]
    const productRelated=products.filter((item)=>item.category === product.category)
    console.log("the product single ok",product )
    console.log("the hell")
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    
    
    
    
    const Location=useLocation();
    const search= Location.state?.search || ""
    
    return(
        <div id="about">
        <HeroGeneral
             title="shop now"
        />
        <section className="back-to-all-button">
          <Link to={`..?${search}`} relative="path">
           <button><i className="bi bi-arrow-left"></i>Back to all Products</button>
          </Link>
        </section>
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
                    <img src="https://2024-petermchikho.netlify.app/build-1/assets/images/shop_details01.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://2024-petermchikho.netlify.app/build-1/assets/images/shop_details02.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://2024-petermchikho.netlify.app/build-1/assets/images/shop_details03.jpg" />
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
                    <img src="https://2024-petermchikho.netlify.app/build-1/assets/images/shop_details01.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://2024-petermchikho.netlify.app/build-1/assets/images/shop_details02.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://2024-petermchikho.netlify.app/build-1/assets/images/shop_details03.jpg" />
                  </SwiperSlide>
                  
                </Swiper>
              </div>
              <div class="shop-details-right">
                <h5>
                    {product.title}
                </h5>
                <div class="review-count">
                    <div class="review-stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <span>( {product.review} customer reviews)</span>
                    </div>
                </div>
                <div class="price-status">
                    <p class="price-details red">
                        {product.price}
                    </p>
                    <p class="status">
                        - In stock
                    </p>
                </div>
                <ShopDateCount />
                <div class="minor-details-sale">
                    <p>{product.description}</p>
                </div>
                <div class="minor-details-sale">
                    <p>Quantity :</p>
                </div>
                <div class="purchase-quantity">
                    <div class="quantity">
                        <div class="add-sub">
                            <span class="subtract hover" onClick={subtract}>-</span>
                            <span class="border">{product.amount}</span>
                            <span class="add hover" onClick={addition}>+</span>
                        </div>
                        <div class="purchase-button" onClick={showCart}>
                            <span>Purchase</span>
                        </div>
                    </div>
                    <div class="Buy-now" onClick={showCart}>
                        <span>Add to cart</span>
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
                            00{product.id}  
                        </span>
                    </div>
                    <div class="random">
                        <span class="random-left">
                            CATEGORY:
                        </span>
                        <span class="random-right">
                            {product.category}
                        </span>
                    </div>

                </div>
              </div>
        </section>
        <section class="description-review">
            <div class="nav">
                <div class="nav-elements">
                    <NavLink to="." end relative="path" className={({isActive})=>isActive ? "active" : ""}>
                        Description
                    </NavLink>
                    <span>-</span>
                    <NavLink to="review" relative="path" className={({isActive})=>isActive ? "active" : ""}>
                        Review(0)
                    </NavLink>
                </div>
                <div class="nav-line"></div>
                <div class="nav-line"></div>
            </div>
            <Outlet context={{product}}/>
            
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
                  productRelated.map((item)=>{
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