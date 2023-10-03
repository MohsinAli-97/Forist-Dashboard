<template>
  <div class="flex gap-3 bg-slate-100">
    <section class="basis-[35%] flex flex-col gap-3 mt-5 ms-3">
      <v-sheet elevation="0" rounded="lg" class="!border !border-slate-200">
        <p class="mt-5 ms-5 text-slate-500">{{ salesRepresentaion }}</p>
        <div class="flex justify-between flex p-5 h-[25vh] items-center">
          <v-sheet
            rounded="lg"
            class="basis-[45%] text-center h-[70%] pt-[5%] !border !border-slate-200 !bg-slate-100"
          >
            <v-icon icon="mdi-currency-usd"></v-icon>
            <p class="text-slate-500">Total Sales</p>
            <h2>${{ totalRevenue }}</h2>
          </v-sheet>
          <v-sheet
            rounded="lg"
            class="basis-[45%] text-center h-[70%] pt-[5%] !border !border-slate-200 !bg-slate-100"
          >
            <v-icon icon="mdi-package-variant-closed-check"></v-icon>
            <p class="text-slate-500">Total Orders</p>
            <h2>{{ totalSales }}</h2>
          </v-sheet>
        </div>
      </v-sheet>
      <v-sheet rounded="lg" class="!border !border-slate-200">
        <section class="pt-2">
          <ItemChart />
        </section>
      </v-sheet>
    </section>
    <section class="basis-[62%] flex flex-col gap-3 mt-5">
      <v-sheet class="!border !border-slate-200" rounded="lg">
        <section class="flex items-center justify-between mx-5">
          <p>Sales representaion</p>
          <select
            class="px-4 bg-slate-200 rounded-lg py-2 m-2"
            v-model="salesRepresentaion"
            @change="getChartData()"
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </section>
        <SalesChart />
      </v-sheet>
      <v-sheet rounded="lg" class="!border !border-slate-200">
        <SalesTable />
      </v-sheet>
    </section>
  </div>
</template>

<script setup>
import { onMounted, watchEffect } from "vue";

import SalesChart from "./SalesChart.vue";
import ItemChart from "./ItemChart.vue";
import SalesTable from "./SalesTable.vue";
import { storeToRefs } from "pinia";
import { useSalesStore } from "../store/sales";

const salesStore = useSalesStore();
const { salesRepresentaion, totalSales, totalRevenue } =
  storeToRefs(salesStore);

function getChartData() {
  salesStore.getChartDataAction(salesRepresentaion.value);
}

watchEffect(() => {
  salesStore.getTotalRevenueCount;
  salesStore.getTotalSaleCount;
});

onMounted(() => {
  salesStore.getSaleDataPerDay;
  salesStore.getSaleDataPerMonth;
  salesStore.getSaleDataPerHour;
  salesStore.getSaleDataPerYear;
  salesStore.getTotalItemsSold;
  salesStore.getTotalRevenueCount;
  salesStore.getTotalSaleCount;
});
</script>
