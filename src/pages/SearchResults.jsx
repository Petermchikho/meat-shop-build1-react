import React from "react"
import HeroGeneral from "../components/HeroGeneral"
import {useSearchParams,useOutletContext,Link} from "react-router-dom"
import ProductShop from "../components/ShopComponents/ProductShop"
export default function Pages(){
    const {productsSearch}=useOutletContext()
    const [products,setProducts]=React.useState(productsSearch)
    const [searchParams,setSearchParams]=useSearchParams()
    const query=searchParams.get("query")
    console.log(query);
    const stateSearch=searchParams.toString()
    const displayedProducts=products.filter((product)=>{
        return(product.name.includes(query))
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
        <div id="about">
            <HeroGeneral
                title="search results"
            />
            {query ? 
            <section class="organic-products-team">
               <h6 className="search-heading">showing {productsElements.length} of {productsElements.length} of your results</h6>
                <div class="products-shop ">
                    {productsElements}
                </div>
                <div class="shop-now">
                    <Link to="/products" ><button>
                        Shop Now
                    </button></Link>
                </div>
            </section>
            :
            <section class="organic-products-team">
               
                <h6 className="search-heading">showing 0 of 0 of your results</h6>
                <div class="shop-now">
                    <Link to="/products" ><button>
                        Go to shop
                    </button></Link>
                </div>
            </section>
            }
            
        
        </div>
    )
}