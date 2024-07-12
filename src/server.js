import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        products: Model,
        blogs:Model,
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
            price:7000,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product02.png",
            review:7,
            title:"Meat like no other",
            description:"Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times meat, the flesh",
            descriptionFull:"committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting and playing with them over the years, but always staying on the same track I design from instinct. It’s the only way I know how to live",
            reviews:["review 1","review2"]
        })
        server.create("product", {
            id:"3",
            new:true,
            name:"processed meat",
            category:"Venison meat",
            price:2500,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product03.png",
            review:3,
            title:"Delicious and Fleshh",
            description:"Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times meat, the flesh",
            descriptionFull:"committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting and playing with them over the years, but always staying on the same track I design from instinct. It’s the only way I know how to live",
            reviews:["review 1","review2"]
        })
        server.create("product", {
            id:"4",
            new:true,
            name:"proast chicken",
            category:"organic",
            price:2000,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product04.png",
            review:2,
            title:"Delicious and Tender",
            description:"Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times meat, the flesh",
            descriptionFull:"committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting and playing with them over the years, but always staying on the same track I design from instinct. It’s the only way I know how to live",
            reviews:["review 1","review2"]
        })
        server.create("product", {
            id:"5",
            new:true,
            name:"processed meat",
            category:"organic",
            price:3000,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product05.png",
            review:5,
            title:"Delicious Boneless",
            description:"Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times meat, the flesh",
            descriptionFull:"committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting and playing with them over the years, but always staying on the same track I design from instinct. It’s the only way I know how to live",
            reviews:["review 1","review2"]
        })
        server.create("product", {
            id:"6",
            new:true,
            name:"processed meat",
            category:"Venison meat",
            price:2600,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product06.png",
            review:5,
            title:"Venison meat",
            description:"Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times meat, the flesh",
            descriptionFull:"committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting and playing with them over the years, but always staying on the same track I design from instinct. It’s the only way I know how to live",
            reviews:["review 1","review2"]
        })
        server.create("product",{
            id:"7",
            new:true,
            name:"processed meat",
            category:"Venison meat",
            price:2100,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product07.png",
            review:3,
            title:"Delicious meat",
            description:"Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times meat, the flesh",
            descriptionFull:"committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting and playing with them over the years, but always staying on the same track I design from instinct. It’s the only way I know how to live",
            reviews:["review 1","review2"]
        })
        server.create("product", {
            id:"8",
            new:true,
            name:"proast chicken",
            category:"organic",
            price:4000,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product08.png",
            review:5,
            title:"Delicious",
            description:"Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times meat, the flesh",
            descriptionFull:"committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting and playing with them over the years, but always staying on the same track I design from instinct. It’s the only way I know how to live",
            reviews:["review 1","review2"]
        })
        server.create("product", {
            id:"9",
            new:true,
            name:"processed meat",
            category:"organic",
            price:2500,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product09.png",
            review:5,
            title:"Meat and Health",
            description:"Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times meat, the flesh",
            descriptionFull:"committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting and playing with them over the years, but always staying on the same track I design from instinct. It’s the only way I know how to live",
            reviews:["review 1","review2"]
        })
        server.create("product", {
            id:"10",
            new:true,
            name:"processed meat",
            category:"Venison meat",
            price:2500,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product10.png",
            review:5,
            title:"Delicious meat",
            description:"Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times meat, the flesh",
            descriptionFull:"committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting and playing with them over the years, but always staying on the same track I design from instinct. It’s the only way I know how to live",
            reviews:["review 1","review2"]
        })
        server.create("product", {
            id:"11",
            new:true,
            name:"proast chicken",
            category:"organic",
            price:7000,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product11.png",
            review:5,
            title:"Delicious ",
            description:"Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times meat, the flesh",
            descriptionFull:"committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting and playing with them over the years, but always staying on the same track I design from instinct. It’s the only way I know how to live",
            reviews:["review 1","review2"]
        })
        server.create("product", {
            id:"12",
            new:true,
            name:"processed meat",
            category:"organic",
            price:2500,
            amount:0,
            image1:"https://2024-petermchikho.netlify.app/build-1/assets/images/inner_product12.png",
            review:8,
            title:"Delicious meat",
            description:"Meat provide well shaped fresh and the organic meat well animals is Humans have hunted schistoric times meat, the flesh",
            descriptionFull:"committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting and playing with them over the years, but always staying on the same track I design from instinct. It’s the only way I know how to live",
            reviews:["review 1","review2"]
        })
        server.create("blog", {
            id:1,
            author:"Hamolin Pilot",
            attention:"Our hamburgers are more than just a meal; they are a celebration of tradition, flavor, and quality",
            title:"Hamburg Meat is Animal Flesh Food",
            commentsCount:"03",
            image:"https://2024-petermchikho.netlify.app/build-1/assets/images/blog_post01.jpg",
            date:"July 1,2024",
            category:"Cow Meat",
            quote:"Food is our common ground, a universal experience",
            quoteAuthor:"chef James Beard",
            paragraph1:"Welcome to our restaurant, where we take pride in serving the finest hamburg meat, crafted from premium animal flesh to deliver an unforgettable culinary experience. Our hamburgers are more than just a meal; they are a celebration of tradition, flavor, and quality. Each patty is meticulously prepared from top-grade beef, ensuring that every bite is juicy, tender, and packed with mouthwatering taste. We believe in honoring the roots of the classic hamburger while adding our unique twist to create something truly special for our guests.",
            paragraph2:"At our restaurant, we embrace this philosophy by offering a menu that not only delights the palate but also connects us to the rich history of hamburg meat. Our signature burgers are a testament to the timeless appeal of animal flesh food, featuring a blend of traditional recipes and innovative culinary techniques. Whether you prefer a classic cheeseburger or a gourmet creation with artisanal toppings, our diverse selection ensures there's something to satisfy every craving.",
            paragraph3:"Beyond the exceptional taste, dining at our establishment means enjoying a meal crafted with care and responsibility. We source our beef from sustainable farms committed to ethical practices, ensuring that the animal flesh used in our hamburgers meets the highest standards of quality and sustainability. Join us for a meal that not only tantalizes your taste buds but also supports a better future for our planet. Come and experience the true essence of hamburg meat, where tradition, flavor, and conscious dining come together in perfect harmony.",
            aside:{
                image:"https://2024-petermchikho.netlify.app/build-1/assets/images/sd_img02.jpg",
                heading:"Experience Hamburg Meat: A Culinary Journey",
                paragraph:"Indulge in a dining experience where hamburg meat takes center stage, and every meal is a testament to the artistry of culinary craftsmanship. Join us and discover why our hamburgers are more than just food—they're a culinary journey you won't forge",
                list:["Quality Ingredients","Diverse menu"]
            },
            comments1:{
                name:"Emely Jonson",
                image:"https://2024-petermchikho.netlify.app/build-1/assets/images/comment_avatar01.png",
                comment:"I love how your restaurant emphasizes quality and sustainability in every bite! Knowing that the hamburg meat comes from responsible sources makes dining here a guilt-free pleasure. Can't wait to try the truffle-infused burger!"
                },
            comments2:
                {
                    name:"Rosalina D.",
                    image:"https://2024-petermchikho.netlify.app/build-1/assets/images/comment_avatar02.png",
                    comment:"The variety on your menu is fantastic! It's great to see classic burgers alongside more adventurous options. As someone who appreciates good food, I appreciate your commitment to offering diverse choices that cater to different tastes. Looking forward to my next visit!"
                }
            ,
            authorFB:"link",
            authorLK:"link",
            authorTwitter:"link",
            authorDescription:"Passionate about food and sustainability, dedicated to exploring the culinary world through the lens of ethical dining and exceptional taste experiences."
    
        })
        server.create("blog", {
            id:2,
            author:"Peter Mchikho",
            attention:"Meat provide well shape fresh and organic meat well animals is Humans.",
            title:"Good Source of Iron And Flesh Food",
            comments:"07",
            image:"https://2024-petermchikho.netlify.app/build-1/assets/images/blog_post02.jpg",
    
        })
        server.create("blog", {
            id:3,
            author:"Peter Mchikho",
            attention:"Meat provide well shape fresh and organic meat well animals is Humans.",
            title:"Chicken Sausage For Sale Humanely Raised",
            comments:"05",
            image:"https://2024-petermchikho.netlify.app/build-1/assets/images/blog_post03.jpg",
    
        })
        server.create("user", { id: "123", email: "b@b.com", password: "1234", name: "1234" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        this.timing = 2000
        this.passthrough("https://api.emailjs.com/**")

        this.get("/products", (schema, request) => {
            //return new Response(400, {}, {error: "Error fetching data"})
            return schema.products.all()
        })

        this.get("/products/:id", (schema, request) => {
            const id = request.params.id
            return schema.products.find(id)
        })
        this.get("/blogs", (schema, request) => {
            //return new Response(400, {}, {error: "Error fetching data"})
            return schema.blogs.all()
        })

        this.get("/blogs/:id", (schema, request) => {
            const id = request.params.id
            return schema.blogs.find(id)
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
        this.post("https://api.emailjs.com/api/v1.0/email/send", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            console.log(attrs)
          })
    }
})