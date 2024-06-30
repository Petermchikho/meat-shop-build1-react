import React from "react"
import {useLoaderData,Form,redirect,useActionData,useNavigation} from "react-router-dom"
import {loginUser} from "../api"
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
        <div id="about">
            <section class="hero section-padding">
                <div className="page-not-found">
                    <h4 className="heading">
                        {message}
                    </h4>
                    <p className="heading">For testing purposes username and password should be peter</p>
                    <h5 className="heading">{errorMessage}</h5>
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