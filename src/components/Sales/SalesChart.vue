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
import { ref, defineComponent, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { useSalesStore } from "../../store/sales";

const salesStore = useSalesStore();

const { sales, saleDataHour, salesRepresentaion } = storeToRefs(salesStore);

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

  mounted() {
    salesStore.getSaleDataPerHour;
    sales.value = saleDataHour.value;
  },

  provide: {
    [THEME_KEY]: "light",
  },
  setup() {
    const option = ref({});
    watchEffect(() => {
      salesStore.getSaleDataPerDay;
      salesStore.getSaleDataPerMonth;
      salesStore.getSaleDataPerHour;
      salesStore.getSaleDataPerYear;
      salesStore.getChartDataAction(salesRepresentaion.value);
      option.value = {
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

            data: sales.value.map((item) => item.xAxisLabel),
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "Item Sold",
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
            data: sales.value.map((item) => item.totalSales),
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
            data: sales.value.map((item) => item.totalRevenue),
          },
        ],
      };
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
