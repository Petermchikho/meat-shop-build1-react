import React from "react"
import {Link} from "react-router-dom"

export default function NotFound(){
    
    return(
        <div id="about">
            <section class="hero section-padding">
                <div className="page-not-found">
                <h3 className="heading">
                        Ooops!
                    </h3>
                    <h3 className="heading">
                         Page Not Found
                    </h3>
                    <Link to="/" className="page-not-found-btn">
                       <button>Back To Homepage</button>
                       
                    </Link>

                </div>
            </section>
        </div>
    )
}