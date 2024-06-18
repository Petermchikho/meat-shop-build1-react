import React from "react";
import FeatureShape from "../../assets/images/features_shape.png";
import {Link} from "react-router-dom"
export default function HomeFeature(props){
    return(
        <>
        <div className={`feature-container feature-$${props.id}`} key={props.id}>
                <div className="feauture-left">
                    <p className="red bold">{props.title}</p>
                    <Link to="/products">
                       <span>{props.grabber}</span>
                    </Link>
                    <span className="description">
                        {props.description}
                    </span>
                    <span className="price red bold">
                        {props.price}
                    </span>

                </div>
                <div className="feature-img">
                    <img src={props.image} alt="features" className="features-img" />
                </div>
                <img src={FeatureShape} className="float object-1" data-value="2" alt="" />

        </div>
        </>
    )
}