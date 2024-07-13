import React from "react"
import { IoClose } from "react-icons/io5";
import ProductShop from "./ShopComponents/ProductShop"
import {useSearchParams } from "react-router-dom"
export default function Search(props){
    console.log("the products search",props.products)
    const data=props.products
    const [products,setProducts]=React.useState(data)
    const [searchParams,setSearchParams]=useSearchParams()
    const stateSearch=searchParams.toString()
    const [inputSearch,setInputSearch]=React.useState("")
    function handleChange(e){
        setInputSearch(e.target.value)
        
    }
    function handleSubmit(e){
        e.target.preventDefault()
        //navigate to the next page
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
        <div>
            <section className="search-products-main">
            <div className="top-results-search">
                <div className="close-search">
                
                    <h5 onClick={props.handleClick}>
                    <IoClose />
                    </h5>

                </div>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Search meat product..." 
                    value={inputSearch} 
                    name="inputSearch"
                    onChange={handleChange} />
                    <button>
                        <i className="bi bi-search">

                        </i>

                    </button>
                </form>

            </div>
            {inputSearch
            ?
            <div className="bottom-search-results">
                <div className="products-shop">                    
                                    
                {
                    products.filter(item=>item.name.includes(inputSearch)).map((product)=>{
                        return(
                            <ProductShop 
                            key={product.id}
                            id={product.id}
                            new={product.new}
                            category={product.category}
                            name={product.name}
                            price={product.price}
                            amount={product.amount}
                            image1={product.image1}
                            onAdd={addition}
                            onSubtract={subtract}
                            state={stateSearch}
                        />
                        )
                    })
                }
                </div>

            </div>
            :
            <div className="bottom-remove-search" onClick={props.handleClick}>

            </div>}
        </section>
        </div>
    )
}