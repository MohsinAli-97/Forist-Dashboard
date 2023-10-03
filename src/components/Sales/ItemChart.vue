<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart, PieChart } from "echarts/charts";
import {
  TooltipComponent,
  GridComponent,
  MarkPointComponent,
  TitleComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent, watch } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../../store/products";

const productStore = useProductStore();

const { products } = storeToRefs(productStore);

use([
  CanvasRenderer,
  LineChart,
  TooltipComponent,
  PieChart,
  GridComponent,
  MarkPointComponent,
  TitleComponent,
]);

export default defineComponent({
  name: "ItemChart",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },

  setup() {
    const option = ref({
      title: {
        text: "Current Item's Stock",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },

      series: [
        {
          name: "Current item stock",
          type: "pie",
          radius: "70%",
          data: products.value.map((product) => ({
            name: product.name,
            value: product.quantity,
          })),

          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });
    watch(products.value, (newProducts) => {
      option.value.series[0].data = newProducts.map((product) => ({
        name: product.name,
        value: product.quantity,
      }));
    });
    return { option };
  },
});
</script>

<style scoped>
.chart {
  height: 46vh;
  width: inherit !important;
}
</style>
