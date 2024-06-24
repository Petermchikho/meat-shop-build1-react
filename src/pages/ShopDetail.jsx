import React from "react"
import HeroGeneral from "../components/HeroGeneral"
import {useParams} from "react-router-dom"
import {MarketData} from "../Data/Data"

export default function ShopDetail(){
    const params=useParams()
    const [products,setProducts]=React.useState(MarketData)
    const product=products.filter((item)=>{
        return(item.id===(parseInt(params.id)))
    })
    return(
        <div id="about">
        <HeroGeneral
             title={`${product[0].name}`}
        />
        
        </div>
    )
}