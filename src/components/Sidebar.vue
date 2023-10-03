<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      class="max-h-[96%] mt-[11vh] border-x w-[20%]"
    >
      <v-list density="compact" class="text-sm !ps-0 !w-[90%]" nav>
        <v-list-item
          rounded="lg"
          color="slate-200"
          :to="{ name: 'Sales' }"
          :exact="'/src/components/Sales.vue' ? true : false"
          prepend-icon="mdi-sale-outline"
          title="Sales"
          value="sales"
        >
        </v-list-item>
        <v-list-item
          rounded="lg"
          color="slate-200"
          :to="{ name: 'Inventory' }"
          :exact="'/src/components/Inventory.vue' ? true : false"
          prepend-icon="mdi-warehouse"
          title="Inventory"
          value="inventory"
        ></v-list-item>
        <v-list-item
          rounded="lg"
          color="slate-200"
          :to="{ name: 'Products' }"
          :exact="'/src/components/Products.vue' ? true : false"
          prepend-icon="mdi-cart-outline"
          title="Products Registration"
          value="products"
        ></v-list-item>

        <v-list-item
          color="slate-200"
          @click.stop="rail = !rail"
          rounded="xl"
          :prepend-icon="rail ? 'mdi-arrow-right' : 'mdi-arrow-left'"
          title="collapse side bar"
          value="close"
          class="mt-2"
        >
          <v-tooltip activator="parent" location="bottom">{{
            rail ? "Expand side bar " : "Close side bar"
          }}</v-tooltip>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="height: 250px"></v-main>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";
const drawer = ref(true);
const rail = ref(false);
</script>
