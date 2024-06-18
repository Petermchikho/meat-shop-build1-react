import React from "react"
import {Link} from "react-router-dom"
export default function BackToTop(){
    return(
        <>
            <Link to="#" className="open to-top">
                <i className="bi bi-chevron-up"></i>
            </Link>
        </>
    )
}