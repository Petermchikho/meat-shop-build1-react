import React from "react"
import {Outlet,useLoaderData,defer} from "react-router-dom"
import {getProducts} from "../api"
import {requireAuth} from "../utils"

export async function loader({request}){
    await requireAuth(request)
    return defer({allProducts:getProducts()})
}
export default function Shop(){
    const allProducts=useLoaderData()
    return(
        <Outlet context={{allProducts}} />
    )
}