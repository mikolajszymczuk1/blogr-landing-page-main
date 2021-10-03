import Vue from "vue";
import App from "./App.vue";
import "./assets/scss/main.scss";
import Vuex from "vuex";

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
