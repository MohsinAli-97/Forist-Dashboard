<template>
  <p class="pt-5 ps-7 text-slate-400">Rejected Sales</p>
  <v-table class="p-3" fixed-header height="300px">
    <thead>
      <tr>
        <th class="text-left">Sale Id</th>
        <th class="text-left">Sale Amount</th>
        <th class="text-left">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in rejectedSales" :key="item.transactionId">
        <td>{{ item.saleId }}</td>
        <td class="text-green">{{ item.saleAmount }}</td>
        <td class="text-red-500">Rejected</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { storeToRefs } from "pinia";

import { useSalesStore } from "../../store/sales";

const salesStore = useSalesStore();
const { rejectedSales } = storeToRefs(salesStore);
</script>
