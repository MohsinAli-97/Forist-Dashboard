import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import VueApexCharts from "vue-apexcharts";
import ECharts from "vue-echarts";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  ToolboxComponent,
} from "echarts/components";

//Toast
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import * as labsComponents from "vuetify/labs/components";
import { VDataTable } from "vuetify/labs/VDataTable";

const vuetify = createVuetify({
  components: { ...components, VDataTable },
  directives,
  labsComponents,
  icons: {
    defaultSet: "mdi",
  },
});

const pinia = createPinia();

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent,
    ToolboxComponent,
  ])
  .use(Vue3Toasity, {
    autoClose: 1500,
  })
  .component("v-chart", ECharts)
  .mount("#app");
