import React from "react"
import {Link} from "react-router-dom"

export default function LatestBlog(props){
    return(
        <Link to={`/blogs/${props.id}`} className="latest-product">
            <div className="latest-product-image">
                <img src={props.image} alt="" />

            </div>
            <div className="latest-product-info">
                <div className="lp-name">
                    <p>
                        {props.title}
                    </p>
                </div>
                <div className="lp-price">
                    <p>
                        <i className="bi bi-calendar2-range-fill">

                        </i>
                        {props.date}
                    </p>

                </div>
            </div>
        </Link>
    )
}