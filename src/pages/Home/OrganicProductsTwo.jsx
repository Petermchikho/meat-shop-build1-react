import React from "react"
import Shape from "../../assets/images/title_shape.png"
import {OrganicProductTwoData} from "../../Data/Data"
import HomeOrganicProductsTwo from "../../components/HomeComponents/HomeOrganicProductsTwo"
import {Link} from "react-router-dom"
export default function OrganicProductsTwo(){
    const [data,setData] = React.useState([])
    React.useEffect(()=>{
        setData(OrganicProductTwoData)

    },[data])

    const elements=data.map((item)=>{
         return(
            <HomeOrganicProductsTwo 
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            name={item.name}
            
            />
         )
    })
    return(
        <>
         <section className="organic-products-two section-padding">
            <div className="organic-products-intro section-padding">
                <p className="fancy-text">
                    Organic Shop
                </p>
                <h4>
                    Our Organic Products
                </h4>
                <img src={Shape} alt="shape" />
            </div>
            <div className="organic-container-two">
                {elements} 
            </div>
            <div className="button-shop">
                <Link to="/products">
                    <button>SHOP NOW</button>
                </Link>
            </div>

        </section>
        </>
    )
}