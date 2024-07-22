import React from 'react'
import {showAllCartItems,selectAllCartProducts} from "../store/productsSlice"
import { useSelector,useDispatch } from "react-redux";
import {productsActions} from "../store/productsSlice"
function CartItems() {
    const cartShow=useSelector(showAllCartItems);
    const cartItems=useSelector(selectAllCartProducts)
    const dispatch=useDispatch()
    function showCart(){
        dispatch(productsActions.showCartItems())
    }
    let total=0
    cartItems.forEach((item)=>{
        total+=item.totalPrice
    })
    let totalItems=0
    cartItems.forEach((item)=>{
        totalItems+=item.amount
    })

  return (
    <section class={`cart-items-main ${cartShow ? "show" : " "}`}>
        <div class="left-cart-items">

        </div>
        <div class="cart-items">
            <div class="cart-items-top">
                <h6>Your items <span class="small-circle"><i class="bi bi-record-fill"></i></span> <span>{totalItems}</span></h6>
                <button onClick={showCart}>X</button>

            </div>
            <div class="cart-items-container">
                {cartItems.map((item)=>{
                    const id=item.id
                    return(
                        <div class="cart-item">
                            <div class="image">
                                <img src={item.image} alt=""/>
                            </div>
                            <div class="details-name">
                                <p class="name">
                                    {item.name}
                                </p>
                                <p class="details">
                                    All the protein you need
                                </p>
                                <div class="add-subtract-checkout">
                                    <span class="minus-checkout hover" onClick={()=>dispatch(productsActions.removeFromCart({id}))}>
                                        -
                                        
                                    </span>
                                    <span class="amount-checkout">
                                       {item.amount}

                                    </span>
                                    <span class="minus-checkout hover" onClick={()=>dispatch(productsActions.addToCart({id}))}>
                                        +

                                    </span>
                                </div>
                                
                            </div>
                            <div class="delete-total">
                                <div class="delete-top-total" >
                                    <i class="bi bi-trash-fill" onClick={()=>dispatch(productsActions.removeFromCartOnce({id}))}>

                                    </i>
                                </div>
                                <div class="total-cart">
                                    <span>K{item.totalPrice}</span> 
                                </div>

                                </div>
                        </div>
                    )
                })}
                
            </div>
            <div class="cart-items-bottom">
                <div class="Buy-now">
                    <span>Check out <span class="small-circle"><i class="bi bi-record-fill"></i></span> K{total}</span>
                </div>
                <img src="assets/images/payment-icons.png" alt="" />

            </div>

        </div>

    </section>
  )
}

export default CartItems