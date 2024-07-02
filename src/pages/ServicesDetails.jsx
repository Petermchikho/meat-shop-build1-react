import React from "react"
import HeroGeneral from "../components/HeroGeneral"
import FaqShape1 from "../assets/images/faq_shape01.png"
import FaqShape2 from "../assets/images/faq_shape02.png"
import Image1 from "../assets/images/blog_img01.jpg"
import Image2 from "../assets/images/sd_img02.jpg"
import Contact from "../assets/images/add_banner_cleanup.jpg"
import {Link} from "react-router-dom"
export default function ServicesDetails(){
    const [question,setQuestion]=React.useState({
        question1:true,
        question2:false,
        question3:false,
    })
    function clickHandlerOne(){
        setQuestion((prev)=>{
                return{
                    ...prev,
                    question1: !prev.question1,
                    question2:false,
                    question3:false
                }
        })
    }
    function clickHandlerTwo(){
        setQuestion((prev)=>{
                return{
                    ...prev,
                    question2: !prev.question2,
                    question1:false,
                    question3:false
                }
        })
    }
    function clickHandlerThree(){
        setQuestion((prev)=>{
                return{
                    ...prev,
                    question3: !prev.question3,
                    question2:false,
                    question1:false
                }
        })

    }
    return(
        <div id="about">
            <HeroGeneral
                title="services details"
            />
            <section class="blogs">
                <div class="blog-inner-container">
                    <div class="blogs-left">
                        <div class="blog-container-main">
                            <div class="blog-image-main">
                                <img src={Image1} alt="" />

                            </div>
                            
                            <div class="blog-body">
                                <a href="">
                                    <h6>Necessary for the Human Body</h6>
                                </a>
                                <div class="paragraph">
                                    <p>Meat provide well shaped fresh and the organic meat well animals is Humans ha hunted schistoric times meat, the flesh or other edible parts of animals usually domesticated cattle, swine, and sheep used for food, including not only the muscles also the tendons.debut novel from poet Oli Hazzard, consists of a single, 50,000\-word sentence. An epistolary fiction addressed to an unidentified email recipient, the novel is modelled after the Japanese prose genre of the zuihitsu</p>
                                </div>
                                <div class="paragraph">
                                    <p>
                                        Humans ha hunted schistoric times meat, the flesh or other edible parts of animals usually domesticated cattle, swine, and sheep used for food, including not only the muscles also the tendons.debut novel from poet Oli Hazzard, consists of a single, 50,000\-word sentence. An epistolary fiction addressed to an unidentified email recipient, the novel is modelled after the Japanese.
                                    </p>
                                </div>
                                <div class="image-side-paragraph">
                                    <div class="side-left">
                                        <img src={Image2} alt="" />

                                    </div>
                                    <div class="side-right">
                                        <h6>Garden Fresh Market</h6>
                                        <div class="paragraph">
                                            <p>Meat provide well shaped fresh and is organic meat well animals Humans have hunted schistoic times thats meat, the flesh other edible parts animal usually domesti cated the cattle, animals is Humans have hunted have hunted animal.</p>
                                            <div class="list-p">
                                                <p><i class="bi bi-patch-check-fill"></i>Humans Meat provide well shaped fresh</p>
                                                <p><i class="bi bi-patch-check-fill"></i>Meat provide well shaped fresh</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="paragraph">
                                    <p>
                                        Humans ha hunted schistoric times meat, the flesh or other edible parts of animals usually domesticated cattle, swine, and sheep used for food, including not only the muscles also the tendons.debut novel from poet Oli Hazzard, consists of a single, 50,000\-word sentence. An epistolary fiction addressed to an unidentified email recipient, the novel is modelled after the Japanese.
                                    </p>
                                </div>
                                

                            </div>
                        </div>
                        <div class="services-details-question">
                            <div class="left-headings">
                                
                                <h5>
                                    Frequently <span class="red">Asked</span>  Questions.
            
                                </h5>
            
                            </div>
                            <div className="left-questions">
                                <div className="question-answer">
                                    <div className="question" onClick={clickHandlerOne}>
                                        <p>
                                            Who produces your meat?
                                        </p>
                                        <span>
                                            <i className={`bi bi-${question.question1 ? "chevron-up" :"chevron-down"}`}>

                                            </i>
                                        </span>
                                    </div>
                                    {
                                        question.question1 ? 
                                        <div className="answer">
                                            <p>
                                                Our animals are rared on our personal farms ,taken care to the 
                                                fullest to insure they are disease free.
                                            </p>
                                        </div>:" "

                                    }
                                    

                                </div>
                                <div className="question-answer">
                                    <div className="question" onClick={clickHandlerTwo}>
                                        <p>
                                            Where is your shop located?
                                        </p>
                                        <span>
                                            <i className={`bi bi-${question.question2 ? "chevron-up" :"chevron-down"}`}>

                                            </i>
                                        </span>
                                    </div>
                                    {
                                        question.question2 ? 
                                        <div className="answer">
                                            <p>
                                                Our meat shop is located in Lilongwe Area 24 close to the bus stage.
                                            </p>
                                        </div>:" "

                                    }
                                    

                                </div>
                                <div className="question-answer">
                                    <div className="question" onClick={clickHandlerThree}>
                                        <p>
                                            At what time are you open?
                                        </p>
                                        <span>
                                            <i className={`bi bi-${question.question3 ? "chevron-up" :"chevron-down"}`}>

                                            </i>
                                        </span>
                                    </div>
                                    {
                                        question.question3 ? 
                                        <div className="answer">
                                            <p>
                                                Our shops are open from 6 am to 6pm 7 days a week.
                                            </p>
                                        </div>:" "

                                    }
                                    

                                </div>
                                <img src={FaqShape1} className="faq-one" alt="" />
                                <img src={FaqShape2} className="faq-two" alt="" />

                            </div>
                        </div>

                        

                    </div>
                    <div class="blogs-right">
                        <div class="heading">
                            <p class="heading-market">
                                Products
                            </p>
                            <div class="heading-underline">
                                <div class="left-line">

                                </div>
                                <div class="right-line">

                                </div>
                            </div>
                        </div>
                        <div class="services-container-detail">
                            <Link to="/products" class="service-detail">
                                <p>Chicken Meat</p>
                                <i class="bi bi-arrow-right">

                                </i>
                            </Link>
                            <Link to="/products" class="service-detail">
                                <p>Duck Meat</p>
                                <i class="bi bi-arrow-right">

                                </i>
                            </Link>
                            <Link to="/products" class="service-detail">
                                <p>Horse Meat</p>
                                <i class="bi bi-arrow-right">

                                </i>
                            </Link>
                            <Link to="/products" class="service-detail">
                                <p>Sheep Meat</p>
                                <i class="bi bi-arrow-right">

                                </i>
                            </Link>
                            
                        </div>
                        
                        <a href="tel:+265998671706" class="contact-us-image">
                            <img src={Contact} alt="" />
                        </a>
                        
                    </div>
                </div>
            </section>
        
        </div>
    )
}