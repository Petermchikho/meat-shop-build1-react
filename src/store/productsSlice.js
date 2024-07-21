
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const PRODUCTS_URL = "/api/products";

const initialState = {
    products: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(PRODUCTS_URL)
    return response.data
})

export const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{

    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const loadedProducts = action.payload

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
export const getProductsStatus=(state)=>state.products.status;
export const getProductsError=(state)=>state.products.error;
