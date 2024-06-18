import React from "react"
import Logo from "../assets/images/w_logo.png"
import Insta1 from "../assets/images/footer_insta01.png"
import Insta2 from "../assets/images/footer_insta02.png"
import Insta3 from "../assets/images/footer_insta03.png"
import Insta4 from "../assets/images/footer_insta04.png"
import Insta5 from "../assets/images/footer_insta05.png"
import Insta6 from "../assets/images/footer_insta06.png"
import Insta7 from "../assets/images/footer_insta07.png"
import Insta8 from "../assets/images/footer_insta08.png"
import Card from "../assets/images/card.png"
import {Link} from "react-router-dom"
export default function Footer(){
    return (
        <>
            <footer>
                <div className="footer-top">
                    <div className="footer-top-left">
                        <div className="social-link-footer">
                            <Link to="/contact" className="social-icon">
                                <span >
                                    <i className="bi bi-facebook"></i>

                                </span>
                            </Link>
                            <Link to="/contact" className="social-icon">
                                <span >
                                    <i className="bi bi-instagram"></i>

                                </span>
                            </Link>
                            <Link to="/contact" className="social-icon">
                                <span >
                                    <i className="bi bi-twitter"></i>

                                </span>
                            </Link>
                            <Link to="/contact" className="social-icon">
                                <span >
                                    <i className="bi bi-linkedin"></i>

                                </span>
                            </Link>
                            

                        </div>
                        <div className="logo-footer">
                            <img src={Logo} alt="" />
                        </div>

                    </div>
                    <div className="footer-top-right">
                        <h6>Our Newsletter</h6>
                        <form action="">
                            <input type="email" name="" id="" placeholder="Enter Your Email..." />
                            <button>SUBSCRIBE</button>
                        </form>

                    </div>

                </div>
                <div className="footer-bottom">
                    <div className="about-open">
                        <div className="about">
                            <h6>
                                about Peter
                            </h6>
                            <p color="grey">
                                malawi area 24 ,lilongwe
                                
                            </p>
                            <p color="grey">
                                +265998671706
                            </p>
                            <p color="grey">petercharlesmchikho1@gmail.com</p>

                        </div>
                        <div className="open">
                            <h6>   
                            Open Hours
                            </h6>
                            <p>
                                Sunday to Friday <span className="white">06:00-18:00</span> 
                            </p>


                        </div>
                    </div>
                    <div className="links">
                        <h6>
                            Important Links
                        </h6>
                        <Link to="/contact">
                            CURATION
                        </Link>
                        <Link to="/contact">
                            ABOUT US
                        </Link>
                        <Link to="/contact">
                            MY ACCOUNT
                        </Link>
                        <Link to="/contact">
                            CONTACT
                        </Link>
                        <Link to="/contact">
                            SHIPPING & RETURNS
                        </Link>
                    </div>
                    <div className="links">
                        <h6>
                            
                        CATEGORIES
                        </h6>
                        <Link to="/contact">
                            How to Order
                        </Link>
                        <Link to="/contact">
                            Delivery Info
                        </Link>
                        <Link to="/contact">
                            FAQLink

                        </Link>
                        <Link to="/contact">
                            TermLink

                        </Link>
                        <Link to="/contact">
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="instagram">
                        <h6>INSTAGRAM</h6>
                        <div className="image-grid">
                            <div className="grid-top">
                                <img src={Insta1} alt="" />
                                <img src={Insta2} alt="" />
                                <img src={Insta3} alt="" />
                                <img src={Insta4} alt="" />
                            </div>
                            <div className="grid-bottom">
                                <img src={Insta5} alt="" />
                                <img src={Insta6} alt="" />
                                <img src={Insta7} alt="" />
                                <img src={Insta8} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-last">
                    <div className="copyright">
                        <p>&copy; 2024 By <Link to="/contact">Peter</Link>, All Rights Reserved</p>

                    </div>
                    <div className="payment">
                        <img src={Card} alt="" />
                    </div>

                </div>

            </footer>
        </>
    )
}