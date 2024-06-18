import React from "react"
import { FeatureData } from "../../Data/Data"
import HomeFeature from "../../components/HomeComponents/HomeFeature"
export default function Feature(){
    const [data,setData] =React.useState([]);
    console.log(data)
    React.useEffect(()=>{
        setData(FeatureData)
    },[data])
    const elements=data.map(function(item){
        return(<HomeFeature 
                id={item.id}
                title={item.title}
                grabber={item.grabber}
                description={item.description}
                price={item.price}
                image={item.image}
                />
            )
    })

    return(
        <>
        <section className="feature section-padding">
            {elements}
        </section>
        
        </>
    )
}