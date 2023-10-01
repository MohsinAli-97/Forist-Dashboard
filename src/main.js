import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import VueApexCharts from "vue-apexcharts";
import ECharts from "vue-echarts";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  ToolboxComponent,
} from "echarts/components";

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

createApp(App)
  .use(vuetify)
  .use(router)
  .use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent,
    ToolboxComponent,
  ])
  .component("v-chart", ECharts)
  .mount("#app");
