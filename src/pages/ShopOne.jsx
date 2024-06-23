import React from "react"
import HeroGeneral from "../components/HeroGeneral"
import {MarketData} from "../Data/Data"
import ProductShop from "../components/ShopComponents/ProductShop"
import Slider from "react-slider"
import {Link,useSearchParams} from "react-router-dom"

export default function ShopOne(){
    const MIN=1000;
    const MAX=10000;
    const [values,setValues]=React.useState([2000,5000]);
    const [searchParams,setSearchParams]=useSearchParams()
    const [sorting,setSorting]=React.useState("latest")
    const priceMin=searchParams.get("priceMin")
    const priceMax=searchParams.get("priceMax")
    const [products,setProducts]=React.useState([])
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
    
    const [show,setShow]=React.useState(false)
    React.useEffect(()=>{
        setProducts(MarketData)
    },[MarketData])
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
            />

        )
    })
    function showFilter(){
        setShow((prev)=>{
            return !prev
        })

    }
    return(
        <div id="about">
            <HeroGeneral
                title="our shop"
            />
            <div className="shop">
                <div className="shop-one shop-inner">
                    <div className="left">
                        <div className="shop-left-top">
                            <div className="title">
                                <p>Showing 1–09 of 20 results</p>
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
                            <div className="latest-product">
                                <div className="latest-product-image">
                                    <img src="../assets/images/lp_img01.jpg" alt="" />

                                </div>
                                <div className="latest-product-info">
                                    <div className="lp-name">
                                        <p>
                                            roast chicken
                                        </p>
                                    </div>
                                    <div className="lp-price">
                                        <p>
                                            K2000
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="latest-product">
                                <div className="latest-product-image">
                                    <img src="../assets/images/lp_img02.jpg" alt="" />

                                </div>
                                <div className="latest-product-info">
                                    <div className="lp-name">
                                        <p>
                                            roast chicken
                                        </p>
                                    </div>
                                    <div className="lp-price">
                                        <p>
                                            K2000
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="latest-product">
                                <div className="latest-product-image">
                                    <img src="../assets/images/lp_img03.jpg" alt="" />

                                </div>
                                <div className="latest-product-info">
                                    <div className="lp-name">
                                        <p>
                                            roast chicken
                                        </p>
                                    </div>
                                    <div className="lp-price">
                                        <p>
                                            K2000
                                        </p>

                                    </div>
                                </div>
                            </div>
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
                                <img src="../assets/images/s_insta_img01.jpg" className="first" alt="" />
                                <img src="../assets/images/s_insta_img02.jpg" className="second" alt="" />
                            </div>
                            <div className="ig-images-bottom">
                                <img src="../assets/images/s_insta_img03.jpg" className="first" alt="" />
                                <img src="../assets/images/s_insta_img04.jpg"className="second"  alt="" />
                            </div>

                        </div>

                    </div>
                </div>

        </div>
        
        </div>
    )
}