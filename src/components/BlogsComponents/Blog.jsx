import React from "react"
import {Link} from "react-router-dom"
export default function Blog(props){
    return(
        <>
            <div className="blog-container-main">
                <Link to={`/blogs/${props.id}`} className="blog-image-main">
                    <img src={props.image} alt="" />

                </Link>
                <div className="blog-author-comments">
                    <div>
                        <Link to={`/blogs/${props.id}`}>
                            {props.author}

                        </Link>

                    </div>
                    <div>
                        <span className="circle">

                        </span>
                        <Link to={`/blogs/${props.id}`}>
                            <i className="bi bi-chat-left"></i>
                            comm
                            <span>
                                ( {props.commentsCount} )
                            </span>

                        </Link>

                    </div>
                    <div>
                        <span className="circle">
                        
                        </span>
                        <Link to={`/blogs/${props.id}`}>
                            <i className="bi bi-bookmark">

                            </i>
                            {props.category}

                        </Link>

                    </div>
                    

                </div>
                <div className="blog-body">
                    <Link to={`/blogs/${props.id}`}>
                   
                        <h6>{props.title}</h6>
                    </Link>
                    <div className="paragraph">
                        <p>{props.attention}</p>
                    </div>
                    <div className="read-more">
                        <Link to={`/blogs/${props.id}`}>read more</Link>
                        <i className="bi bi-chevron-double-right"></i>
                    </div>

                </div>
            </div>
        </>
    )

}