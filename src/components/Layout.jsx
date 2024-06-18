import React from "react"
import {Outlet} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"
export default function Layout(){
    return(
        <div className="home-one">
            <Header />
            <main>
                <Outlet />
            </main>
            <BackToTop />
            <Footer />
        </div>

    )
}