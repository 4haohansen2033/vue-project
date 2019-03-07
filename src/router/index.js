import Vue from "vue";
import VueRouter from "vue-router";

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
        component: () => import("../views/home/home.vue")
      },
      {
        path: "/",
        component: () => import("../components/commonView.vue"),
        children: [
          {
            path: "/",
            redirect: "/login"
          },
          {
            path: "/about",
            component: () => import("../views/about/about.vue")
          }
        ]
      }
    ]
  }
];

export default new VueRouter({
  routes
});
