import React from "react"
import {useOutletContext} from "react-router-dom"
export default function ShopDescription(){
    const {product}=useOutletContext()
    return(
        <div class="show-content show" id="description-1">
                <p>
                   {product.descriptionFull} 
                </p>
        </div>
            
    )

}