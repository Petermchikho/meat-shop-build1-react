import React from "react"
import Line from "../../assets/images/line.png"
export default function HomeTeam(props){
 return(
    <div className="team-card" key={props.id}>
        <div className="image-holder">
            <img src={props.image} alt="member" />
            <a href="">
                <i className="bi bi-plus">

                </i>
            </a>
        </div>
        <div className="member-details">
            <img src={Line} alt="line" />
            <a href="" className="member-name">{props.name}</a>
            <p className="title">{props.title}</p>
        </div>
    </div>
 )
}