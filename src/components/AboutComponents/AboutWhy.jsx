import React from "react"
import Line from "../../assets/images/line.png"
import {Link} from "react-router-dom"
export default function AboutWhy(props){
    return(
        <>
        <div class="why-choose-container" key={props.id}>
            <div class="why-choose-content">
                <div className="icon-holder-container">
                        <div class="icon-holder">
                            <i class={props.icon}></i>
                            
                        </div>
                </div>
                <div class="image-text-detail">
                    <img src={Line} alt="" />
                    <p class="heading">
                        {props.heading}
                    </p>
                    <p class="paragraph">{props.description}</p>
                    <Link to="/blogs">Learn More</Link>

                </div>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 325" preserveAspectRatio="none">
                <path d="M330.5,2316h368a20,20,0,0,1,20,20l-29,285a20,20,0,0,1-20,20h-299a20,20,0,0,1-20-20l-40-285A20,20,0,0,1,330.5,2316Z" transform="translate(-310.5 -2316)"></path>
            </svg>
        </div>
        
        </>
    )
}