<template>
  <div>
  <div class = "header" v-if="datas">
  <div class="info">
    <div class="pic">
      <img :src='datas.avatar' >
    </div>
    <div class="right">
      <div class="one">
        <span></span>{{datas.name}}
      </div>
      <div class="two">
        {{datas.description}}/{{datas.deliveryTime}}
      </div>
      <div class="three">
        <span></span>
        在线支付满28减5,满50减10
      </div>
    </div>

  </div>
    <div class="message" v-on:click="change">
        <span></span>
      <span class="icon-keyboard_arrow_right" ></span>
      <span>{{datas.bulletin}}</span>

    </div>

    <div class="bg"></div>
    <div class="btn" v-on:click="change">5个
      <span class="icon-keyboard_arrow_right"></span>
    </div>
  </div>
      <div class="mask" v-if="isShow">
        <h2>粥品香坊（回龙观）</h2>
        <div class="star">
          <span class="itemon"></span>
          <span class="itemon"></span>
          <span class="itemon"></span>
          <span class="itemon"></span>
          <span class="itemoff"></span>
        </div>
        <div class="title">
          <span class="line"></span>
          <span class="message">优惠信息</span>
          <span class="linen"></span>
        </div>
        <ul class="supports">
          <li><img src="../../../resource/img/decrease_1@2x.png" alt=""><span>在线支付满28减5,漫50减10</span></li>
          <li><img src="../../../resource/img/discount_2@2x.png" alt=""><span>单人精彩赛</span></li>
          <li><img src="../../../resource/img/discount_2@2x.png" alt=""><span>清肺雪梨汤8折抢购</span></li>
          <li><img src="../../../resource/img/special_1@2x.png" alt=""><span>特价饮品八折抢购</span></li>
          <li><img src="../../../resource/img/special_1@2x.png" alt=""><span>单人特色套餐</span></li>
        </ul>
        <div class="title">
          <span class="line"></span>
          <span class="message">商家公告</span>
          <span class="linen"></span>
        </div>
        <div class="content" v-if="datas">
          <p>{{datas.bulletin}}</p>
        </div>
        <span class="icon-close" v-on:click="change">

        </span>
        <div class="black"></div>
      </div>
    </div>
</template>

<script>
  export default{
    methods:{
      change(){
        console.log(this.isShow);
        this.isShow = !this.isShow
      },

    },
    computer:{

    },
    beforeCreate(){

    },
    created(){
      this.$http.get("http://10.80.14.80:8080/api/seller")
      .then(function(response){
        return response.json()
      }).then(function(response){
        if(response.success === 1){
          this.datas = response.data;
        }
      })
    },
    data(){
      return {
        datas:"",
        isShow: false
      }
    }
  }
</script>
<style>
.header{
  position: relative;
  font-size: 0;
  background-color:rgba(7,17,27,0.5);
}
  .pic{
    display: inline-block;
    width: 64px;
    height: 64px;
    border-radius: 4px;
    background-size: cover;

  }
.pic img{
  width: 64px;
  height: 64px;
  margin: 24px 16px 18px 24px;
  display: inline-block;
  border-radius: 4px;
  background-size: cover;
}
  .right{
    display: inline-block;
    vertical-align: top;
    margin: 24px 0 0 0;

  }
  .right .one{
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    line-height: 18px;
    margin-left: 40px;

  }
  .right .one span{
    display: inline-block;
    margin-right: 6px;
  }
.right .one span:first-child{
  background: url("../../../resource/img/brand@2x.png");
  width: 30px;
  height: 18px;
  background-size: 30px 18px;

}
.right .one span:last-child{
  vertical-align: top;
}
.message{
  position: relative;
  height: 28px;
  line-height: 28px;
  background-color: rgba(7,17,27,0.2);
}
  .message span:first-child{
    display: inline-block;
    background: url("../../../resource/img/bulletin@2x.png");
    width: 30px;
    height: 18px;
    background-size: 30px 18px;
    margin: 4px 4px;

  }
  .message span:last-child{
    display: inline-block;
    font-size: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 75%;
    color: #fff;
  }
  .bg{
    position: absolute;
    width: 100%;
    height:100%;
    left:0;
    top:0;
    background: url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg");
    background-size: cover;
    filter: blur(5);
    z-index: -1;

  }
.right .two{
  font-size: 14px;
  color: #fff;
  margin-top: 8px;
  margin-left: 40px;
}
.right .three{
  font-size: 10px;
  margin-top: 10px;
  color: #fff;
  font-weight: 200;
  line-height: 24px;
  margin-left: 40px;
}
  .right .three span:first-child{
    display: inline-block;
    background: url("../../../resource/img/decrease_1@2x.png") no-repeat;
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
    margin: 4px 4px 0 0;

  }
 .right .three span:last-child{
  display: inline-block;
  font-size: 10px;
  overflow: hidden;
  margin-left: 0px;
}
.btn{
    position: absolute;
    top: 70px;
    right: 10px;
    height: 24px;
    width: 44px;
    border-radius: 8px;
    background-color:rgba(0,0,0,0.2) ;
    font-size: 10px;
    text-align: center;
    line-height: 24px;
    color: #fff;
    font-weight: 200;
    display: inline-block;
  }

.mask{
  position: absolute;
  width: 100%;
  min-height: 100vh;
  left: 0;
  top:0;
  background-color: rgba(7,17,27,0.8);
  z-index: 1;
}

.mask{
  position: absolute;
  width:100%;
  min-height:100%;
  left:0;top:0;
  background-color:rgba(7,17,27,0.8);
  z-index: 100;
}
.black{
  position: absolute;
  width:100%;
  height:100%;
  left:0;
  top:0;
  background-color:rgba(7,17,27,0.5);
  -webkit-filter: blur(10px); /* Chrome, Opera */
  -moz-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
  z-index: -1;
}
.mask h2{
  font-size: 16px;
  color: rgb(255,255,255);
  line-height: 16px;
  text-align: center;
  padding-top:64px;
}
.mask .star{
  margin-top: 16px;
  margin-left: 70px;
}
.mask .star span{
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-left: 20px;
}
.mask .star .itemon{
  background: url("../../../resource/img/star48_on@2x.png");
  background-size:20px 20px;
}
.mask .star .itemoff{
  background: url("../../../resource/img/star48_off@2x.png");
  background-size:20px 20px;
}
.mask .title{
  display: flex;
  width: 80%;
  margin: 28px auto 24px auto;
  flex-direction: row;
  align-items:center;
}
.mask .title .line{
  width: 112px;
  height: 1px;
  background: rgba(255,255,255,0.2);
  flex: 1;
}
.mask .title .linen{
  width: 112px;
  height: 1px;
  background: rgba(255,255,255,0.2);
  flex: 1;
}
.mask .title .message{
  font-size: 16px;
  color:rgb(255,255,255);
  line-height: 16px;
  margin-left:5px;
  margin-right: 5px;
}
.mask .supports{
  width: 80%;
  margin: 0 auto;
}
.mask .supports li{
  overflow: hidden;
}
.mask .supports li img{
  float: left;
  width: 16px;
  height: 16px;
  margin-top:10px;
}
.mask .supports li span{
  float: left;
  margin-top:13px;
  margin-left: 6px;
  font-size: 12px;
  font-weight: 100;
  color: rgb(255,255,255);
  line-height: 12px;
}
.mask .content{
  display: flex;
  justify-content: center;
}
.mask .content p{
  width: 80%;
  font-size: 12px;
  font-weight: 200;
  color: rgb(255,255,255);
  line-height: 24px;
}
.mask .icon-close{
  display:block;
  height: 32px;
  width: 32px;
  font-size: 32px;
  color: rgba(255,255,255,0.5);
  margin: 75px auto 19px;
}
  .icon-keyboard_arrow_right{
    display: inline-block;
    font-size: 12px;
  }
.message .icon-keyboard_arrow_right{
  position: absolute;
  display: inline-block;
  font-size: 20px;
  right: 0px;
  color: #fff;
  margin-top: 5px;
  margin-right: 15px;

  }
</style>
