<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart } from "echarts/charts";
import {
  TooltipComponent,
  GridComponent,
  MarkPointComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  TooltipComponent,

  GridComponent,
  MarkPointComponent,
]);

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },
  setup() {
    const option = ref({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },

      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisPointer: {
            type: "shadow",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "Sales",
          axisLabel: {
            formatter: "{value} items",
          },
        },
        {
          type: "value",
          name: "Revenue",
          axisLabel: {
            formatter: "{value} $",
          },
        },
      ],
      series: [
        {
          name: "Item sold",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " items";
            },
          },
          data: [50, 60, 40, 70, 85, 90, 100],
        },
        {
          name: "Revenue",
          type: "line",
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + " $";
            },
          },
          markPoint: {
            data: [
              { type: "max", name: "Max" },
              { type: "min", name: "Min" },
            ],
          },
          data: [500, 600, 400, 700, 850, 900, 1000],
        },
      ],
    });

    return { option };
  },
});
</script>

<style scoped>
.chart {
  height: 400px;
  width: inherit !important;
}
</style>
