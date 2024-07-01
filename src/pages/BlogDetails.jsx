import React from "react"
import {getBlogs} from "../api"
import {useLoaderData,useParams,Link} from "react-router-dom"
import HeroGeneral from "../components/HeroGeneral"
import LatestBlog from "../components/BlogsComponents/LatestBlog"
import ContactImg from "../assets/images/add_banner_cleanup.jpg"

export function loader(){
    return getBlogs()
}
export default function BlogDetails(){
    const params=useParams()
    const data=useLoaderData()
    const blogLatest=data.slice(-3)

   
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
    const blog=data.filter((item)=>{
        return (parseInt(item.id) === parseInt(params.id))
    })
    console.log(params.id,blog)
    return(
        <div id="about">
            <HeroGeneral
                title="blogs"
            />
            <section class="blogs">
                <div class="blog-inner-container">
                    <div class="blogs-left">
                        <div class="blog-container-main">
                            <div class="blog-image-main">
                                <img src={blog[0].image} alt="" />

                            </div>
                            
                            <div class="blog-body">
                                
                                    <h6>{blog[0].title}</h6>
                                
                                <div class="paragraph">
                                    <p>{blog[0].paragraph1}</p>
                                </div>
                                {blog[0].quote &&
                                <div class="quote">
                                    <div class="paragraph">
                                        <p>
                                        {blog[0].quote}
                                        </p>
                                    </div>
                                    <div class="author-icon">
                                        <p>-{blog[0].quoteAuthor}</p>
                                        
                                            <i class="bi bi-quote"></i>

                                    
                                        
                                    </div>

                                </div>
                                }
                                <div class="paragraph">
                                    <p>
                                    {blog[0].paragraph2}
                                    </p>
                                </div>
                                {blog[0].aside &&
                                <div class="image-side-paragraph">
                                    <div class="side-left">
                                        <img src={blog[0].aside.image} alt="" />

                                    </div>
                                    <div class="side-right">
                                        <h6>{blog[0].aside.heading} </h6>
                                        <div class="paragraph">
                                            <p>{blog[0].aside.paragraph}</p>
                                            <div class="list-p">
                                                {
                                                 blog[0].aside.list.map((item)=>{
                                                    return(<p><i class="bi bi-patch-check-fill"></i>{item}</p>)
                                                 })   
                                                }
                                                

                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                }
                                <div class="paragraph">
                                    <p>
                                    {blog[0].paragraph3}
                                    </p>
                                </div>
                                

                            </div>
                        </div>
                        <div class="tags-share">
                            <div class="tags-container">
                                <p>Tags:</p>
                                <a href="">
                                    Food,
                                </a>
                                <a href="">
                                    Horse Meat,
                                </a>
                                <a href="">Protein</a>

                            </div>
                            <div class="share">
                                <p>Share:</p>
                                <a href="">
                                    <i class="bi bi-facebook"></i>
                                </a>
                                <a href=""><i class="bi bi-twitter"></i></a>
                                <a href=""><i class="bi bi-linkedin"></i></a>

                            </div>

                        </div>
                        <div class="author-container">
                            <div class="author-image">
                                <img src="../assets/images/avatar_img.png" alt="" />

                            </div>
                            <div class="author-details">
                                <p class="heading">
                                {blog[0].author}
                                </p>
                                <div class="paragraph">
                                    <p>{blog[0].authorDescription}</p>
                                </div>
                                <div class="socials">
                                    <a href={blog[0].authorFB}>
                                        <i class="bi bi-facebook"></i>
                                    </a>
                                    <a href={blog[0].authorLK}><i class="bi bi-twitter"></i></a>
                                    <a href={blog[0].authorTwitter}><i class="bi bi-linkedin"></i></a>
        
                                </div>

                            </div>
                        </div>
                        <div class="comments-section">
                            <h6>{blog[0].commentsCount} Comments</h6>
                            <div class="comment">
                                <div class="image">
                                    <img src="../assets/images/comment_avatar01.png" alt="" />

                                </div>
                                <div class="details">
                                    <p class="heading">
                                        Emely Jonson
                                    </p>
                                    <div class="paragraph">
                                        <p>Dumans ha hunted schistoric times meat, the flesh or other edible parts of animals usually domesticated cattle, swine.
                                        </p>
                                    </div>
                                    <div class="reply">
                                        <a href=""><i class="bi bi-reply-all-fill"></i> Reply</a>
                                    </div>

                                </div>
                            </div>
                            <div class="comment">
                                <div class="image">
                                    <img src="../assets/images/comment_avatar02.png" alt="" />

                                </div>
                                <div class="details">
                                    <p class="heading">
                                        Rosalina D.
                                    </p>
                                    <div class="paragraph">
                                        <p>Dumans ha hunted schistoric times meat, the flesh or other edible parts of animals usually domesticated cattle, swine.
                                        </p>
                                    </div>
                                    <div class="reply">
                                        <a href=""><i class="bi bi-reply-all-fill"></i> Reply</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="add-comment">
                            <h6>Leave A Comment</h6>
                            <form action="">
                                <textarea name="" id="" placeholder="Your comment here..."></textarea>
                                <input type="text" placeholder="Your name*" />
                                <div class="two-on-one-line">
                                    <input type="email" name="" id="" placeholder="Your email*" />
                                    <input type="url" name="" id="" placeholder="Website" />

                                </div>
                                <div class="checkbox-label"><input type="checkbox" name="" id="checkbox" /> <label for="checkbox">Your email will not be published.Required field are marked*</label></div>
                                <button>SEND COMMENT</button>
                            </form>

                        </div>

                        

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