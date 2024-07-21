import React from "react"
import HeroGeneral from "../components/HeroGeneral"
import ProductShop from "../components/ShopComponents/ProductShop"
import Slider from "react-slider"
import {Link,useSearchParams,useOutletContext,Await} from "react-router-dom"
import LatestProducts from "../components/ShopComponents/LatestProducts"
import IgImage1 from "../assets/images/s_insta_img01.jpg"
import IgImage2 from "../assets/images/s_insta_img02.jpg"
import IgImage3 from "../assets/images/s_insta_img03.jpg"
import IgImage4 from "../assets/images/s_insta_img04.jpg"
import ShopPreLoader from "./Shop/ShopPreloader"
import {selectAllProducts,getProductsStatus,getProductsError,fetchProducts} from "../store/productsSlice"
import { useSelector,useDispatch } from "react-redux";
export default function ShopOne(){
    const dispatch=useDispatch()
    const productsRedux=useSelector(selectAllProducts)
    const productsStatus=useSelector(getProductsStatus)
    const error=useSelector(getProductsError)
    React.useEffect(()=>{
        if(productsStatus=== 'idle'){
            dispatch(fetchProducts())
        }
    },[productsStatus,dispatch])
    console.log("the products from redux are ",productsRedux[0].products )
    const {allProducts}=useOutletContext()
    const [products,setProducts]=React.useState([])
    
    const [sorting,setSorting]=React.useState("latest")
    const [searchParams,setSearchParams]=useSearchParams()
    const stateSearch=searchParams.toString()
    const priceMin=searchParams.get("priceMin")
    const priceMax=searchParams.get("priceMax")
    const valueMin= priceMin ? priceMin : 2000;
    const valueMax= priceMax ? priceMax : 5000;
    const MIN=1000;
    const MAX=10000;
    const [values,setValues]=React.useState([valueMin,valueMax]);
    const [show,setShow]=React.useState(false)
    console.log("the products are",products)                    
    
    return(
        <div id="about">
            <HeroGeneral
                title="our shop"
            />
            <React.Suspense fallback={<ShopPreLoader />}>
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
                    
                    
                    let sortedProducts=[]
                        if (sorting==="latest"){
                            sortedProducts=products;
                        }else{
                            sortedProducts=products.toReversed();
                        }
                        const displayedProducts= (priceMin && priceMax)
                                                ? sortedProducts.filter((product)=>{
                                                    console.log((product.price >= priceMin) && (product.price <= priceMax))
                                                    return((product.price >= priceMin) && (product.price <= priceMax) )

                                                })
                                                :sortedProducts
                        
                        
                        
                        
                        const Latestproducts=products.filter((product)=>{
                            return(product.id<4)
                        })
                        const LatestElements=Latestproducts.map((item)=>{
                            return(
                                <LatestProducts
                                key={item.id}
                                id={item.id}
                                image={item.image1}
                                name={item.name}
                                price={item.price}
                                
                                />
                            )
                        })
                        
                        function showFilter(){
                            setShow((prev)=>{
                                return !prev
                            })

                        }
                    
                    const productsElements=displayedProducts.map((item)=>{
                        return(
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
                                state={stateSearch}
                            />
                
                        )
                    })
                    
                    return(
                        <div className="shop">
                            <div className="shop-one shop-inner">
                                <div className="left">
                                    <div className="shop-left-top">
                                        <div className="title">
                                            <p>Showing 1–{productsElements.length} of 20 results</p>
                                        </div>
                                        <div className="filter-form">
                                            <div className="filter-box-container">
                                                <div className="filter-box" onClick={showFilter}>
                                                    <div className="filter-box-left">
                                                        sort by {sorting}
                                                    </div>
                                                    <div className="filter-box-right">
                                                        <i className="bi bi-chevron-down">

                                                        </i>
                                                        
                                                    </div>

                                                </div>
                                                <div className={`filter-options ${show ? "show" : ""}`}>
                                                    <span className={`option ${sorting ==="latest" ? "active" : ""} `} onClick={()=>setSorting("latest")}>Sort By Latest</span>
                                                    <span className={`option ${sorting ==="oldest" ? "active" : ""} `} onClick={()=>setSorting("oldest")}>Sort By Oldest</span>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="products-shop shop-one">
                                        {productsElements}
                                    </div>

                                </div>
                                <div className="right">
                                    <div className="heading">
                                        <p className="heading-market">
                                            FILTER BY
                                        </p>
                                        <div className="heading-underline">
                                            <div className="left-line">

                                            </div>
                                            <div className="right-line">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-container">
                                        <Slider 
                                        className="slider"
                                        onChange={setValues}
                                        value={values}
                                        min={MIN}
                                        max={MAX}
                                        
                                        />
                                    </div>
                                    <div className="filter-price-inputs">
                                        <Link to={`?priceMin=${values[0]}&&priceMax=${values[1]}`} className="filter-button">
                                            <button>
                                                Filter
                                            </button>
                                        </Link>
                                        <div className="input-price">
                                            <div className="price">
                                                <p>Price:</p>
                                            </div>
                                            <div className="input">
                                                <div>K</div>
                                                <div className="filter-input">{values[0]}</div>
                                                <div className="separator">
                                                    -
                                                </div>
                                                <div>K</div>
                                                <div className="filter-input">{values[1]}</div>
                                            </div>
                                        </div>
                                        

                                    </div>
                                    <Link to="." className="clear-all">
                                        <button>
                                            <i className="bi bi-trash-fill"></i>
                                            CLEAR ALL
                                        </button>
                                    </Link>
                                    <div className="heading">
                                        <p className="heading-market">
                                            CATEGORY
                                        </p>
                                        <div className="heading-underline">
                                            <div className="left-line">

                                            </div>
                                            <div className="right-line">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="categories">
                                        <div className="category-item">
                                            <div className="category-left">
                                                <div className="box">

                                                </div>
                                                <p>Mutton</p>
                                            </div>
                                            <div className="category-right">
                                                <p>07</p>
                                            </div>
                                        </div>
                                        <div className="category-item">
                                            <div className="category-left">
                                                <div className="box">

                                                </div>
                                                <p>Chicken</p>
                                            </div>
                                            <div className="category-right">
                                                <p>06</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="heading">
                                        <p className="heading-market">
                                            latest products
                                        </p>
                                        <div className="heading-underline">
                                            <div className="left-line">

                                            </div>
                                            <div className="right-line">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="latest-products">
                                        {LatestElements}
                                    </div>
                                    <div className="heading">
                                        <p className="heading-market">
                                            instagram
                                        </p>
                                        <div className="heading-underline">
                                            <div className="left-line">

                                            </div>
                                            <div className="right-line">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="ig-images">
                                        <div className="ig-images-top">
                                            <img src={IgImage1} className="first" alt="" />
                                            <img src={IgImage2} className="second" alt="" />
                                        </div>
                                        <div className="ig-images-bottom">
                                            <img src={IgImage3} className="first" alt="" />
                                            <img src={IgImage4} className="second"  alt="" />
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    )
                    

                }}
              </Await>

            </React.Suspense>
            
        
        </div>
    )
}