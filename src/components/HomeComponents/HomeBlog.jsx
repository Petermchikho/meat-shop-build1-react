import React from "react";

export default function HomeBlog(props){
    return(
        <div className="blog" key={props.id}>
            <div className="blog-image">
                <img src={props.image} alt="" />
            </div>
            <div className="content">
                <div className="authour-comment">
                    <a href="" className="author">
                        <i className="bi bi-person-fill">

                        </i>
                        <p>
                            {props.author}
                        </p>

                    </a>
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
                        <a href="">
                            <p>{props.title}</p>
                        </a>
                        

                    </div>
                    <div className="content">
                        <p>{props.attention}</p>

                    </div>
                </div>
                <div className="read-more">
                    <a href=""><p className="read-more-p">Read More</p></a>
                    <a href="" className="button-link">
                        <span>
                            <i className="bi bi-chevron-right"></i>
                        </span>
                    </a>

                </div>
            </div>
        </div>

    )
}