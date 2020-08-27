import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
import Parallaxy from "vue-parallaxy";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./assets/sass/index.sass";

import App from "./App.vue";
import router from "./router";

Vue.use(BootstrapVue);
Vue.use(Parallaxy);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
