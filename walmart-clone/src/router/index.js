import { createRouter, createWebHistory } from 'vue-router';
import Home from '../screens/Home.vue';
import Cart from '../screens/Cart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
