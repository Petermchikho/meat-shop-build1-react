import React from "react"
import {Link} from "react-router-dom"

export default function ProductShop(props){
    return(
        <>
          <div  className="product-market-container">
                <div className="product-details">
                    <div className="minor-detail-star">

                        <span>{ props.new ? "New" : "super"}</span>
                        {props.new && <i className="bi bi-star-fill"></i>}
                    </div>
                    <Link to={`/products/${props.id}`} className="image">
                        <img src={props.image1} alt="" />
                    </Link >
                    <Link to={`/products/${props.id}`} className="category">
                        <p>
                        {props.category}
                        </p>
                    </Link>
                    <div className="name-product">
                        <span className="product-name">
                            <Link to={`/products/${props.id}`}>{props.name}</Link>
                        </span>
                    </div>
                    <Link to={`/products/${props.id}`} className="price-product"><p>K{props.price}

                    </p></Link>
                    <div className="choose-amount">
                        <div className="button-shape">
                            <span className="subtract-product" onClick={()=>props.onSubtract(props.id)}>
                                -
                            </span>

                            <span className="amount">
                                {props.amount}
                            </span>
                            <span className="add-product" onClick={()=>props.onAdd(props.id)}>
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