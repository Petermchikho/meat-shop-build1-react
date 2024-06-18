import React from "react"
import { TeamData } from "../Data/Data"
import HomeTeam from "./HomeComponents/HomeTeam"
import {Link} from "react-router-dom"
export default function Team(){
    const [data,setData]=React.useState([])

    React.useEffect(()=>{
        setData(TeamData)
    },[])

    const elements = data.map((item)=>{
        return( 
            <HomeTeam 
                id={item.id}
                image={item.image}
                title={item.title}
                name={item.name}
            />
        )

    })
    return(
        <>
        <section className="team">
            <div className="team-inner">
                <div className="team-left">
                    <p className="fancy-text">Meet Our Team</p>
                    <h3>
                        Our CREATIVE Team
                    </h3>
                    <p className="team-detail">BUY SMOKEY GRILLED meats and CHICKEN GET catling FREE</p>
                    <div className="button">
                        <Link to="/products"><button>SHOP NOW</button></Link>
                    </div>

                </div>
                <div className="team-right">
                    
                    {elements}
                </div>
            </div>
        </section></>
    )
}