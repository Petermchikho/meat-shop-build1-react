
export async function getProducts(id){
    const url=id ? `/api/products/${id}` : "/api/products"
    const res = await fetch(url)
    if(!res.ok){
        throw{
            message:"unable to fetch the products",
            statusText:res.statusText,
            status:res.status
        }
    }
    const data =await res.json()
    return data.products
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
