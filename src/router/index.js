import Vue from "vue";
import VueRouter from "vue-router";
import { resolve } from "url";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../components/container.vue"),
    children: [
      {
        path: "login",
        component: () => import("../views/login/login.vue")
      },
      {
        path: "home",
        component: () => import("../views/login/login.vue")
      }
    ]
  }
];

export default new VueRouter({
  routes
});
