import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js'

import VueBarcode from '@xkeshi/vue-barcode'; //导入条形码插件
Vue.component('barcode', VueBarcode);  //声明条形码组件

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
