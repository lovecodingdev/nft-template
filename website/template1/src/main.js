import Vue from "vue";
import App from "./App.vue";

import router from "./router/index";
import store from "@/state/store";
import "@/styles/index.scss";

Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");