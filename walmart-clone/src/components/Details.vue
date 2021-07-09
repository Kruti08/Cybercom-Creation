<template>
    <div class="container__details">
        <div class="row">
            <div class="col-4" v-for="(details, key) in getDetails" :key="key">
                <h2>{{ details.title }}</h2>
                <div class="details__image">
                    <img :src="require(`../assets/Images/Details/${details.image}`)" alt="">
                </div>
                <div class="details__semiTitle">
                    {{details.semiTitle}}
                </div>
                <div class="details__detail">
                    <p>{{details.detail}}</p>
                </div>
                <div class="details__button">
                    <button>{{details.buttonDetail}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name:"Details",
    computed:{
        ...mapGetters(['getDetails']),
    }
}
</script>

<style scoped>
.container__details{
    width: 1530px ;
    margin: 0 auto;
    margin: 20px 0px 20px 80px;
}

.row{
    background-color: #f5f5f5;
}

.row .col-4{
    height: 380px;
    width: 475px;
    background-color: #fff;
    margin: 16px;
    overflow: hidden;
}

.col-4 h2{
    font-family: BogleWeb, "Helvetica Neue", Helvetica, Arial, sans-serif;;
    margin: 20px 0px 0px 20px;
    height: 28px;
    font-size: 1.25rem;
    font-weight: 600;
}

.details__image img{
    height: 140px;
    width: 240px;
    margin-top: 1.5rem;
    margin-left: 25%;
}

.col-4 .details__semiTitle{
    font-family: BogleWeb, "Helvetica Neue", Helvetica, Arial, sans-serif;;
    font-size: 1.25rem;
    margin-top: 16px;
    height: 28px;
    font-weight: 600;
    text-align: center !important;
}

.col-4 .details__detail{
    font-family: BogleWeb, "Helvetica Neue", Helvetica, Arial, sans-serif;;
    font-size: 1.0rem;
    line-height: 1.375rem;
    text-align: center !important;
}

.col-4 .details__button{
    text-align: center;
    margin-top: 5%;
}

.col-4 .details__button button{
    font-size: .875rem;
    padding: 10px;
    font-family: BogleWeb, "Helvetica Neue", Helvetica, Arial, sans-serif;;
    font-weight: 700;
    border-radius: 2.5ch;
    border: 1px solid black;
    background-color: #fff;
    cursor: pointer;
}
</style>
