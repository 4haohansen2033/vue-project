import Vue from "vue";
import VueRouter from "vue-router";
import { resolve } from "url";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/login/login.vue").then(resolve),
    // component: resolve => {
    //   import("../views/login/login.vue").then(resolve);
    children: [
      {
        path: "home",
        component: () => import("../views/login/login.vue")
        // component: resolve => {
        //   import("../views/home/home.vue").then(resolve);
        // }
      }
    ]
  }
];

export default new VueRouter({
  routes
});
