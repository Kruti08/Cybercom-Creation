<template>
  <div id="nav">
    <Nav />
  </div>
  <div id="content">
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './views/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif;
}

.container{
    width: 1700px ;
    margin: 0 auto;
}

.row{
  display: flex;
  flex-wrap: wrap;
}

.col-4{
  width: 33.33333333333333333333%;
}

.col-3{
  width: 25%;
}
</style>