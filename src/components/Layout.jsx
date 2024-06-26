import React from "react"
import {Outlet} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import BackToTop from "./BackToTop"
import GoToTop from "./GoToTop"
export default function Layout(){
    return(
        <div className="home-one">
            <Header />
            <main>
                <Outlet />
            </main>
            <BackToTop />
            <Footer />
            <GoToTop />
        </div>

    )
}