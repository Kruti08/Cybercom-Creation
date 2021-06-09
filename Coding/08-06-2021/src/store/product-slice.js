import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState:{
        products: [],
    },
    reducers: {
        addProduct(state,action){
            const product = action.payload;
            state.products.push({
                id: product.id,
                name: product.productName,
                category: product.productCategory,
                price: product.productPrice,
                shortDescription: product.productShortDescription,
                longDescription: product.productLongDescription
            });
        },
        editProduct(state,action){
            const existingProduct = action.payload;
            state.products = state.products.filter(product => product.id !== existingProduct.id);
            state.products.push({
                id: existingProduct.id,
                name: existingProduct.productName,
                category: existingProduct.productCategory,
                price: existingProduct.productPrice,
                shortDescription: existingProduct.productShortDescription,
                longDescription: existingProduct.productLongDescription
            });
        },
        deleteProduct(state,action){
            const id = action.payload;
            state.products = state.products.filter(product => product.id !== id);
            // console.log(state.products);
        },
    }
});

export const productActions = productSlice.actions;

export default productSlice;