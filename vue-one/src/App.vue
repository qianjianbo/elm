<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="item">
        <router-link to="/a">商品</router-link>
      </div>
      <div class="item">
        <router-link to="/b">评价</router-link>
      </div>
      <div class="item">
        <router-link to="/c"> 商家</router-link>
      </div>
    </div>
    <router-view></router-view>


    </div>
  </div>
</template>

<script>
  import Header from './components/header/header.vue'
export default {
  components: {
  "v-header":Header
  }
}
</script>

<style>
.tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(7,17,27,0.1);
}
  .tab .item{
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: rgb(77,85,93);
  }
.tab .item a{
  color: rgb(77,85,93);
  text-decoration: none;
}
.tab .item a.router-link-active{
  color:rgb(240,20,20);

}

</style>
