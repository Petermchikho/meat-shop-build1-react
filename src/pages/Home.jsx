import React from "react"
import Hero from "./Home/Hero"
import Team from "../components/Team"
import FAQ from "../components/FAQ"
import OrganicProducts from "./Home/OrganicProducts"
import Feature from "./Home/Feature"
import OrganicProductsTwo from "./Home/OrganicProductsTwo"
import GetAQuote from "./Home/GetAQuote"
import BlogHome from "./Home/BlogHome"
export default function Home(){
    return (
        <div>
            <Hero /> 
            <Feature />
            <OrganicProducts />
            <OrganicProductsTwo />
            <Team />
            <FAQ />
            <GetAQuote />
            <BlogHome />
        </div>
    )
}