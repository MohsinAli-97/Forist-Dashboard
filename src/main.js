import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import ECharts from "vue-echarts";

//Toast
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { VDataTable } from "vuetify/labs/VDataTable";

const vuetify = createVuetify({
  components: { ...components, VDataTable },
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const pinia = createPinia();

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .use(Vue3Toasity, {
    autoClose: 1500,
  })
  .component("v-chart", ECharts)
  .mount("#app");
