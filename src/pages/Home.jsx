import React from "react"
import Hero from "./Home/Hero"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Team from "../components/Team"
import FAQ from "../components/FAQ"
import BackToTop from "../components/BackToTop"
import OrganicProducts from "./Home/OrganicProducts"
import Feature from "./Home/Feature"
import OrganicProductsTwo from "./Home/OrganicProductsTwo"
import GetAQuote from "./Home/GetAQuote"
import BlogHome from "./Home/BlogHome"
export default function Home(){
    return (
        <>
           <div className="home-one">
               <Header />
                <main>
                    <Hero /> 
                    <Feature />
                    <OrganicProducts />
                    <OrganicProductsTwo />
                    <Team />
                    <FAQ />
                    <GetAQuote />
                    <BlogHome />
                </main>
                <BackToTop />
                <Footer />
           </div>
        </>
    )
}