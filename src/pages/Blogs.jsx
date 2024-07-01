import React from "react"
import HeroGeneral from "../components/HeroGeneral"
import Blog from "../components/BlogsComponents/Blog"
import LatestBlog from "../components/BlogsComponents/LatestBlog"
import {getBlogs} from "../api"
import {useLoaderData} from "react-router-dom"
import ContactImg from "../assets/images/add_banner_cleanup.jpg"
export function loader(){
    return getBlogs()
}

export default function Blogs(){
    const data=useLoaderData()
    const blogLatest=data.slice(-3)

    const blogElements=data.map((item)=>{
        return(
            <Blog 
             key={item.id}
             id={item.id}
             author={item.author}
             commentsCount={item.commentsCount}
             title={item.title}
             attention={item.attention}
             image={item.image}
             category={item.category}
            
            />
        )
    })
    const latestBlogElement=blogLatest.map((item)=>{
        return(
          <LatestBlog 
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          date={item.date}
          />  
        )
    })
    return(
        <div id="about">
        <HeroGeneral
             title="blogs"
        />
        <section className="blogs">
            <div className="blog-inner-container">
                <div className="blogs-left">
                    {blogElements}
                </div>
                <div className="blogs-right">
                    <div className="heading">
                        <p className="heading-market">
                            Search
                        </p>
                        <div className="heading-underline">
                            <div className="left-line">

                            </div>
                            <div className="right-line">

                            </div>
                        </div>
                    </div>
                    <form>
                        <input type="search" placeholder="search..."name="" id="search" />
                        <button><i className="bi bi-search"></i></button>
                    </form>
                    <div className="heading">
                        <p className="heading-market">
                            Categories
                        </p>
                        <div className="heading-underline">
                            <div className="left-line">

                            </div>
                            <div className="right-line">

                            </div>
                        </div>
                    </div>
                    <div className="categories-blog">
                        <div className="category-blog">
                            <div className="category-blog-left">
                                <span className="circle">

                                </span>
                                <span>
                                    Chicken meat
                                </span>
                                

                            </div>
                            <div className="category-blog-right">
                                <span>
                                    ( 03 )
                                </span>

                            </div>
                        </div>
                        <div className="category-blog">
                            <div className="category-blog-left">
                                <span className="circle">

                                </span>
                                <span>
                                    Chicken meat
                                </span>
                                

                            </div>
                            <div className="category-blog-right">
                                <span>
                                    ( 03 )
                                </span>

                            </div>
                        </div>
                        <div className="category-blog">
                            <div className="category-blog-left">
                                <span className="circle">

                                </span>
                                <span>
                                    Chicken meat
                                </span>
                                

                            </div>
                            <div className="category-blog-right">
                                <span>
                                    ( 03 )
                                </span>

                            </div>
                        </div>
                        <div className="category-blog">
                            <div className="category-blog-left">
                                <span className="circle">

                                </span>
                                <span>
                                    Chicken meat
                                </span>
                                

                            </div>
                            <div className="category-blog-right">
                                <span>
                                    ( 03 )
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="heading">
                        <p className="heading-market">
                            latest products
                        </p>
                        <div className="heading-underline">
                            <div className="left-line">

                            </div>
                            <div className="right-line">

                            </div>
                        </div>
                    </div>
                    <div className="latest-products">
                        {latestBlogElement} 
                    </div>
                    <a href="tel:+265998671706" className="contact-us-image">
                        <img src={ContactImg} alt="" />
                    </a>
                    <div className="heading">
                        <p className="heading-market">
                            Tags
                        </p>
                        <div className="heading-underline">
                            <div className="left-line">

                            </div>
                            <div className="right-line">

                            </div>
                        </div>
                    </div>
                    <div className="tag-btns">
                        <span><button>Food</button></span>
                        <span><button>Businness</button></span>
                        <span><button>Cow Meat</button></span>
                        <span><button>Types</button></span>
                        <span><button>Protein</button></span>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}