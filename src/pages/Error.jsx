import React from "react"
import { useRouteError } from "react-router-dom"

export default function Error(){
    const error=useRouteError()
    return(
        <div id="about">
            <section class="hero section-padding">
                <div className="page-not-found">
                <h3 className="heading">
                        Ooops!
                    </h3>
                    <h3 className="heading">
                         {error.message}
                    </h3>
                </div>
            </section>
        </div>

    )
}