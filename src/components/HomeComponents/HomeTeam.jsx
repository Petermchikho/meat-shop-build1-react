import React from "react"
import Line from "../../assets/images/line.png"
import {Link} from "react-router-dom"
export default function HomeTeam(props){
 return(
    <div className="team-card" key={props.id}>
        <div className="image-holder">
            <img src={props.image} alt="member" />
            <Link to="/contact">
                <i className="bi bi-plus">

                </i>
            </Link>
        </div>
        <div className="member-details">
            <img src={Line} alt="line" />
            <Link to="/contact" className="member-name">{props.name}</Link>
            <p className="title">{props.title}</p>
        </div>
    </div>
 )
}