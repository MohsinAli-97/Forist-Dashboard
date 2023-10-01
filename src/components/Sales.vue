<template>
  <div class="flex justify-between items-center gap-5 p-5 text-center">
    <div class="basis-1/2">
      <v-sheet elevation="5">
        <div class="flex justify-center">
          <v-sheet
            elevation="2"
            rounded="lg"
            class="mt-10 mx-5 py-[1%] px-[10%] text-[25px]"
          >
            <p class="text-red-400">Total Sales</p>
            <h2>$1000222</h2>
          </v-sheet>
          <v-sheet
            elevation="2"
            rounded="lg"
            class="mt-10 mx-5 py-[1%] px-[10%] text-[25px]"
          >
            <p class="text-red-400">Total Orders</p>
            <h2>222</h2>
          </v-sheet>
        </div>
        <section class="pt-6">
          <v-sheet elevation="0">
            <ItemChart />
          </v-sheet>
        </section>
      </v-sheet>
    </div>

    <section class="basis-1/2">
      <v-sheet elevation="5">
        <v-select
          label="Select Sales"
          :items="['Daily', 'Weekly', 'Monthly', 'Yearly']"
        ></v-select>
        <SalesChart />
      </v-sheet>
    </section>
  </div>
  <DataTableAGGrid />
</template>

<script setup>
import SalesChart from "./SalesChart.vue";
import ItemChart from "./ItemChart.vue";
import DataTableAGGrid from "./DataTableAGGrid.vue";
</script>
