import React from "react"
import Team from "../components/Team"
import FAQ from "../components/FAQ"
import Shape from "../assets/images/product_shape01.png"
import Tshape from "../assets/images/title_shape.png"
import {AboutData} from "../Data/Data"
import AboutWhy from "../components/AboutComponents/AboutWhy"
import HeroGeneral from "../components/HeroGeneral"
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
            <HeroGeneral
             title="about us"
            />
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