import React from "react"
import {Link} from "react-router-dom"

export default function LatestProducts(props){
    return(
        <div>
            <Link to={`/products/${props.id}`} className="latest-product">
                <div className="latest-product-image">
                    <img src={props.image} alt="" />

                </div>
                <div className="latest-product-info">
                    <div className="lp-name">
                        <p>
                            {props.name}
                        </p>
                    </div>
                    <div className="lp-price">
                        <p>
                            {props.price}
                        </p>

                    </div>
                </div>
            </Link>

        </div>
    )
}