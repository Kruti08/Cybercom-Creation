const cart = {
  state: {
    cartItems:{
      products : [],
    }, 
    qty:0,  
    total:0, 
  },
  mutations: {
      addToCart(state,payload){
        const product = payload.products;
        const existingProduct = state.cartItems.products.find( item => item.id === product.id);
        if(existingProduct){
          const index = state.cartItems.products.findIndex(item => item.id === product.id);
          existingProduct.qty = existingProduct.qty + 1;
          existingProduct.total = existingProduct.price * existingProduct.qty;
          state.cartItems.products[index] = existingProduct;  
        }
        else{ 
          const cartItems = { ...product, qty: 1, total:product.price};
          state.cartItems.products.push(cartItems);
        }
        state.qty++;
      },
      updateCart(state,payload){
        const id = payload.id;
        const index = state.cartItems.products.findIndex(item => item.id === id);
        const product = state.cartItems.products[index];
        let total = product.qty * product.price;
        total = total.toFixed(2);
        product.total = total;
        state.cartItems.products[index] = product;
        console.log(state);
      },
      removeFromCart(state,payload){
        const id = payload.id;
        state.cartItems.products = state.cartItems.products.filter(item => item.id !== id);
      },
      addItemToSaveForLater(_,payload){
        console.log(payload);
      }
  },
  actions: {
  },
  getters:{
    getQtyTotal(state){
      const products = state.cartItems.products;
      let qty = 0;
      for(const val of products){
        qty = Number(qty) + Number(val.qty);
      }
      qty = Number(qty);
      state.qty = qty;
      if(state.qty===0){
        return 0;
      }
      return state.qty;
    },
    getCartItems(state){
      return state.cartItems.products;
    },
    getSubTotal(state){
      const products = state.cartItems.products;
      let total = Number(0.0);
      // console.log(typeof total);
      for(const val of products){
        console.log("total: ",total);
        console.log("val totoal: ",val.total);
        console.log("val totoal type: ",typeof val.total);
        total = total + Number(val.total);
        console.log("total: ",total);
      }
      total = Number(total).toFixed(2);
      state.total = total;
      if(state.total===0){
        return 0.00;
      }
      // console.log(state.total);
      return state.total;
    }
  }
};

export default cart;