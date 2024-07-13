import React from "react"
import Logo from "../assets/images/logo.png"
import {Link,NavLink,useLocation} from "react-router-dom"
import Search from "./Search";
export default function Header(props){
    
    const { pathname } = useLocation();
    const [scroll,setScroll] = React.useState(false)
    const [show,setShow]=React.useState(false)
    const [search,setSearch]=React.useState(false)
    const headerScrolled = () => {
        if (window.scrollY > 150) {
          setScroll(true)
          
        } else {
            setScroll(false)           
        }
      }
    React.useEffect(()=>{
        setShow((prev)=> prev ? !prev : prev);
        setSearch((prev)=> prev ? !prev : prev);
        window.addEventListener('load', headerScrolled);
        document.addEventListener('scroll',headerScrolled);
        return () => {
            window.removeEventListener('load', headerScrolled);
            document.removeEventListener('scroll', headerScrolled);
        };

    },[pathname])
    function navMobile(){
        return(
            setShow((prev)=>!prev)
        )
    }
    const [navInner,setNav]=React.useState(false)
    function clickHandlerOne(){
        setNav((prev)=>!prev)
    }
    function handleSearch(){
        return(
            setSearch(prev=>!prev)
        )
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
                            
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/about" className={({isActive})=> isActive ? "main-link active" :"main-link"}>ABOUT US</NavLink>
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/products" className={({isActive})=> isActive ? "main-link active" :"main-link"}>PRODUCTS</NavLink>
                            
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/blogs" className="main-link">BLOG</NavLink>
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/pages" className={({isActive})=> isActive ? "main-link active" :"main-link"}>
                               PAGES
                            </NavLink>
                            <ul className="nav-link-minor">
                                <li><span></span><NavLink to="/pages" className={({isActive})=> isActive ? "active" : ""}>SERVICES PAGE</NavLink></li>
                                <li><span></span><NavLink to="/pages/details" className={({isActive})=> isActive ? "active" : ""}>SERVICES DETAILS</NavLink></li>
                                <li><span></span><NavLink to="/pages/team" className={({isActive})=> isActive ? "active" : ""}>TEAM DETAILS</NavLink></li>
                                <li><span></span><NavLink to="/pages/team/nothing" className={({isActive})=> isActive ? "active" : ""}>404 PAGE</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/contact" className={({isActive})=> isActive ? "main-link active" :"main-link"}>CONTACT</NavLink>
                        </li>
                        <li className="nav-link-main">
                            <NavLink to="/login" className={({isActive})=> isActive ? "main-link active" :"main-link"}>LOGIN</NavLink>
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
                            <i className="flaticon-search" onClick={handleSearch}></i>
                        </div>
                        <div className="basket-icon">
                            <i className="flaticon-shopping-basket" >

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
                                <NavLink to="#"  className="mobile-main-link">HOME
                                    
                                </NavLink>
                                
                            </li>
                            <li className="mobile-nav-link-main">
                                <NavLink to="/about" className="mobile-main-link">ABOUT US
                                    
                                </NavLink>
                            </li>
                            <li className="mobile-nav-link-main drop-down-main">
                                <NavLink  to="/products" className="mobile-main-link">PRODUCTS
                                </NavLink>
                                
                            </li>
                            <li className="mobile-nav-link-main drop-down-main">
                                <NavLink to="/blogs" className="mobile-main-link" >BLOG
                                    
                                </NavLink>
                            </li>
                            <li className="mobile-nav-link-main drop-down-main">
                                <NavLink to="#" className="mobile-main-link" onClick={clickHandlerOne}>PAGES
                                    <div className="drop-down">
                                        <i className="bi bi-chevron-down"></i>
                                    </div>
                                </NavLink>
                                <ul className={`mobile-nav-link-minor ${navInner ? "show" : " "}`}>
                                    <li><NavLink to="/pages">SERVICES PAGE</NavLink></li>
                                    <li><NavLink to="/pages/details">SERVICES DETAILS</NavLink></li>
                                    <li><NavLink to="/pages/team">TEAM DETAILS</NavLink></li>
                                    <li><NavLink to="/pages/team/nothing">404 PAGE</NavLink></li>
                                </ul>
                            </li>
                            <li className="mobile-nav-link-main ">
                                <NavLink to="/contact" className="mobile-main-link border-bottom">CONTACT
                                    
                                </NavLink>
                            </li>
                            <li className="mobile-nav-link-main ">
                                <NavLink to="/login" className="mobile-main-link border-bottom">LOGIN
                                    
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
                            <i className="flaticon-search" onClick={handleSearch}></i>
                        </div>
                        <div className="basket-icon">
                            <i className="flaticon-shopping-basket">

                            </i>
                            <span className="counter">
                                0
                            </span>
                        </div>

                    </div>
                    
                </div>

            </div>
          </header>
          {
            search && <Search products={props.products}  handleClick={handleSearch}/>
          }
        
        </>
    )
}