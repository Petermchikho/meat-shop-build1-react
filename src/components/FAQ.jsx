import  React from "react"
import Faq1 from "../assets/images/faq_img01.png"
import Faq2 from "../assets/images/faq_img02.png"
import Faq3 from "../assets/images/faq_img03.png"
import FaqShape1 from "../assets/images/faq_shape01.png"
import FaqShape2 from "../assets/images/faq_shape02.png"
export default function FAQ(){
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
        <>
        <section className="frequently-asked-questions">
            <div className="faq-right">
                <img src={Faq1} alt="" className="one" />
                <div className="two-white">
                    <span className="white-behind">

                    </span>
                    <img src={Faq3} alt="" className="two" />
                </div>
                <img src={Faq2} alt="" className="three" />
            </div>
            <div className="faq-left">
                <div className="left-headings">
                    <p className="fancy-text">
                        Customer Quotes
                    </p>
                    <h4>
                        Frequently <span className="red">Asked</span>  Questions.

                    </h4>

                </div>
                <div className="left-questions">
                    <div className="question-answer">
                        <div className="question" onClick={clickHandlerOne}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur.
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
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Sequi assumenda odio sit quibusdam. Explicabo, quas!
                                </p>
                            </div>:" "

                        }
                        

                    </div>
                    <div className="question-answer">
                        <div className="question" onClick={clickHandlerTwo}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur.
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
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Sequi assumenda odio sit quibusdam. Explicabo, quas!
                                </p>
                            </div>:" "

                        }
                        

                    </div>
                    <div className="question-answer">
                        <div className="question" onClick={clickHandlerThree}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur.
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
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Sequi assumenda odio sit quibusdam. Explicabo, quas!
                                </p>
                            </div>:" "

                        }
                        

                    </div>
                    <img src={FaqShape1} className="faq-one" alt="" />
                    <img src={FaqShape2} className="faq-two" alt="" />

                </div>
            </div>
        </section>
        </>
    )
}