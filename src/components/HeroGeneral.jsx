import React from "react"
import {Link} from "react-router-dom"
export default function HeroGeneral(props){
    const styles={
        textTransform:"capitalize"
    }
    return(
        <>
            <section class="hero section-padding">
                <div class="about-hero-content">
                    <h3 style={styles}>
                    {props.title}
                    </h3>
                    <div class="home-link">
                        <Link to="/">
                            Home
                        </Link>
                        <p>{props.title}</p>
                    </div>

                </div>
            
                

            </section>
        </>

    )

}