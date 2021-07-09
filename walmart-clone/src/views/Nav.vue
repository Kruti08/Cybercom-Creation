<template>
<nav class="mininav">
    <div class="container">
        <div class="nav__minicontainer">
            <div class="nav__left main">
                <span class="logo">
                    <h4>Pickup & delivery</h4>
                </span>
                <span class="logo">
                    <h4>Walmart.com</h4>
                </span>
            </div>
        </div>
    </div>
</nav>
<nav class="nav">
    <div class="container">
        <div class="nav__container">
            <div class="nav__left">
                <span class="logo">
                    <router-link to='/'>
                    <p>Walmart</p>
                    <img src="../assets/Images/walmart_logo.jpg" alt="">
                    </router-link>
                </span>
            </div>
            <div class="nav__center">
                <div>
                    <input type="text" placeholder="search Walmart.com" id="inputsearch">
                </div>
            </div>
            <div class="nav__right">
                <ul>
                    <li>
                        <a href="">
                            <span class="nav__right__container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" fill="currentColor" class="bi bi-person" viewBox="0 0 15 15">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                </svg>
                                <span>Account</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                            <span>My Item</span>
                        </a>
                    </li>
                    <li>
                        <router-link to='/cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.8em" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                            </svg>
                            <span class="cartItems">{{getQtyTotal}}</span>
                        </router-link>
                    </li>
                </ul>    
            </div>
        </div>
    </div>
</nav>
<nav class="another__nav">
    <div class="container">
        <div class="nav__another__navcontainer">
            <div class="nav__another__nav__center">
                <img src="../assets/Images/walmart.png" class="details">
                <p class="details">Free shipping with no order minimum required. Restrictions apply.</p>
            </div>
        </div>
    </div>
</nav>    
</template>

<script>
import {mapGetters } from 'vuex';

export default {
    computed:{
        ...mapGetters(['getQtyTotal']),
    }
}
</script>

<style scoped>

.main{
    margin: 0px !important;
}

.mininav{
    width: 100%;
    height: 40px;
    background-color: #041e42;
}

.nav__minicontainer{
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    justify-content: space-between;
}

.logo img{
    float: right;
}

.logo p{
    float: left;
    padding: 3px 10px 0px 0px;
    font-family: BogleWeb, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 600;
    color: #fff;
    font-size: 20px;
}   

.logo{
    overflow: hidden;
}

.logo h4{
    float: left;
    /* padding: 0px 0px 0px 0px; */
    padding: 25px 25px 15px 25px;
    text-align: center;
    font-family: BogleWeb, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: #fff;
}

.nav{
    width: 100%;
    height: 70px;
    background-color: #041e42;
}

.nav__container{
    display: flex;
    align-items: center;
    height: 70px;
    width: 100%;
    justify-content: space-between;
}

.nav__left{
    margin-left: 30px;
}

.nav__left img{
    width: 25px;
    height: 25px;
}

.nav__right{
    margin-right: 20px;
}

.nav__right ul li{
    list-style: none;
    display: inline;
    padding: 10px;
}

.nav__right ul li a{
    text-decoration: none;
    color: #fff;
    padding: 0px 5px 0px 5px;
    text-align: center;
}

.nav__right ul li a span{
    /* float: left; */
    margin: 12px;
    font-family: BogleWeb, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: #fff;
}

#inputsearch{
    width: 550px;
    height: 35px;
    padding-left: 30px ;
    border-top-left-radius: 0.7em;
    border-bottom-left-radius: 0.7em;
    border: none;
}

.cartItems{
    position: absolute;
    top: 30px;
    right: 0;
    width: 25px;
    height: 25px;
    border: 1px solid #fced70;
    background-color: #fced70;
    color: #000 !important;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    padding-top: 2px ;
}

.another__nav{
    width: 100%;
    background-color: #0071DC;
    height: 65px;
    color: #fff;
    overflow: hidden;
}

.another__nav div div div {
    margin-left: 25%;
}

.another__nav div div div .details{
    float: left;
}

.another__nav div div div img{
    height: 60px;
    padding-top: 10px;
}

.another__nav div div div p{
    float: left;
    padding-top: 20px;
    text-align: center;
    font-family: sans-serif;
    font-size: 18px;
    color: #fff;
}

</style>