<template>
    <div class="cart__container">
        <div class="row">
            <div class="col-left">
                <div v-if="getCartItems.length !==0">
                    <h1>Your Cart: {{ getQtyTotal }} items</h1>
                </div>
                <div v-if="getCartItems.length ===0" id="cart__message">
                    <span id="message1">0 Items in your Cart</span><br>
                    <span id="message2">Go ahead and by something !!</span>
                </div>
                <div v-else class="row" v-for="(products,key) in getCartItems" :key="key">
                    <div class="col-1">
                        <div class="product__image">
                            <img :src="require(`../assets/Images/Products/${products.image}`)" alt="">
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="product__details">
                            <span>{{ products.details}}</span>
                        </div>
                    </div>
                    <div class="col-3">
                        <p>Qty:</p>
                        <div class="product__qty">
                            <select class="select" v-model="products.qty" @change="updateCart({$event, id:products.id})">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="product__price">
                            <p class="pa"> {{ products.convertedPrice}}</p>
                            <p class="total"> ${{ products.total }}</p>
                            <p class="pa">{{ products.delieveryTime }}</p>
                            <p class="pa">pickup today</p>
                        </div>
                    </div>
                    <span id="details">
                        <span class="ld" @click="removeFromCart({id: products.id})">Remove</span>
                    </span>
                </div>
            </div>
            <div class="col-right">
                <div class="container__details">
                    <div class="products__subTotal">
                        <span>Subtotal ({{ getQtyTotal }} items)</span> 
                        <span class="value1">${{ getSubTotal }}</span>       
                    </div>
                    <div class="products__delievery">
                        <span>Delivery</span>
                        <span class="value2">Free</span>       
                    </div>
                    <div class="products__taxes__fees">
                        <span>Taxes and Fees</span>
                        <span class="value3">----</span>       
                    </div>
                    <hr>
                    <div class="est__total">
                        <span>Est. Total</span>
                        <span class="value4">${{ getSubTotal }}</span>       
                    </div>
                    <div class="button">
                        <button>Checkout</button> 
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    computed:{
        ...mapGetters(['getCartItems','getSaveItems','getSubTotal','getQtyTotal']),
    },
    methods:{
        ...mapMutations(['updateCart','removeFromCart']),
    },
}
</script>

<style scoped>

.cart__container{
    width: 1480px ;
    margin: 0 auto;
}

.row{
    height: 250px;
    border-top: 1px solid #f5f5f5;
}
.row .col-left{
    padding-top: 5%;
    width: 1100px;
    border-right: 1px solid #d3d4d2;
}

.col-left .row{
    padding-top: 5%;
}

.row .col-1{
    width: 165px;
    height: 120px;
}

.row .col-1 .product__image img{
    width: 112px;
    height: 112px;
}
.row .col-2{
    width: 450px;
    height: 120px;
}

.row .col-2 .product__details{
    font-size: 1.2rem;
    line-height: 1.375rem;
    /* width: 100%; */
    word-wrap: break-word;
    font-weight: 400;
}

.row .col-2 .product__details{
    margin: 0px 25px 0px 20px;
}

.row .col-3{
    width: 165px;
    height: 120px;
    text-align: center;
}

.row .col-3 p{
   margin-bottom: 10px ;
   margin-right:45px;
}

.row .col-3 .product__qty select{
    width: 74px;
    height: 30px;
    padding-left: 20px ;
    border: none;
    border-bottom: 3px solid #a4a4a4;
    font-size: 15px;
    font-weight: 600 ;
}

.row .col-4{
   width: 300px;
   text-align: right;
}

.row .col-4 .product__price{
   height: 100%;
}


.col-4 .product__price .pa{
    font-size: 0.875rem;
    line-height: 1.5;
}

.col-4 .product__price .total{
    font-size: 1.1rem;
    line-height: 1.5;
    font-weight: 600;
    padding-top: 15px;
    padding-bottom: 10px;
}

.row #details {
    margin-left: 93%;
}

.row #details .ld{
    border-bottom: 1px solid #000;
    cursor: pointer;
}

.col-right{
    width: 370px;
}

.container__details{
    margin: 20px;
    font-size: 16px;
    display: inline-block;
    text-align: left;
    vertical-align: top;
    line-height: 2.5;
    font-weight: 300;
    width: 100% ;
}

.value1{
    margin-left:170px;
    font-weight: 600;
}

.value2{
    margin-left:235px;
}

.value3{
    margin-left:185px;
}

.value4{
    margin-left:240px;
    font-weight: 600;
}

.button button{
    margin-top: 30px ;
    padding: 15px 150px;
    font-size: 14px;
    font-weight: 600;
    background-color: rgb(0, 101, 255);
    color: #fff ;
    border: none;
    border-radius: 1.7em;
    cursor: pointer;
}

#cart__message{
    border-top: 1px solid #d5d5d5 ;
    height: 400px;
}

#message1{
    font-size: 32px;
    margin: 50px ;
    position: absolute;
}

#message2{
    position: absolute;
    margin: 100px 0px 0px 50px;
    font-size: 20px;
    color: #a5a5a5;
}

</style>