import React from "react"
import Team from "../components/Team"
import FAQ from "../components/FAQ"
import Shape from "../assets/images/product_shape01.png"
import Tshape from "../assets/images/title_shape.png"
import {AboutData} from "../Data/Data"
import AboutWhy from "../components/AboutComponents/AboutWhy"
import {Link} from "react-router-dom"
export default function About(){
    const [data,setData] = React.useState([])

    React.useEffect(()=>{
        setData(AboutData)
    },[])
    const elements=data.map((item)=>{
        return(
            <AboutWhy
                id={item.id}
                icon={item.icon}
                heading={item.heading}
                description={item.description}
            />
        )
    })
    return(
        <>
        <main id="about">
            <section class="hero section-padding">
                <div class="about-hero-content">
                    <h3>
                        About us
                    </h3>
                    <div class="home-link">
                        <Link to="/">
                            Home
                        </Link>
                        <p>about us</p>
                    </div>

                </div>
            
                

            </section>
            
            <section class="organic-products about">
                <div class="cool-shape">
                    <img src={Shape} alt="shape" />
                </div>
                <div class="organic-products-intro section-padding">
                    <p class="fancy-text">
                        About Bemet

                    </p>
                    <h4>
                        Why Choose Our Shop
                    </h4>
                    <img src={Tshape} alt="shape" />
                </div>
                <div class="why-choose">
                    {elements}
                    

                </div>  
            </section>
            <Team />
            <FAQ />
        </main>
        </>
    )
}