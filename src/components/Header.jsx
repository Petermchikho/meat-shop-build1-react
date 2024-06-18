import React from "react"

export default function Header(){
    return(
        <>
          <header id="header" >
            <div className="top-nav">
                <div className="top-nav-left">

                    <div className="top-nav-email-location">
                        <div className="top-nav-location">
                            <div className="top-nav-location-icon">
                                <i className="bi bi-geo-alt-fill">

                                </i>
                            </div>
                        </div>
                        <div className="top-nav-email">
                            <div className="top-nav-location-text">
                                <p>
                                    Area 24 lilongwe. Malawi
                                </p>
                            </div>
                            <span className="line">

                            </span>
                            <div className="top-nav-email-icon">
                                <i className="bi bi-envelope-fill">

                                </i>
                            </div>
                            <div className="top-nav-email-text">
                                <a href="">
                                    petercharlesmchikho1@gmail.com
                                </a>
                            </div>

                        </div>
                    </div>
                    
                    

                </div>
                <div className="top-nav-right">
                    <div className="top-nav-links">
                        <div className="top-nav-normal-links">
                            <a href="" className="top-nav-normal-link">
                                Help
                                
                            </a>
                            <span className="social-line">

                            </span>

                            <a href="" className="top-nav-normal-link">
                                Support
                            </a>
                            <span className="social-line">

                            </span>
                            <a href="" className="top-nav-normal-link">
                                Contact
                            </a>

                        </div>
                        <div className="top-nav-social-links">
                            <a href="" className="top-nav-social-link">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="" className="top-nav-social-link">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="" className="top-nav-social-link">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="" className="top-nav-social-link">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <nav>
                <div className="nav-logo">
                    <a href="">
                        <img src="assets/images/logo.png" alt="" />
                    </a>

                </div>
                <div className="nav-links-container">
                    <ul className="nav-links">
                        <li className="nav-link-main active">
                            <a href="#"  className="main-link">HOME</a>
                            <ul className="nav-link-minor active">
                                <li className="active"><span></span><a href="" >HOME ONE</a></li>
                                <li><span></span><a href="">HOME TWO</a></li>
                                <li><span></span><a href="">HOME THREE</a></li>
                            </ul>
                        </li>
                        <li className="nav-link-main">
                            <a href="pages/about.html" className="main-link">ABOUT US</a>
                        </li>
                        <li className="nav-link-main">
                            <a href="" className="main-link">PRODUCTS</a>
                            <ul className="nav-link-minor">
                                <li><span></span><a href="">SHOP ONE</a></li>
                                <li><span></span><a href="">SHOP TWO</a></li>
                                <li><span></span><a href="">SHOP DETAILS</a></li>
                            </ul>
                        </li>
                        <li className="nav-link-main">
                            <a href="" className="main-link">BLOG</a>
                            <ul className="nav-link-minor">
                                <li><span></span><a href="">OUR BLOGS</a></li>
                                <li><span></span><a href="">BLOG DETAILS</a></li>
                            </ul>
                        </li>
                        <li className="nav-link-main">
                            <a href="" className="main-link">PAGES</a>
                            <ul className="nav-link-minor">
                                <li><span></span><a href="">SERVICES PAGE</a></li>
                                <li><span></span><a href="">SERVICES DETAILS</a></li>
                                <li><span></span><a href="">TEAM DETAILS</a></li>
                            </ul>
                        </li>
                        <li className="nav-link-main">
                            <a href="" className="main-link">CONTACT</a>
                        </li>
                    </ul>

                </div>
                <div className="search-contact">
                    <div className="search-contact-lines">
                        <span className="line-one"></span>
                        <span className="line-two"></span>
                    </div>
                    <div className="search-contact-icons">
                        <div className="search-icon">
                            <i className="bi bi-search"></i>
                        </div>
                        <div className="basket-icon">
                            <i className="bi bi-basket2-fill">

                            </i>
                            <span className="counter">
                                0
                            </span>
                        </div>

                    </div>
                    <div className="search-contact-contact">
                        <button>
                            +265 998671706
                        </button>
                    </div>
                    <div className="nav-opener">
                        <i className="bi bi-list" id="open-nav"></i>
                    </div>

                </div>

            </nav>
            <div className="mobile-nav">
                <div className="nav-container">
                    <div className="logo-close">
                        <img src="assets/images/logo.png" alt="" />
                        <i className="bi bi-x" id="close-nav">

                        </i>
                    </div>
                    <div className="mobile-links">
                        <ul className="mobile-nav-links">
                            <li className="mobile-nav-link-main drop-down-main active">
                                <a  className="mobile-main-link">HOME
                                    <div className="drop-down">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </a>
                                <ul className="mobile-nav-link-minor">
                                    <li><a href="" >HOME ONE</a></li>
                                    <li><a href="">HOME TWO</a></li>
                                    <li><a href="">HOME THREE</a></li>
                                </ul>
                            </li>
                            <li className="mobile-nav-link-main">
                                <a href="pages/about.html" className="mobile-main-link">ABOUT US
                                    
                                </a>
                            </li>
                            <li className="mobile-nav-link-main drop-down-main">
                                <a  className="mobile-main-link">PRODUCTS
                                    <div className="drop-down">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </a>
                                <ul className="mobile-nav-link-minor">
                                    <li><a href="">SHOP ONE</a></li>
                                    <li><a href="">SHOP TWO</a></li>
                                    <li><a href="">SHOP DETAILS</a></li>
                                </ul>
                            </li>
                            <li className="mobile-nav-link-main drop-down-main">
                                <a href="#" className="mobile-main-link">BLOG
                                    <div className="drop-down">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </a>
                                <ul className="mobile-nav-link-minor">
                                    <li><a href="">OUR BLOGS</a></li>
                                    <li><a href="">BLOG DETAILS</a></li>
                                </ul>
                            </li>
                            <li className="mobile-nav-link-main drop-down-main">
                                <a href="#" className="mobile-main-link">PAGES
                                    <div className="drop-down">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </a>
                                <ul className="mobile-nav-link-minor">
                                    <li><a href="">SERVICES PAGE</a></li>
                                    <li><a href="">SERVICES DETAILS</a></li>
                                    <li><a href="">TEAM DETAILS</a></li>
                                </ul>
                            </li>
                            <li className="mobile-nav-link-main ">
                                <a href="" className="mobile-main-link border-bottom">CONTACT
                                    
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-social-links">
                        <a href="">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-linkedin"></i>
                        </a>

                    </div>
                    <div className="search-contact-icons">
                        <div className="search-icon">
                            <i className="bi bi-search"></i>
                        </div>
                        <div className="basket-icon">
                            <i className="bi bi-basket2-fill">

                            </i>
                            <span className="counter">
                                0
                            </span>
                        </div>

                    </div>
                    
                </div>

            </div>
          </header>
        
        </>
    )
}