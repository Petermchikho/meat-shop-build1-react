import React from "react"
import {Link} from "react-router-dom"
import CTA from "../../assets/images/cta_icon.png"
export default function GetAQuote(){
    return(
        <>
            <section className="get-a-quote">
                <div className="quote-inner">
                    <img src={CTA} alt="" />
                    <h3>Get a Free Quote</h3>
                    <div className="buttons-quotes">
                        <Link to="/products">
                            <button className="buy">
                                 <span>BUY NOW</span>
                            </button>
                        </Link>
                        <Link to="tel:0998671706">
                            <button className="call">
                                <span className="icon">
                                    <i className="bi bi-headset">

                                    </i>
                                </span>
                                <span className="red">MAKE A CALL</span>

                            </button>
                        </Link>
                    </div>
                </div>

            </section>
        </>
    )
}