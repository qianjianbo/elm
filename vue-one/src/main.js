import Vue from 'vue';
import VueRouter from "vue-router";
import App from "./App.vue";
import VueResource from "vue-resource";
import Business  from "./components/tab/business.vue";
import Commodity from "./components/tab/commodity.vue";
import Evaluate from "./components/tab/evaluate.vue";
import Detail from "./components/tab/detail .vue";


//const A = {
//  template:"<span>A</span>"
//}
//const B = {
//  template:"<span>B</span>"
//}
//
//const C = {
//  template:"<span>C</span>"
//}
const A = Commodity;
const B = Evaluate;
const C= Business;
const D = Detail;

Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  routes: [
    {path: "/a" ,component: A},
    {path: "/b" ,component: B},
    {path: "/c" ,component: C},
    {path: "/d" ,component: D},

  ]
})
/* eslint-disable no-new */

new Vue({
  el: "#app",
  template: "<App/>",
  components:{
    App
  },
  router
}).$mount("#app");
