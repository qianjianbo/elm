<!--评价-->
<template>
  <div class="ratings">
    <div class="overview">
      <div class="overview_left">
        <h1 class="score">{{dat.score}}</h1>
        <div class="title">综合评分</div>
        <div class="rank">高于周边商家{{dat.rankRate}}%</div>
      </div>
      <div class="overview_right">
        <div class="score-wrapper">
          <span class="title">服务态度</span>
          <div class="star">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span class="score">{{dat.serviceScore}}</span>
        </div>
        <div class="score-wrapper">
          <span class="title">商品评价</span>
          <div class="star">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span class="score">{{dat.foodScore}}</span>
        </div>
        <div class="delivery-wrapper">
          <span class="title">送达时间</span>
          <span class="delivery">{{dat.deliveryTime}}分钟</span>
        </div>

      </div>
    </div>
    <div class="split"></div>
    <div class="ratingselect">
      <div class="rating-type border-1px">
        <span class=" block positive active">全部
        <span class="cont">24</span>
        </span>
        <span class="block positive">满意
        <span class="cont">18</span>
        </span>
        <span class="block negative">不满意
        <span class="count">6</span>
        </span>
        <span class="link"></span>
      </div>
      <div class="switch on">
        <span class="icon-check_circle"></span>
        <span class="text">只有看内容的评价</span>
      </div>
    </div>
    <div class="rating-wrapper">
      <ul>
        <li class="rating-item"  v-for="d in da" v-if="da">
          <div class="avatar">
            <img :src='d.avatar'>
          </div>
          <div class="content">
            <h1 class="name">{{d.username}}</h1>
            <div class="star-wrapper">
              <div class="star">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="delivery">{{d.deliveryTime}}</span>
            </div>
            <p class="text">{{d.text}}</p>
            <div class="recommend">
              <span class="icon-thumb_up"></span>
              <span class="item" v-for="a in d.recommend">{{a}}</span>
            </div>
            <div class="time">{{new Date(d['rateTime']).toLocaleString()}}</div>
          </div>
          <span class="link"></span>
        </li>
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
          this.dat = response.data;
        });
      this.$http.get("http://10.80.14.80:8080/api/ratings")
        .then(function(response){
          return response.json();
        })
        .then(function(response){
          this.da= response.data;
        })
    },
    data(){
      return{
        dat:'',
        da:''
      }
    }
  }
</script>

<style>
.ratings{
  position: absolute;
  top: 174px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow-x:hidden;
  overflow-y:scroll;
}
.ratings .overview {
  display: flex;
  padding: 18px 0;
}
 .overview_left {
  flex: 0 0 137px;
  padding: 6px 0;
  width: 137px;
  border-right: 1px solid rgba(7,17,27,0.1);
  text-align: center;
}
.star {
  display: inline-block;
}
 .score {
  margin-bottom: 6px;
  line-height: 28px;
  font-size: 24px;
  color: #f90;
}
 .title {
  margin-bottom: 8px;
  line-height: 12px;
  font-size: 12px;
  color: #07111b;
}
  .rank {
  line-height: 10px;
  font-size: 10px;
  color: #93999f;
}

.ratings .overview .overview_right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 6px 0 6px 24px;
}
.score-wrapper {
  margin-bottom: 5px;
  font-size: 0;
}

 .score-wrapper .star {
  display: inline-block;
  margin: 0 12px;
  vertical-align: top;
}
  .star span{
    display: inline-block;
    width:15px ;
    height: 15px;
    margin-right: 6px;
    background: url("../../../resource/img/star24_on@2x.png") no-repeat;
    background-size: 15px 15px;
  }
  .star span:last-child{
    background: url("../../../resource/img/star24_off@2x.png") no-repeat;
    background-size: 15px 15px;
  }
.score-wrapper .score {
  display: inline-block;
  line-height: 18px;
  vertical-align: top;
  font-size: 12px;
  color: #f90;
}
.delivery {
  margin-left: 12px;
  font-size: 12px;
  color: #93999f;
}
.delivery-wrapper .title {
  line-height: 10px;
  font-size: 12px;
  color: #07111b;
  margin: 0;
  padding: 0;
}
  .delivery-wrapper {
    font-size: 0;
  }
  .overview{
    border-bottom: 1px solid #e6e7e8;
  }
.split {
  width: 100%;
  height: 16px;
  border-top: 1px solid rgba(7,17,27,0.1);
  border-bottom: 1px solid rgba(7,17,27,0.1);
  background: #f3f5f7;
}
  .ratingselect{
    width:100%;
    height: 117px;
    /*background-color:#00d6b2;*/
  }
 .rating-type {
  padding: 18px 0;
  margin: 0 18px;
  position: relative;
  font-size: 0;
}
.ratingselect .rating-type .block.positive.active {
  background: #00a0dc;
  color: #fff;
}
.ratingselect .rating-type .block {
  display: inline-block;
  padding: 8px 12px;
  margin-right: 8px;
  line-height: 16px;
  border-radius: 1px;
  font-size: 12px;
  color: #4d555d;
}
.ratingselect .rating-type .block .count {
  margin-left: 2px;
  font-size: 8px;
}
.rating-type .block.positive {
  background: rgba(0,160,220,0.2);
}
.rating-type .block.negative {
  background: rgba(77,85,93,0.2);
}
.link {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
}
 .switch {
  padding: 10px 16px;
  line-height: 24px;
  border-bottom: 1px solid rgba(7,17,27,0.1);
  color: #93999f;
  font-size: 0;
}
 .switch .icon-check_circle {
  display: inline-block;
  vertical-align: top;
  margin-right: 4px;
  font-size: 24px;
}
  .text{
    font-size: 12px;
    color: rgb(147,153,159);
    display: inline-block;
    vertical-align: top;
    margin-left: 7px;
  }
  .rating-wrapper{
    padding: 0 18px;
  }
.rating-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 18px 0;
  position: relative;
}
.avatar{
  height: 104px;
  vertical-align: top;
  flex: 0 0 28px;
  width: 28px;
  margin-right: 12px;
}
.avatar img{
  width: 28px;
  height: 28px;
  border-radius: 50%;
}
.content{
  position: relative;
  flex: 1;
}
.content .name {
  margin-bottom: 4px;
  line-height: 12px;
  font-size: 10px;
  color: #07111b;
}
.star-wrapper{
  margin-bottom: 6px;
  font-size: 0px;
}
.star-wrapper .star{
  display: inline-block;
}
.star{
  font-size: 0px;
  margin-right: 6px;
}
.delivery {
  display: inline-block;
  line-height: 12px;
  font-size: 10px;
  color: #93999f;
}
.content .text {
  margin-bottom: 8px;
  line-height: 18px;
  color: #07111b;
  font-size: 12px;
}
  .recommend{
    line-height: 6px;
    font-size: 0px;
  }
 .recommend .icon-thumb_up, .recommend .item {
  display: inline-block;
  margin: 0 8px 4px 0;
  font-size: 9px;
}
.icon-thumb_up{
  color:#00a0dc;
}
.recommend .item {
  padding: 6px 6px;
  border: 1px solid rgba(7,17,27,0.1);
  border-radius: 1px;
  color: #93999f;
  background: #fff;
}
.content .time {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 12px;
  font-size: 10px;
  color: #93999f;
}

</style>
