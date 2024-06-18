import React from "react"
import TitleShape from "../../assets/images/title_shape.png"
import {BlogData} from "../../Data/Data"
import HomeBlog from "../../components/HomeComponents/HomeBlog"
export default function BlogHome(){
    const [data,setData] =React.useState([])
    React.useEffect(()=>{
        setData(BlogData)
    },[])
    const elements=data.map((item)=>{
       return(
        <HomeBlog
            id={item.id}
            author={item.author}
            attention={item.attention}
            title={item.title}
            comments={item.comments}
            image={item.image}
        />

       )
    })
    return(
        <>
            <section className="blog-main section-padding">
                <div className="organic-products-intro ">
                    <p className="fancy-text">
                        Latest News

                    </p>
                    <h4>
                        Latest News Update
                    </h4>
                    <img src={TitleShape} alt="shape" />
                </div>
                <div className="blog-container">
                    {elements}
                </div>
            </section>
        </>
    )
}
