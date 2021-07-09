<template>
  <div class="home">
    <Banner />
    <Details />
    <Products />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '../views/Banner.vue'
import Details from '../components/Details.vue'
import Products from '../components/Products.vue'
export default {
  name: 'Home',
  components: {
    Banner,
    Details,
    Products
  }
}
</script>
