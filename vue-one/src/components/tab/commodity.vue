<!--商品-->
<template>
  <!--左-->
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul >
        <li class="menu-item current" v-for="data,index in datas" @click="go(index)" :class="{active:index == getIndex}">
          <span class="text border-1px" >
            <span class="icon special">{{data.name}}</span>
            <span class="links"></span>
          </span>
        </li>
      </ul>
    </div>
    <!--右-->
    <div class="foods-wrapper" v-if="datas" ref="foodsWrapper">
      <ul>
        <li class="food-list food-list-hook" v-for="data in datas">
          <h1 class="title">{{data.name}}</h1>
          <ul>
            <li class="food-item border-1px" v-for="dat in data.foods">
              <div class="icon">
                <img :src="dat.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name1">{{dat.name}}</h2>
                <p class="desc">{{dat.description}}</p>
                <div class="extra">
                  <span class="count">月售{{dat.sellCount}}份</span>
                  <span>好评率{{dat.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{dat.price}}</span>
                </div>
                <!--加减-->
                <div class="cartcontrol-wrapper">
                  <div class="cartcontrol">
                    <div class="cart-decrease move-transition" style="">
                      <span class="inner icon-remove_circle_outline"></span>
                    </div>
                    <div class="cart-count">1</div>
                    <div class="cart-add icon-add_circle"></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!--购物车-->
    <div class="shopcart">
      <div class="content1">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo">
              <i class="icon-shopping_cart"></i>
            </div>
            <div class="num">0</div>
          </div>
          <div class="price">￥0</div>
          <div class="desc">另需配送费￥4元</div>
        </div>
        <div class="content-right">
          <div class="pay not-enough">￥20元起送</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll";
  export default{
    data(){
      return{
        datas:'',
        data:'',
        scrollY: 0,
        listHeight: []
      }
    },
    created(){
      this.mapClass = ['decrease','discount','guarantee','invoice','special'];
      this.$http.get("http://10.80.14.80:8080/api/goods")
        .then(function(response){
          return response.json();
        })
        .then(function(response){
          this.datas = response.data;

          this.$nextTick( ()=>{
            this.initScroll();
          this.foodsScroll.on('scroll',(pos)=>{
            this.scrollY = Math.abs(Math.round(pos.y))
        })

//          console.log(this.listHeight)
        })

        });
      this.$http.get("http://10.80.14.80:8080/api/seller")
        .then(function(response){
          return response.json();
        })
        .then(function(response){
          this.data = response.data;



        })
    },
    computed:{
      getIndex:function(){
        let index = 0;
        for(let i = 0;i<this.listHeight.length;i++){
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i+1];
          if(this.scrollY >= height1 && this.scrollY <= height2){
            return i;
          }
        }
        return index;
      }
    },
    methods:{
      go:function(index){
        console.log(index)
      },
      initScroll:function(){
        this.menuScroll = new BScroll(this.$refs.menuWrapper,{
          click:true
        });
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
          probeType:3
        })
      }
    },
    jen:function(){
      let height = 0;
      this.listHeight.push(height);
      let list = this.$refs.foodsWrapper.querySelectorAll('.food-list');
      for(let i = 0;i<list.length;i++){
        let liHeight = list[i].clientHeight;
        height += liHeight;
        this.jen();
      }
    },

  }
</script>

<style>
  .goods {
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
  }
  .goods .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
  }
  .menu-wrapper ul{
    margin-top: 2px;
    height: 590px;
  }

 .current {
    position: relative;
    margin-top: -1px;
    background: #fff;
    font-weight: 700;
  }
  .menu-item {
    display: table;
    height: 54px;
    width: 56px;
    padding: 0 12px;
    line-height: 14px;
  }
  .menu-item .text {
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    position: relative;
    font-size: 12px;
  }
  .menu-item .icon {
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
  .goods .foods-wrapper {
    flex: 1;
    /*overflow: auto;*/
  }
  .current{
    background-color: #f3f5f7;
  }
  .menu-item.active{
    background:#fff;
    font-weight:bold;
  }
  .icon img{
    width:57px;
    height: 57px;
  }
  .goods .foods-wrapper .title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: #93999f;
    background: #f3f5f7;
  }
  .links{
    display: block;
    position: absolute;
    left: 0;
    bottom: 1px;
    width: 100%;
    border-top: 1px solid rgba(7,17,27,0.1);
  }
  .food-item {
    display: flex;
    margin: 18px 18px -1px 18px;
    padding-bottom: 18px;
    position: relative;
    border-bottom: 1px solid rgba(7,17,27,0.1);
  }
  .food-item .icon {
    flex: 0 0 57px;
    margin-right: 10px;
  }
  .food-item .content {
    flex: 1;
    padding: 0;
  }
 .name1 {
    font-size: 14px;
    color: #07111b;
  }
  .desc,.extra {
    line-height: 10px;
    font-size: 10px;
    color: #93999f;
  }
  .content .desc {
    margin-top: 8px;
    line-height: 12px;
    padding-bottom: 0px;
  }
  .extra .count {

    display: inline-block;
    margin-right: 12px;
    margin-top: 8px;
  }
  .content .price {
    font-weight: 700;
    line-height: 24px;
  }
  .cartcontrol-wrapper {
    display: inline;
    position: absolute;
    right: 0;
    bottom: 12px;
  }
  .cartcontrol {
    font-size: 0;
  }
  .cartcontrol .cart-decrease {
    display: inline-block;
  }
  .cart-add {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: #00a0dc;
  }
  .shopcart {
    position: fixed;
    left: 0px;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
  }
  .content{
    padding: 0px;
  }
  .content-left {
    flex: 1;
    background-color: #141d27;
  }
  .logo-wrapper {
    display: inline-block;
    vertical-align: top;
    position: relative;
    top: -15px;
    padding: 6px;
    width: 56px;
    height: 56px;
    box-sizing: border-box;
    border-radius: 50%;
    background: #141d27;
    margin-right: 12px;
    margin-left: 18px;
  }
  .logo-wrapper .logo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;
    background: #2b343c;
  }
  .logo .icon-shopping_cart {
    line-height: 44px;
    font-size: 24px;
    color: #80858a;
  }
  .logo-wrapper .num {
    position: absolute;
    top: 0px;
    right: 0;
    width: 24px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 16px;
    font-size: 9px;
    font-weight: 700;
    color: #fff;
    background: #f01414;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  }
  .price {
    display: inline-block;
    vertical-align: top;
    margin-top: 12px;
    line-height: 24px;
    padding-right: 12px;
    box-sizing: border-box;
    border-right: 1px solid rgba(255,255,255,0.1);
    font-size: 16px;
    font-weight: 700;
    color: rgba(255,255,255,0.4);
  }
  .content-left .desc {
    display: inline-block;
    vertical-align: top;
    margin: 12px 0 0 12px;
    line-height: 24px;
    font-size: 10px;
  }
  .content-right {
    flex: 0 0 105px;
    width: 105px;
    position: absolute;
    top:0;
    right:0;
    background: rgba(255,255,255,0.4);
  }
  .content-right .pay {
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: rgba(255,255,255,0.4);
  }
  .content-right .pay.not-enough {
    background: #2b333b;
  }
  .move-transition .inner {
    display: inline-block;
    line-height: 24px;
    font-size: 24px;
    color: #00a0dc;
  }
  .move-transition{
    position: absolute;
    top: 6px;
    left: -28px;
  }
  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: #93999f;
  }
</style>
