import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@/assets/less/reset.less'
import '@/assets/less/style.less'
import '@/iconfont/iconfont.css'
Vue.config.productionTip = false;

const dashboardFlexible = require('lib-flexible-for-dashboard');
dashboardFlexible.init(16/9)

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
