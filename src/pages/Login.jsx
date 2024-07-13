import React from "react"
import {useLoaderData,Form,redirect,useActionData,useNavigation,Link} from "react-router-dom"
import {loginUser} from "../api"
import Logo from "../assets/images/w_logo.png"
export function loader({request}){
   return new URL(request.url).searchParams.get("message")
   
}
export async function action({request}){
    const formData= await request.formData()
    const name= formData.get("firstName")
    const password= formData.get("password")
    try{
        const data= await loginUser({name,password})
        localStorage.setItem("loggedIn",true)
        const pathname=new URL(request.url).searchParams.get("redirectTo") || "/products"
        const response =redirect(pathname)
        response.body=true
        return response

    }catch(err){
        return err.message
    }
}

export default function Login(){
    const message=useLoaderData()
    const errorMessage=useActionData()
    const navigation=useNavigation()
    return(
        <div>
            <section class="login-page section-padding">
                <div className="login-intro">
                    <Link to="/">
                     <img src={Logo} alt="logo"/>
                    </Link>
                    <h3 className="intro-login">Welcome</h3>
                    <h4 className="intro-login">Login to continue</h4>
                    
                </div>
                <div className="page-login">
                    <h4 className="heading">
                        {message}
                    </h4>
                    <p className="heading-login">For testing purposes (Username is 1234) (Password is 1234)</p>
                    <p className="heading-login-warning">{errorMessage}</p>
                    <Form method="post" className="login-form">
                        <input 
                        name="firstName"
                        type="text"
                        placeholder="enter name"
                        />
                        <input 
                        name="password"
                        type="password"
                        placeholder="enter password"
                        />
                        <button disabled={navigation.state === "submitting"}>
                           { navigation.state === "submitting" ? "Logging in ....." : errorMessage? "Try again" : "Login"}
                            
                        </button>

                    </Form>
                </div>
                
            </section>
        </div>
    )
}