import React from "react"

export default function HomeOrganicProductsTwo(props){
    return(
        <div className="org-product-two" key={props.id}>
                    <div className="image">
                        <img src={props.image} alt="product" />
                    </div>
                    <div className="org-product-detail">
                        <div className="left-details-org">
                            <p className="detail-header">
                               {props.title}
                            </p>
                            <p className="detail-text">
                                {props.description}
                            </p>
                        </div>
                        <div className="org-product-price">
                            <p className="price">
                                {props.price}
                            </p>
                            <p className="name">
                                {props.name}
                            </p>
    
                        </div>

                    </div>
                    
                </div>

    )
}