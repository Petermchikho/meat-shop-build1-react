import React from "react"
import {Outlet,useLoaderData} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import BackToTop from "./BackToTop"
import GoToTop from "./GoToTop"
import {getProducts} from "../api"
export function loader(){
   return getProducts()
}
export default function Layout(){
    const productsSearch=useLoaderData()
    return(
        <div className="home-one">
            <Header products={productsSearch}/>
            <main>
                <Outlet context={{productsSearch}}/>
            </main>
            <BackToTop />
            <Footer />
            <GoToTop />
        </div>

    )
}