import React from "react"
import HeroGeneral from "../components/HeroGeneral"
import ShopPreLoader from "./Shop/ShopPreloader"

export default function Pages(){
    
    return(
        <div id="about">
        <HeroGeneral
             title="blogs"
        />
        <ShopPreLoader />
        
        
        </div>
    )
}