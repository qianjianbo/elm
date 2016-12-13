<!--商家-->
<template>
    <div class="seller">
      <div class="overview">
        <h1 class="title">{{data.name}}</h1>
        <div class="desc border-1px">
          <div class="star">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span class="text">({{data.ratingCount}})</span>
          <span class="text">月售{{data.sellCount}}单</span>
          <span class="link"></span>
        </div>

        <ul class="remark">
          <li class="block">
            <h2>起价送</h2>
            <div class="content">
              <span class="stress">{{data.minPrice}}元</span>
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="content">{{data.deliveryPrice}}元</span>
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span>{{data.deliveryTime}}分钟</span>
            </div>
          </li>
        </ul>
        <div class="favorite">
          <span class="icon-favorite">
          </span>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="split"></div>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p class="content">{{data.bulletin}}</p>
        </div>
          <ul class="support">
            <li class="support-item border-1px" v-for="icon in data.supports" v-if="data.supports">
              <span class="icon decrease"></span>
              <span class="text">{{icon.description}}</span>
            </li>
          </ul>
      </div>
      <div class="split"></div>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper">
          <ul >
            <li class="pic-item" v-for="icon in data.pics">
              <img :src='icon' alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="split"></div>
      <div class="info">
        <h1 class="title">商家信息</h1>
        <ul>
          <li class="info-item" v-for="icon in data.infos">{{icon}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default{
    created(){
      this.$http.get("http://10.80.14.80:8080/api/seller")
        .then(function(response){
          return response.json();
        })
        .then(function(response){
          this.data = response.data;
        })
    },
    data(){
      return{
        data:'',
      }
    }
  }
</script>

<style>
  .seller {
    position: absolute;
    top: 174px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow-x:hidden;
    overflow-y:scroll;
  }
  .seller .overview {
    position: relative;
    padding: 18px;
  }
  .title {
    margin-bottom: 8px;
    line-height: 14px;
    color: #07111b;
    font-size: 14px;
  }
  .desc {
    padding-bottom: 18px;
    position: relative;
    font-size: 0;
  }
  .remark {
    display: flex;
    padding-top: 18px;
  }
  .remark .block:last-child{
    border:0;
  }
  .remark .block {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    border-right: 1px solid rgba(7,17,27,0.1);
  }
  .remark .block h2 {
    margin-bottom: 4px;
    line-height: 10px;
    font-size: 10px;
    color: #93999f;
  }
  .overview .favorite {
    position: absolute;
    width: 50px;
    right: 11px;
    top: 18px;
    text-align: center;
  }

  .seller .overview .favorite .text {
    line-height: 10px;
    font-size: 10px;
    color: #4d555d;
    vertical-align: top;
  }
  .bulletin{
    padding: 18px 18px 0 18px;
  }
  .content-wrapper .content {
    line-height: 24px;
    font-size: 12px;
    color: rgb(240,20,20);
    font-weight: 200;
  }
 .support-item {
    padding: 16px 12px;
    position: relative;
    font-size: 0;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
  }
  .decrease{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("../../../resource/img/decrease_4@3x.png") no-repeat;
    background-size: 16px 16px;
    margin-top:-3px;

  }
  .seller .content{
    margin-bottom: 18px;
  }
.pics{
  padding: 18px;
}
.pics .title{
    line-height: 14px;
    position: relative;
    font-size: 14px;
  }
.pic-wrapper {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
.pic-wrapper ul{
    width: 100%;
    height:90px;
    overflow: auto;
  overflow-y:hidden;
  }
.pic-item{
    display: inline-block;
    margin-right: 6px;
    height: 90px;
    width:120px;
  }
.pic-item img{
    width:120px;
    height: 90px;
    overflow: hidden;
  }
.info .title{
    padding: 18px;
    line-height: 14px;
    position: relative;
    font-size: 14px;
  margin-bottom: 0;
  }
  .info-item {
    padding: 16px 30px;
    line-height: 16px;
    position: relative;
    font-size: 12px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
  }
  .icon-favorite{
    display: inline-block;
    width:25px;
    height: 24px;
    color: red;
    margin-left: 5px;
  }
</style>
