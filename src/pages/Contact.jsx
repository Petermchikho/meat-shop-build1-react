import React from "react"
import HeroGeneral from "../components/HeroGeneral"

export default function Pages(){
    const style={
        border:0,
    }
    return(
        <div id="about">
            <HeroGeneral
                title="contact us"
            />
            <section class="contact-info">
                <div class="contact-info-container">
                    <div class="contact-icon">
                        <span><i class="flaticon-call"></i></span>
                        
                    </div>
                    <p class="contact-heading">
                    Phone
                    </p>
                    <p class="contact-info-detail">
                        +265998671706
                    </p>
                </div>
                <div class="contact-info-container">
                    <div class="contact-icon">
                        <span>
                            <i class="flaticon-email">

                            </i>
                        </span>
                    </div>
                    <p class="contact-heading">
                    Email
                    </p>
                    <p class="contact-info-detail">
                        petercharlesmchikho1@gmail.com
                    </p>
                </div>
                <div class="contact-info-container">
                    <div class="contact-icon">
                        <span>
                            <i class="flaticon-location">

                            </i>
                        </span>
                    </div>
                    <p class="contact-heading">
                    Adress
                    </p>
                    <p class="contact-info-detail">
                        Area 24 ,Lilongwe
                    </p>
                </div>
                <div class="contact-info-container">
                    <div class="contact-icon">
                        <span>
                            <i class="flaticon-location-1">

                            </i>
                        </span>
                    </div>
                    <p class="contact-heading">
                    Head Office
                    </p>
                    <p class="contact-info-detail">
                        Lilongwe,Malawi
                    </p>
                </div>

            </section>
            <section class="contact-us">
                <div class="contact-us-left">
                    <p class="fancy-text">
                        Experience
                    </p>
                    <h4 class="margin-bottom">
                        Get in <span class="red">Touch</span>  

                    </h4>
                    <div class="paragraph">
                        <p>Send us an email</p>
                    </div>
                    <form action="">
                        <input type="text" placeholder="Your Name * " />
                        <input type="email" placeholder="Your email *" />
                        <input type="text" placeholder="Your Subject *" />
                        <textarea name="" id="" placeholder="Message"/>
                        <button>
                            SEND MESSAGE

                        </button>
                    </form>

                </div>
                <div class="contact-us-right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15483.459893330732!2d33.79406328218273!3d-14.026017064217363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x192032a910b51523%3A0xaa99bf3ce8c8f5cf!2sArea%2024%2C%20Lilongwe!5e0!3m2!1sen!2smw!4v1719794490323!5m2!1sen!2smw" width="600" height="450" style={style} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </section>
        
        </div>
    )
}