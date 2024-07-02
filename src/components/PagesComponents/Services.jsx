import React from "react"
import {Link} from "react-router-dom"

export default function Services(props){

    return(
        <>  
            <Link to="/pages/details" class="services-box">
                <div class="services-box-top">
                    <div class="icon-number">
                        <i class={props.icon}>

                        </i>
                    </div>
                    <div class="number">
                        <span>
                            {props.number}
                        </span>
                    </div>
                </div>
                <div class="services-bottom-box">
                    <p class="title">{props.title}

                    </p>
                    <div class="paragraph">
                        <p>{props.description}</p>
                    </div>
                </div>
            </Link>      
        </>

    )
}