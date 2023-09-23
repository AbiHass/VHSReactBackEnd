import { createSlice } from "@reduxjs/toolkit";
import { products, totalProducts } from "../../data/Products";

const initialState = {
    products: products, 
    totalProducts: totalProducts
}

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        getProducts: state => state
    }
})

export const {getProducts} = productsSlice.actions

export default productsSlice.reducer