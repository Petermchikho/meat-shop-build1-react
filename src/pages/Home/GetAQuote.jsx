import React from "react"

export default function GetAQuote(){
    return(
        <>
            <section className="get-a-quote">
                <div className="quote-inner">
                    <img src="assets/images/cta_icon.png" alt="" />
                    <h3>Get a Free Quote</h3>
                    <div className="buttons-quotes">
                        <a href="">
                            <button className="buy">
                                <span>BUY NOW</span>
                            </button>
                        </a>
                        <a href="tel:0998671706">
                            <button className="call">
                                <span className="icon">
                                    <i className="bi bi-headset">

                                    </i>
                                </span>
                                <span className="red">MAKE A CALL</span>

                            </button>
                        </a>
                    </div>
                </div>

            </section>
        </>
    )
}