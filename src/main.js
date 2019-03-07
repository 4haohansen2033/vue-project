import Vue from "vue";

import "./assert/index.css";
import moment from "moment";
import lodash from "lodash";
import router from "./router";
import store from "./store";
import iView from "iview";
import "iview/dist/styles/iview.css";
import App from "./App.vue";

Vue.use(iView);
Vue.prototype.$moment = Vue.moment = moment;
Vue.prototype.$lodash = Vue.lodash = lodash;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
