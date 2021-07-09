// id:1,
// image: 'shop_towels.jpeg',
// details: 'Scott Professional Multi-Purpose Shop Towels, 55 Sheets per Roll,6 Ct',
// price: '$9.97',
// convertedPrice: '(3.0 c/ea)',
// delieveryTime: '2-day delivery',
<template>
    <div class="container__products">
        <div class="text__header">
          Auto Cleaning Supplies
        </div>
        <div class="row">
            <div class="col-3" v-for="(products, key) in getProducts" :key="key">
                <div class="products__image">
                    <img :src="require(`../assets/Images/Products/${products.image}`)" alt="">
                </div>
                <div class="products__details">
                    {{products.details}}
                </div>
                <div class="products__price">
                    <p><span id="price">${{products.price}}</span><span id="convertedPrice">{{products.convertedPrice}}</span></p>
                </div>
                <div class="products__time">
                    <p>{{products.delieveryTime}}</p>
                </div>
                <div class="products__button">
                  <button @click="addToCart({products, qty:1})">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'product',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
  methods:{
    ...mapMutations(['addToCart']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container__products{
    width: 1530px ;
    margin: 0 auto;
    /* margin: 20px 0px 20px 80px; */
}

.text__header{
  font-size: 1.4rem;
  letter-spacing: 1.1px;
  font-weight: 500;
  text-align: center !important;
  margin: 50px;
}


.row .col-3{
  width: 382.5px;
  height: 539px;
}

.row .col-3 .products__image{
  text-align: center;
  margin: 15px;
}

.row .col-3 .products__image img{
  width: 290px;
  height: 290px;
}

.row .col-3 .products__details{
  margin:40px 15px 20px 0px;
  font-size: 1.0rem;
  line-height: 1.25rem;
  overflow: hidden;
  height: 40px;
}

.row .col-3 .products__price #price{
  font-weight: bold;
}

.row .col-3 .products__price #convertedPrice{
  font-weight: 400;
  color: #a5a5a5;
  margin-left: 5px;
}

.row .col-3 .products__time{
  font-weight: 300;
  font-size: 0.9rem ;
  margin-top: 10px;;
}

.row .col-3 .products__button button{
  background-color: #fff;
  margin: 20px 0px 0px 0px;
  padding: 10px;
  font-weight: 700;
  border: 2px solid black;
  border-radius: 0.5cm;
  width: 120px;
  cursor: pointer;
}

</style>
