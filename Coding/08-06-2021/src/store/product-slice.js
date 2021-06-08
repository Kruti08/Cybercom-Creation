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
        }
    }
});

export const productActions = productSlice.actions;

export default productSlice;