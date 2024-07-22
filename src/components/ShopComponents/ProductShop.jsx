import React from "react"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {productsActions} from "../../store/productsSlice"
export default function ProductShop(props){
    const stateValueOne= props.state
    const dispatch=useDispatch()
    const id=props.id
    function addition(){
        dispatch(productsActions.addToCart({id}))
    }
    function subtract(){
        dispatch(productsActions.removeFromCart({id})) 
    }
    function showCart(){
        dispatch(productsActions.showCartItems())
      }
    return(
        
        <>
          <div  className="product-market-container">
                <div className="product-details">
                    <Link to={`/products/view/${props.id}`} state={{search:stateValueOne,amount:props.amount}}>
                        <div className="minor-detail-star">

                            <span>{ props.new ? "New" : "super"}</span>
                            {props.new && <i className="bi bi-star-fill"></i>}
                        </div>
                        
                        <div state={{search:stateValueOne,amount:props.amount}} className="image">
                            <img src={props.image1} alt="" />
                        </div >
                        <div state={{search:stateValueOne,amount:props.amount}} className="category">
                            <p>
                            {props.category}
                            </p>
                        </div>
                        <div className="name-product">
                            <span className="product-name">
                                <Link to={`/products/view/${props.id}`} state={{search:stateValueOne,amount:props.amount}}>{props.name}</Link>
                            </span>
                        </div>
                        <div state={{search:stateValueOne,amount:props.amount}} className="price-product"><p>K{props.price}

                        </p></div>
                    </Link>
                    <div onClick={showCart} className={`eye ${props.amount ? "show" :" "}`} state={{search:stateValueOne,amount:props.amount}}>
                           <i className="bi bi-cart4"></i>
                    </div>
                    <div className="choose-amount">
                        <div className="button-shape">
                            <span className="subtract-product" onClick={subtract}>
                                -
                            </span>

                            <span className="amount">
                                {props.amount}
                            </span>
                            <span className="add-product" onClick={addition}>
                                +
                            </span>

                        </div>
                        
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 303 445" preserveAspectRatio="none">
                    <path d="M319,3802H602c5.523,0,10,5.24,10,11.71l-10,421.58c0,6.47-4.477,11.71-10,11.71H329c-5.523,0-10-5.24-10-11.71l-10-421.58C309,3807.24,313.477,3802,319,3802Z" transform="translate(-309 -3802)"></path>
                </svg>
          </div>
        </>
    )
}