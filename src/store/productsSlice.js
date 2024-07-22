
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const PRODUCTS_URL = "/api/products";

const initialState = {
    products: [],
    productsCart:[],
    totalQuantity:0,
    showCart:false,
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(PRODUCTS_URL)
    return response.data.products
})

export const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        addToCart(state,action){
            const newItem=action.payload;
            const productClicked =state.products.find( (item)=> item.id === newItem.id);
            //incrementing the product
            productClicked.amount++;

            //adding to the cart

            const existingCartProduct =state.productsCart.find( (item)=> item.id === productClicked.id);

            if(existingCartProduct){
                existingCartProduct.amount++;
                existingCartProduct.totalPrice+=productClicked.price;
            }else{
                state.productsCart.push({
                    id:productClicked.id,
                    price:productClicked.price,
                    amount:productClicked.amount,
                    totalPrice:productClicked.price,
                    image:productClicked.image1,
                    name:productClicked.name,
                })
                state.totalQuantity++;
            } 

        },
        removeFromCart(state,action){
            const newItem=action.payload;
            const productClicked =state.products.find( (item)=> item.id === newItem.id);
            //incrementing the product
            if(productClicked.amount){productClicked.amount--}
            if(productClicked.amount === 0 ){
                state.productsCart = state.productsCart.filter(item=> item.id !== newItem.id)
                state.totalQuantity--;
            }else{
                productClicked.amount--;
                productClicked.totalPrice -=productClicked.price 
            }

        },
        removeFromCartOnce(state,action){
            const newItem=action.payload;
            const productClicked =state.products.find( (item)=> item.id === newItem.id);
            //incrementing the product
            productClicked.amount=0
            if(productClicked.amount === 0 ){
                state.productsCart = state.productsCart.filter(item=> item.id !== newItem.id)
                state.totalQuantity--;
            }

        },
        showCartItems(state,action){
            state.showCart=!state.showCart
        }

    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const loadedProducts = action.payload
                //const loadedProducts = action.payload
                // Add any fetched products to the array
                state.products = state.products.concat(loadedProducts)
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }

})
export const selectAllProducts=(state)=>state.products.products;
export const selectAllCartProducts=(state)=>state.products.productsCart;
export const allCartProductsTotal=(state)=>state.products.totalQuantity;
export const showAllCartItems=(state)=>state.products.showCart;
export const getProductsStatus=(state)=>state.products.status;
export const getProductsError=(state)=>state.products.error;

export const productsActions=productsSlice.actions
