import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loginState: false,
    username: "hansen"
  },
  mutations: {
    LOGIN_STATE(state, payload) {
      state.loginState = true;
    }
  },
  actions: {
    login({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(function() {
          console.log("request login");
          resolve("");
        });
      });
    }
  }
});
export default store;
