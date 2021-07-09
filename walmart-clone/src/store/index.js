import { createStore } from 'vuex';
import details from './details.js';
import products from './products.js';
import cart from './cart.js';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    details,
    products,
    cart
  }
})
