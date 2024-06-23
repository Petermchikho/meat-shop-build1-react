import React from "react"
import Logo from "../assets/images/logo.png"
import {Link,NavLink} from "react-router-dom"
export default function Header(){
    const [scroll,setScroll] = React.useState(false)
    const [show,setShow]=React.useState(false)
    const headerScrolled = () => {
        if (window.scrollY > 150) {
          setScroll(true)
          
        } else {
            setScroll(false)           
        }
      }
    React.useEffect(()=>{
        
        window.addEventListener('load', headerScrolled);
        document.addEventListener('scroll',headerScrolled);
        return () => {
            window.removeEventListener('load', headerScrolled);
            document.removeEventListener('scroll', headerScrolled);
        };

    },[])
    function navMobile(){
        return(
            setShow((prev)=>!prev)
        )
    }
    const [nav,setNav]=React.useState({
        nav1:false,
        nav2:false,
        nav3:false,
        nav4:false,
    })
    function clickHandlerOne(){
        setNav((prev)=>{
                return{
                    ...prev,
                    nav1: !prev.nav1,
                    nav2:false,
                    nav3:false,
                    nav4:false
                }
        })
    }
    function clickHandlerTwo(){
        setNav((prev)=>{
                return{
                    ...prev,
                    nav2: !prev.nav2,
                    nav1:false,
                    nav3:false,
                    nav4:false
                }
        })
    }
    function clickHandlerThree(){
        setNav((prev)=>{
                return{
                    ...prev,
                    nav3: !prev.nav3,
                    nav2:false,
                    nav1:false,
                    nav4:false
                }
        })

    }
    function clickHandlerFour(){
        setNav((prev)=>{
                return{
                    ...prev,
                    nav4: !prev.nav4,
                    nav2:false,
                    nav1:false,
                    nav3:false
                }
        })

    }
    return(
        <>
          <header id="header" className={`${scroll ? "header-scrolled" : " "}`} >
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
                                <Link to="mailto:petercharlesmchikho1@gmail.com" >
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
                            <NavLink to="/"  className={({isActive})=> isActive ? "main-link active" :"main-link"}>HOME</NavLink>
                            <ul className="nav-link-minor active">
                                <li className="active"><span></span><NavLink to="/"  className={({isActive})=> isActive ? "active" : ""}>HOME ONE</NavLink></li>
                                <li><span></span><NavLink to="/" className={({isActive})=> isActive ? "active" : ""}>HOME TWO</NavLink></li>
                                <li><span></span><NavLink to="/" className={({isActive})=> isActive ? "active" : ""}>HOME THREE</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/about" className={({isActive})=> isActive ? "main-link active" :"main-link"}>ABOUT US</NavLink>
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/products" className={({isActive})=> isActive ? "main-link active" :"main-link"}>PRODUCTS</NavLink>
                            
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/blogs" className="main-link">BLOG</NavLink>
                            <ul className="nav-link-minor">
                                <li><span></span><NavLink to="/blogs" className={({isActive})=> isActive ? "active" : ""}>OUR BLOGS</NavLink></li>
                                <li><span></span><NavLink to="/blogs" className={({isActive})=> isActive ? "active" : ""}>BLOG DETAILS</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/pages" className={({isActive})=> isActive ? "main-link active" :"main-link"}>
                               PAGES
                            </NavLink>
                            <ul className="nav-link-minor">
                                <li><span></span><NavLink to="/pages" className={({isActive})=> isActive ? "active" : ""}>SERVICES PAGE</NavLink></li>
                                <li><span></span><NavLink to="/pages" className={({isActive})=> isActive ? "active" : ""}>SERVICES DETAILS</NavLink></li>
                                <li><span></span><NavLink to="/pages" className={({isActive})=> isActive ? "active" : ""}>TEAM DETAILS</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/contact" className={({isActive})=> isActive ? "main-link active" :"main-link"}>CONTACT</NavLink>
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
                    <Link to="tel:0998671706" className="search-contact-contact">
                        <button>
                            +265 998671706
                        </button>
                    </Link>
                    <div className="nav-opener" onClick={navMobile}>
                        <i className="bi bi-list" id="open-nav"></i>
                    </div>

                </div>

            </nav>
            <div className={`mobile-nav ${show ? "show" : ""}`}>
                <div className="transparent" onClick={navMobile}></div>
                <div className="nav-container" >
                    <div className="logo-close">
                        <img src="assets/images/logo.png" alt="" />
                        <i className="bi bi-x" id="close-nav" onClick={navMobile}>

                        </i>
                    </div>
                    <div className="mobile-links">
                        <ul className="mobile-nav-links">
                            <li className="mobile-nav-link-main drop-down-main active">
                                <NavLink to="/"  className="mobile-main-link" onClick={clickHandlerOne}>HOME
                                    <div className="drop-down">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </NavLink>
                                <ul className={`mobile-nav-link-minor ${nav.nav1 ? "show" : " "}`}>
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
                                <NavLink  to="/products" className="mobile-main-link" onClick={clickHandlerTwo}>PRODUCTS
                                </NavLink>
                                
                            </li>
                            <li className="mobile-nav-link-main drop-down-main">
                                <NavLink to="/blogs" className="mobile-main-link" onClick={clickHandlerThree}>BLOG
                                    <div className="drop-down">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </NavLink>
                                <ul className={`mobile-nav-link-minor ${nav.nav3 ? "show" : " "}`}>
                                    <li><NavLink to="/blogs">OUR BLOGS</NavLink></li>
                                    <li><NavLink to="/blogs">BLOG DETAILS</NavLink></li>
                                </ul>
                            </li>
                            <li className="mobile-nav-link-main drop-down-main">
                                <NavLink to="/pages" className="mobile-main-link" onClick={clickHandlerFour}>PAGES
                                    <div className="drop-down">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </NavLink>
                                <ul className={`mobile-nav-link-minor ${nav.nav4 ? "show" : " "}`}>
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