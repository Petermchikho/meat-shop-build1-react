import React from "react";
import {Link} from "react-router-dom"
export default function HomeBlog(props){
    return(
        <div className="blog" key={props.id}>
            <div className="blog-image">
                <img src={props.image} alt="" />
            </div>
            <div className="content">
                <div className="authour-comment">
                    <Link to="/contact" className="author">
                        <i className="bi bi-person-fill">

                        </i>
                        <p>
                            {props.author}
                        </p>

                    </Link>
                    <div className="comment">
                        <i className="bi bi-chat-fill">

                        </i>
                        <span className="number">
                            {props.comments}
                        </span>

                    </div>
                </div>
                <div className="title-content">
                    <div className="title">
                        <Link to="/blogs">
                            <p>{props.title}</p>
                        </Link>
                        

                    </div>
                    <div className="content">
                        <p>{props.attention}</p>

                    </div>
                </div>
                <div className="read-more">
                    <Link to="/blogs"><p className="read-more-p">Read More</p></Link>
                    <Link to="/blogs" className="button-link">
                        <span>
                            <i className="bi bi-chevron-right"></i>
                        </span>
                    </Link>

                </div>
            </div>
        </div>

    )
}