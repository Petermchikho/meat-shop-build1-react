import React from "react"
import Line from "../../assets/images/line.png"
import {Link} from "react-router-dom"
export default function HomeOrganicProducts(props){
    return(
        <>
            <Link to={`/products/view/${props.id}`} className="org-product" key={props.id}>
                <div className="content-product">
                    <img src={props.image}className="content-product-img" alt="" />
                    <div className="content-product-inner">
                        <img src={Line} alt="" />
                        <p className="name">{props.title}</p>
                        <p className="price">
                            {props.price}
                        </p>
                        <p className="decription-minor">
                            {props.description}
                        </p>
                    </div>
                    

                </div>
                <div className="org-background">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 401 314" preserveAspectRatio="none">
                        <path d="M331.5,1829h361a20,20,0,0,1,20,20l-29,274a20,20,0,0,1-20,20h-292a20,20,0,0,1-20-20l-40-274A20,20,0,0,1,331.5,1829Z" transform="translate(-311.5 -1829)"></path>
                    </svg>
                </div>
            </Link>
        
        </>
    )
}