<template>
  <div class="text-center flex justify-end m-5">
    <p class="text-slate-400">Shows low stock less than 150 as notification</p>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn variant="text" v-bind="props">
          <v-icon icon="mdi-bell"></v-icon>
          <sup class="text-red text-lg">{{ lowStockProductsLength }}</sup>
        </v-btn>
      </template>

      <v-list>
        <p class="ms-2 text-slate-400">Low stock Items</p>
        <v-list-item v-for="(item, index) in lowStockProducts" :key="index">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.quantity }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../../store/products";
const productStore = useProductStore();

const { lowStockProducts } = storeToRefs(productStore);
const lowStockProductsLength = ref();

watch(lowStockProducts, (newValue) => {
  lowStockProductsLength.value = newValue.length;
});
</script>
