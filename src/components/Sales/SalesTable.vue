<template>
  <p class="pt-5 ps-7 text-slate-400">Order list</p>
  <v-table class="p-3" fixed-header height="400px">
    <thead>
      <tr>
        <th class="text-left">Transaction Id</th>
        <th class="text-left">Item's count</th>
        <th class="text-left">Total</th>
        <th class="text-left">Status</th>
        <th class="text-left">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in orderItems" :key="item.transactionId">
        <td class="text-slate-400">{{ item.transactionId }}</td>
        <td>{{ item.totalUnits }}</td>
        <td class="text-green">$ {{ item.price }}</td>

        <td class="text-center">
          <p class="text-slate-400">Pending</p>
        </td>
        <td>
          <v-btn
            @click="cancelOrderHandler(item)"
            size="x-small"
            class="text-none p-1"
            color="red"
            variant="outlined"
            >Cancel</v-btn
          >
          <v-btn
            @click="confirmOrderHandler(item)"
            size="x-small"
            class="text-none"
            color="green ms-2 p-1"
            variant="outlined"
            >Complete</v-btn
          >
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { toast } from "vue3-toastify";
import { storeToRefs } from "pinia";

import { useSalesStore } from "../../store/sales";
import { useProductStore } from "../../store/products";

const productStore = useProductStore();
const salesStore = useSalesStore();
const { salesRepresentaion } = storeToRefs(salesStore);
const { products } = storeToRefs(productStore);

const today = new Date();
today.setHours(0, 0, 0, 0);

const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

watchEffect(() => {
  productStore.getProductsInventoryLow;
});

const orderItems = ref([
  {
    name: "Wireless Bluetooth Headphones",
    price: 12.34,
    transactionId: "TX001234",
    status: "pending",
    totalUnits: 100,
    time: today.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Kitchen Blender 700W",
    price: 56.78,
    transactionId: "TX005678",
    status: "pending",
    totalUnits: 18,
    time: today.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Electric Toothbrush",
    price: 34.56,
    transactionId: "TX003456",
    status: "pending",
    totalUnits: 20,
    time: yesterday.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Electric Toothbrush",
    price: 78.9,
    transactionId: "TX007890",
    status: "pending",
    totalUnits: 18,
    time: yesterday.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Stainless Steel Watch",
    price: 45.67,
    transactionId: "TX004567",
    status: "pending",
    totalUnits: 27,
    time: yesterday.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Yoga Mat Non-slip",
    price: 23.45,
    transactionId: "TX002345",
    status: "pending",
    totalUnits: 21,
    time: today.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Men's Running Shoes",
    price: 67.89,
    transactionId: "TX006789",
    status: "pending",
    totalUnits: 33,
    time: today.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Stainless Steel Watch",
    price: 89.01,
    transactionId: "TX008901",
    status: "pending",
    totalUnits: 10,
    time: yesterday.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Men's Running Shoes",
    price: 56.12,
    transactionId: "TX005612",
    status: "pending",
    totalUnits: 19,
    time: today.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Yoga Mat Non-slip",
    price: 12.78,
    transactionId: "TX001278",
    status: "pending",
    totalUnits: 32,
    time: yesterday.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Digital Camera 24MP",
    price: 34.56,
    transactionId: "TX003456",
    status: "pending",
    totalUnits: 13,
    time: yesterday.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Gardening Tool Set",
    price: 45.67,
    transactionId: "TX004567",
    status: "pending",
    totalUnits: 16,
    time: yesterday.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Wireless Phone Charger",
    price: 23.45,
    transactionId: "TX002345",
    status: "pending",
    totalUnits: 12,
    time: yesterday.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Digital Camera 24MP",
    price: 67.89,
    transactionId: "TX006789",
    status: "pending",
    totalUnits: 12,
    time: yesterday.toISOString().slice(0, 19).replace("T", " "),
  },
  {
    name: "Gardening Tool Set",
    price: 89.01,
    transactionId: "TX008901",
    status: "pending",
    totalUnits: 33,
    time: yesterday.toISOString().slice(0, 19).replace("T", " "),
  },
]);

function confirmOrderHandler(item) {
  salesStore.orderCompleteAction({
    saleId: item.transactionId,
    saleTime: item.time,
    revenue: `$ ${item.price}`,
    ItemsSold: item.totalUnits,
    saleStatus: true,
  });

  orderItems.value = orderItems.value.filter(
    (el) => el.transactionId != item.transactionId
  );
  productStore.updateProductFromOrderPlacedAction(item);
  toast.success(`Order # ${item.transactionId} has been processed`);
}

function cancelOrderHandler(item) {
  salesStore.orderRejectAction({
    saleId: item.transactionId,
    saleAmount: `$ ${item.price}`,
  });

  orderItems.value = orderItems.value.filter(
    (el) => el.transactionId != item.transactionId
  );
  productStore.updateProductFromOrderPlacedAction({ ...item, status: false });
  toast.error(`Order # ${item.transactionId} has been declined`);
}
</script>
