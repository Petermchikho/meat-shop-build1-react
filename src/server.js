import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        products: Model,
        users: Model
    },

    seeds(server) {
        server.create("product", {
            id:"1",
            new:true,
            name:"proast chicken",
            category:"organic",
            price:2000,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product01.png",
            review:5,
            title:"Delicious meat",
            description:"Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times meat, the flesh",
            descriptionFull:"committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting and playing with them over the years, but always staying on the same track I design from instinct. It’s the only way I know how to live",
            reviews:["review 1","review2"]
        
        })
        server.create("product", {
            id:"2",
            new:true,
            name:"processed meat",
            category:"organic",
            price:2500,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product02.png"
        
        })
        server.create("product", {
            id:"3",
            new:true,
            name:"processed meat",
            category:"Venison meat",
            price:2500,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product03.png"
        
        })
        server.create("product", {
            id:"4",
            new:true,
            name:"proast chicken",
            category:"organic",
            price:2000,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product04.png"
        
        })
        server.create("product", {
            id:"5",
            new:true,
            name:"processed meat",
            category:"organic",
            price:2500,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product05.png"
        
        })
        server.create("product", {
            id:"6",
            new:true,
            name:"processed meat",
            category:"Venison meat",
            price:2500,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product06.png"
        
        })
        server.create("product",{
            id:"7",
            new:true,
            name:"processed meat",
            category:"Venison meat",
            price:2500,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product07.png"
        
        })
        server.create("product", {
            id:"8",
            new:true,
            name:"proast chicken",
            category:"organic",
            price:2000,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product08.png"
        
        })
        server.create("product", {
            id:"9",
            new:true,
            name:"processed meat",
            category:"organic",
            price:2500,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product09.png"
        
        })
        server.create("product", {
            id:"10",
            new:true,
            name:"processed meat",
            category:"Venison meat",
            price:2500,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product10.png"
        
        })
        server.create("product", {
            id:"11",
            new:true,
            name:"proast chicken",
            category:"organic",
            price:2000,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product11.png"
        
        })
        server.create("product", {
            id:"12",
            new:true,
            name:"processed meat",
            category:"organic",
            price:2500,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product12.png"
        
        })
        server.create("user", { id: "123", email: "b@b.com", password: "peter", name: "peter" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        this.timing = 2000

        this.get("/products", (schema, request) => {
            //return new Response(400, {}, {error: "Error fetching data"})
            return schema.products.all()
        })

        this.get("/products/:id", (schema, request) => {
            const id = request.params.id
            return schema.products.find(id)
        })

        this.post("/login", (schema, request) => {
            const { name, password } = JSON.parse(request.requestBody)
            // This is an extremely naive version of authentication. Please don't
            // do this in the real world, and never save raw text passwords
            // in your database 😇
            const foundUser = schema.users.findBy({ name, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            // At the very least, don't send the password back to the client 😅
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
    }
})