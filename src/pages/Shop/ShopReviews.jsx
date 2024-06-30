import React from "react"
import {useOutletContext} from "react-router-dom"

export default function ShopReviews(){
    const {product}=useOutletContext()
    const review=product.reviews.map((item)=>{
        return (<p class="review">{item}</p>)
    })
    return (
        <div class="show-content show" id="review-1">
            <h6>                  
                Customer Reviews ({product.review})

            </h6>
            
                
                {review}

            
            <p class="write-review">
                write a review
            </p>
        </div>
    )
}