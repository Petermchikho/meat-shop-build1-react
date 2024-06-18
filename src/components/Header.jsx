import React from "react"
import Logo from "../assets/images/logo.png"
import {Link,NavLink} from "react-router-dom"
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
                                <Link to="https://www.google.com" >
                                    petercharlesmchikho1@gmail.com
                                </Link>
                            </div>

                        </div>
                    </div>
                    
                    

                </div>
                <div className="top-nav-right">
                    <div className="top-nav-links">
                        <div className="top-nav-normal-links">
                            <Link to="/contact" className="top-nav-normal-link">
                                Help
                                
                            </Link>
                            <span className="social-line">

                            </span>

                            <Link to="/contact" className="top-nav-normal-link">
                                Support
                            </Link>
                            <span className="social-line">

                            </span>
                            <Link to="/contact" className="top-nav-normal-link">
                                Contact
                            </Link>

                        </div>
                        <div className="top-nav-social-links">
                            <Link to="/contact" className="top-nav-social-link">
                                <i className="bi bi-facebook"></i>
                            </Link>
                            <Link to="/contact" className="top-nav-social-link">
                                <i className="bi bi-twitter"></i>
                            </Link>
                            <Link to="/contact" className="top-nav-social-link">
                                <i className="bi bi-instagram"></i>
                            </Link>
                            <Link to="/contact" className="top-nav-social-link">
                                <i className="bi bi-linkedin"></i>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <nav>
                <div className="nav-logo">
                    <NavLink to="/">
                        <img src={Logo} alt="logo" />
                    </NavLink>

                </div>
                <div className="nav-links-container">
                    <ul className="nav-links">
                        <li className="nav-link-main active">
                            <NavLink to="/"  className="main-link">HOME</NavLink>
                            <ul className="nav-link-minor active">
                                <li className="active"><span></span><NavLink to="/" >HOME ONE</NavLink></li>
                                <li><span></span><NavLink to="/">HOME TWO</NavLink></li>
                                <li><span></span><NavLink to="/">HOME THREE</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/about"className="main-link">ABOUT US</NavLink>
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/products" className="main-link">PRODUCTS</NavLink>
                            <ul className="nav-link-minor">
                                <li><span></span><NavLink to="products">SHOP ONE</NavLink></li>
                                <li><span></span><NavLink to="products">SHOP TWO</NavLink></li>
                                <li><span></span><NavLink to="products">SHOP DETAILS</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/blogs" className="main-link">BLOG</NavLink>
                            <ul className="nav-link-minor">
                                <li><span></span><NavLink to="/blogs">OUR BLOGS</NavLink></li>
                                <li><span></span><NavLink to="/blogs">BLOG DETAILS</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/pages" className="main-link">
                               PAGES
                            </NavLink>
                            <ul className="nav-link-minor">
                                <li><span></span><NavLink to="/pages">SERVICES PAGE</NavLink></li>
                                <li><span></span><NavLink to="/pages">SERVICES DETAILS</NavLink></li>
                                <li><span></span><NavLink to="/pages">TEAM DETAILS</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/contact" className="main-link">CONTACT</NavLink>
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
                                <NavLink to="/"  className="mobile-main-link">HOME
                                    <div className="drop-down">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </NavLink>
                                <ul className="mobile-nav-link-minor">
                                    <li><NavLink to="/">HOME ONE</NavLink></li>
                                    <li><NavLink to="/">HOME TWO</NavLink></li>
                                    <li><NavLink to="/">HOME THREE</NavLink></li>
                                </ul>
                            </li>
                            <li className="mobile-nav-link-main">
                                <NavLink to="/about" className="mobile-main-link">ABOUT US
                                    
                                </NavLink>
                            </li>
                            <li className="mobile-nav-link-main drop-down-main">
                                <NavLink  to="/products" className="mobile-main-link">PRODUCTS
                                    <div className="drop-down">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </NavLink>
                                <ul className="mobile-nav-link-minor">
                                    <li><NavLink to="/products" >SHOP ONE</NavLink></li>
                                    <li><NavLink to="/products" >SHOP TWO</NavLink></li>
                                    <li><NavLink to="/products" >SHOP DETAILS</NavLink></li>
                                </ul>
                            </li>
                            <li className="mobile-nav-link-main drop-down-main">
                                <NavLink to="/blogs" className="mobile-main-link">BLOG
                                    <div className="drop-down">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </NavLink>
                                <ul className="mobile-nav-link-minor">
                                    <li><NavLink to="/blogs">OUR BLOGS</NavLink></li>
                                    <li><NavLink to="/blogs">BLOG DETAILS</NavLink></li>
                                </ul>
                            </li>
                            <li className="mobile-nav-link-main drop-down-main">
                                <NavLink to="/pages" className="mobile-main-link">PAGES
                                    <div className="drop-down">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </NavLink>
                                <ul className="mobile-nav-link-minor">
                                    <li><NavLink to="/pages">SERVICES PAGE</NavLink></li>
                                    <li><NavLink to="/pages">SERVICES DETAILS</NavLink></li>
                                    <li><NavLink to="/pages">TEAM DETAILS</NavLink></li>
                                </ul>
                            </li>
                            <li className="mobile-nav-link-main ">
                                <NavLink to="/contact" className="mobile-main-link border-bottom">CONTACT
                                    
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-social-links">
                        <NavLink to="/contact">
                            <i className="bi bi-facebook"></i>
                        </NavLink>
                        <NavLink to="/contact">
                            <i className="bi bi-twitter"></i>
                        </NavLink>
                        <NavLink to="/contact">
                            <i className="bi bi-instagram"></i>
                        </NavLink>
                        <NavLink to="/contact">
                            <i className="bi bi-linkedin"></i>
                        </NavLink>

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