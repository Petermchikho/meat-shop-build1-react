import React from "react"
import HeroGeneral from "../components/HeroGeneral"
import TeamImg from "../assets/images/team_info_thumb.png"
import MemberIcon from "../assets/images/member_icon.png"
import Image1 from "../assets/images/sd_img02.jpg"
import ProductShop from "../components/ShopComponents/ProductShop"
import {getProducts} from "../api"
import { useLoaderData,useSearchParams,Link } from "react-router-dom"
import Shape from "../assets/images/title_shape.png"
export function loader(){
    return getProducts()
}
export default function TeamDetails(){
    const data=useLoaderData()
    const [products,setProducts]=React.useState(data)
    const [searchParams,setSearchParams]=useSearchParams()
    const stateSearch=searchParams.toString()
    const displayedProducts=products.filter((product)=>{
        return(product.category==="organic")
    })
    function addition(id){
        setProducts((prev)=>{
            return prev.map((item)=>{
                return (item.id === id ?{...item,amount:item.amount +1} : item)
            })
        })
    }
    function subtract(id){
        setProducts((prev)=>{
            return prev.map((item)=>{
                return (item.id === id && item.amount>0 ?{...item,amount:item.amount -1} : item)
            })
        })

    }
    const productsElements=displayedProducts.slice(-4).map((item)=>{
        return(
            <ProductShop 
                key={item.id}
                id={item.id}
                new={item.new}
                category={item.category}
                name={item.name}
                price={item.price}
                amount={item.amount}
                image1={item.image1}
                onAdd={addition}
                onSubtract={subtract}
                state={stateSearch}
            />

        )
    })
    return(
        <div id="about">
            <HeroGeneral
                title="Team"
            />
            <section class="team-info">
                <div class="image-team">
                    <img src={TeamImg} alt="" />
                </div>
                <div class="details-team">
                    <div class="details-team-top">
                        <p class="name">
                            Peter mchikho
                        </p>
                        <div class="location">
                            <i class="bi bi-geo-alt-fill green">

                            </i>
                            Area 24,Lillongwe Malawi.
                        </div>

                    </div>
                    <div class="details-team-bottom">
                        <p><i class="bi bi-patch-check-fill green"></i> Phone: +265998671706</p>
                        <p><i class="bi bi-patch-check-fill green"></i> Email: petercharlesmchikho1@gmail.com</p>
                        <div class="socials">
                            <a href=""><span><i class="bi bi-facebook"></i></span></a>
                            <a href=""><span><i class="bi bi-instagram"></i></span></a>
                            <a href=""><span><i class="bi bi-linkedin"></i></span></a>
                        </div>
                    </div>

                </div>
                <div class="last-part-details">
                    <img src={MemberIcon} alt="" />
                    <p>Member</p>

                </div>

            </section>
            <section class="blogs team-details">
                <div class="blog-inner-container">
                    <div class="blogs-left">
                        <div class="blog-container-main">
                            
                            
                            <div class="blog-body">
                                <a href="">
                                    <h6>Full information</h6>
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
                                        <img src={Image1} alt="" />

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
                        

                        

                    </div>
                    <div class="blogs-right">
                        <div class="check-home">
                            <h6>
                                CHECK Home Enquiry
                            </h6>
                        </div>
                        <form action="">
                            <div class="input-label">
                                <label for="">Your name*</label>
                                <input type="text" />
                            </div>
                            <div class="input-label">
                                <label for="">Your email*</label>
                                <input type="email" />
                            </div>
                            <div class="input-label">
                                <label for="">Your number*</label>
                                <input type="number" />
                            </div>
                            <div class="input-label">
                                <label for="">Your Enquiry*</label>
                                <textarea name="" id="" />
                            </div>
                            <label for=""><input type="checkbox" name="" id="" /> i agree with term of privacy</label>
                            <button>
                                Submit Enquiry
                            </button>
                        </form>
                        
                        
                    </div>
                </div>
            </section>
            <section class="organic-products-team">
                <div class="organic-products-intro section-padding">
                    <p class="fancy-text">
                        Organic Shop
                    </p>
                    <h4>
                        Our Organic Products
                    </h4>
                    <img src={Shape} alt="" />
                </div>
                <div class="products-shop ">
                    {productsElements}
                </div>
                <div class="shop-now">
                    <Link to="/products" ><button>
                        Shop Now
                    </button></Link>
                </div>
            </section>
        
        </div>
    )
}