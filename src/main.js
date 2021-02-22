import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jquery from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import 'bootstrap'

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  jquery,
  render: h => h(App)
}).$mount("#app");


