import React from "react"
import {Link} from "react-router-dom"

export default function MeatType(props){

    return(
        <>
            <Link to="/products" class="services-container-holder">
                <div class="services-container-round">
                    <div class="services-container-round-inner">
                        <img src={props.image} alt=""/>
                        
                    </div>
                    

                </div>
                <p>{props.name}</p>
            </Link>
        
        </>

    )
}