import React , { useRef, useState } from "react"
import HeroGeneral from "../components/HeroGeneral"
import {useLocation,NavLink,Link,Outlet,useLoaderData,useOutletContext,Await} from "react-router-dom"
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
import {getProducts} from "../api"
import {requireAuth} from "../utils"

export async function loader({params,request}){
  await requireAuth(request)
  return getProducts(params.id)
}

export default function ShopDetail(){
    const dataProduct=useLoaderData()
    const {allProducts}=useOutletContext()
    const [products,setProducts]=React.useState([])
    const [product,setProduct]=React.useState(dataProduct)
    const [timerDays,setTimerDays] = useState("00");
    const [timerHours,setTimerHours] = useState("00");
    const [timerMinutes,setTimerMinutes] = useState("00");
    const [timerSeconds,setTimerSeconds] = useState("00");

    let interval = useRef();
    const startTimer=()=>{
      const countDownDate =new Date("Jul 30, 2024 00:00:00").getTime();
      interval=setInterval(() => {
          const now =new Date().getTime();
          const distance = countDownDate - now
          const days =Math.floor(distance / (1000* 60 * 60 * 24));
          const hours =Math.floor((distance % (1000* 60 * 60 * 24))/ (1000* 60 * 60 ));
          const minutes =Math.floor((distance % (1000* 60 * 60))/ (1000* 60 ));
          const seconds =Math.floor((distance % (1000* 60 ))/ (1000 ));
          if(distance <0){
              clearInterval(interval.current);
          }else{
            setTimerDays(days)
            setTimerMinutes(minutes)
            setTimerHours(hours)
            setTimerSeconds(seconds)

          }
      }, 1000);

    }
    React.useEffect(()=>{
      startTimer();
      return ()=>{
        clearInterval(interval.current);
      }

    },[])

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    
    
    
    
    const Location=useLocation();
    const search= Location.state?.search || ""
    const locationAmount=Location.state?.amount || 0
    const [amount,setAmount]=React.useState(locationAmount)
    function additionProduct(){
      setAmount((prev)=>{
          return prev+1
      })
  }
  function subtractProduct(){
      setAmount((prev)=>{
          if(prev>0){
            return prev-1 
          }else{
            return prev
          }
      })

  }
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
                <div class="sales-end-in">
                    <p>Hurry Up! Sale ends in:</p>
                    <div class="time-counter">
                        
                        <div class="info">
                            <span class="info-first" id="days">{timerDays}</span>
                            <span>days</span>
                        </div>
                        <div class="info">
                            <span class="info-first" id="hours">{timerHours}</span>
                            <span>hours</span>
                        </div>
                        <div class="info">
                            <span class="info-first" id="minutes">{timerMinutes}</span>
                            <span>mins</span>
                        </div>
                        <div class="info">
                            <span class="info-first" id="seconds">{timerSeconds}</span>
                            <span>secs</span>
                        </div>
                    </div>
                </div>
                <div class="minor-details-sale">
                    <p>{product.description}</p>
                </div>
                <div class="minor-details-sale">
                    <p>Quantity :</p>
                </div>
                <div class="purchase-quantity">
                    <div class="quantity">
                        <div class="add-sub">
                            <span class="subtract hover" onClick={subtractProduct}>-</span>
                            <span class="border">{amount}</span>
                            <span class="add hover" onClick={additionProduct}>+</span>
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
            <React.Suspense fallback={<h3>loading....</h3>}>
            
              <Await resolve={allProducts.allProducts}>
                {(allProducts)=>{
                   if(products.length < 1){
                        setProducts(allProducts)
                    }
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
                    )
                    

                  }}
                </Await>
  
              </React.Suspense>
            
        </section>
    
        
        </div>
    )
}