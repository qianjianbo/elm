<!--详情页-->
<template>
    <div class="food move-transition">
      <div class="image-header">
        <img src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750" alt="">
        <div class="back">
          <i class="icon-arrow_lift"></i>
        </div>
      </div>
      <div class="content">
        <h1 class="title">皮蛋瘦肉粥</h1>
        <div class="detail" >
          <span class="sell-count">月售299份</span>
          <span class="rating">好评率100%</span>
        </div>
        <div class="price">
          <span class="now">￥10</span>
        </div>
        <div class="buy fade-transition">
          加入购物车
        </div>
            </div>
      <div class="split"></div>
      <div class="info">
        <h1 class="title">商品信息</h1>
        <p class="text">一碗皮蛋瘦肉粥，
          总是我到粥店时的不二之选。香浓软滑，饱腹暖心，
          皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，
          让人喝这样的一碗粥也觉得心满意足
        </p>
      </div>
      <div class="split"></div>
      <div class="rating">
        <h1 class="title">商品评价</h1>
        <div class="ratingselect">
          <div class="rating-type border-1px">
            <span class="block positive active">全部
              <span class="count">3</span>
            </span>
            <span class="block positive">推荐
              <span class="count">2</span>
            </span>
            <span class="block negative">吐槽
              <span class="count">1</span>
            </span>
            <span class="link"></span>
          </div>
          <div class="switch">
            <span class="icon-check_circle"></span>
            <span class="text">只看有内容的评价</span>
          </div>
        </div>
        <div class="rating-wrapper">
          <ul>
            <li class="rating-item border-1px">
              <div class="user">
                <span class="name">4121</span>
                <img class="avatar" src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
              </div>
              <div class="time_1">1121</div>
              <p class="text">
                <span class="icon-thumb_up"></span>
                很喜欢的粥
              </p>
            </li>
          </ul>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default{
    created(){
      this.$http.get("http://10.80.14.80:8080/api/goods")
        .then(function(response){
          return response.json();
        })
        .then(function(response){
          this.datas = response.data;
        });
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
        datas:'',
        data:''
      }
    }
  }
</script>

<style>
  .food {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 48px;
    z-index: 30;
    width: 100%;
    background: #fff;
    overflow: auto;
  }
  .food .image-header {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
  }
  .food .image-header img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .food .image-header .back {
    position: absolute;
    top: 10px;
    left: 0;
  }
 .icon-arrow_lift {
    display: block;
    padding: 10px;
    font-size: 20px;
    color: #fff;
  }
 .content {
    position: relative;
    padding: 18px;
  }
 .sell-count {
    margin-right: 12px;
  }
  .detail {
    margin-bottom: 18px;
    line-height: 10px;
    height: 10px;
    font-size: 0;
  }
 .sell-count {
    margin-right: 12px;
  }
  .sell-count, .rating {
    font-size: 10px;
    color: #93999f;
  }
  ul,li{
    list-style: none;
  }
   .rating {
    font-size: 10px;
    color: #93999f;
  }
 .rating {
    padding-top: 18px;
  }
 .price {
    font-weight: 700;
    line-height: 24px;
  }
  .now {
    margin-right: 8px;
    font-size: 14px;
    color: #f01414;
  }
  .food .content .buy {
    position: absolute;
    right: 18px;
    bottom: 18px;
    z-index: 10;
    height: 24px;
    line-height: 24px;
    padding: 0 12px;
    box-sizing: border-box;
    border-radius: 12px;
    font-size: 10px;
    color: #fff;
    background: #00a0dc;
  }
  .food .info .text {
    line-height: 24px;
    padding: 0 8px;
    font-size: 12px;
    color: #4d555d;
    margin-bottom: 18px;
  }
  .content .title{
    font-size: 14px;
  }
  .food .rating {
    padding-top: 18px;
  }
  .food .rating .title {
    line-height: 14px;
    margin-left: 18px;
    font-size: 14px;
    color: #07111b;
    margin-bottom: 0px;
  }
  .user {
    position: absolute;
    right: 0;
    top: 16px;
    line-height: 12px;
    font-size: 0;
  }
  .user .name {
    display: inline-block;
    margin-right: 6px;
    vertical-align: top;
    font-size: 10px;
    color: #93999f;
  }
  .user .avatar {
    border-radius: 50%;
    width:12px;
    height: 12px;
  }
  .rating-item .text {
    line-height: 16px;
    font-size: 12px;
    color: #07111b;
  }
.time_1{
  position: absolute;
  top:4px;
  left: 4px;

}
</style>
