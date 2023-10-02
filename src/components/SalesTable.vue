<template>
  <p class="pt-5 ps-7 text-slate-400">Order list</p>
  <v-table class="p-3" fixed-header height="400px">
    <thead>
      <tr>
        <th class="text-left">Transaction Id</th>
        <th class="text-left">Name</th>
        <th class="text-left">Total</th>
        <th class="text-left">Status</th>
        <th class="text-left">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.transactionId">
        <td class="text-slate-400">{{ item.transactionId }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td class="text-center">
          <p class="bg-slate-200 text-green">Pending</p>
        </td>
        <td>
          <v-btn
            size="x-small"
            class="text-none p-1"
            color="red"
            variant="outlined"
            >Cancel</v-btn
          >
          <v-btn
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

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Product 1",
          price: 12.34,
          transactionId: "TX001234",
          status: "pending",
        },
        {
          name: "Product 2",
          price: 56.78,
          transactionId: "TX005678",
          status: "pending",
        },
        {
          name: "Product 3",
          price: 34.56,
          transactionId: "TX003456",
          status: "pending",
        },
        {
          name: "Product 4",
          price: 78.9,
          transactionId: "TX007890",
          status: "pending",
        },
        {
          name: "Product 5",
          price: 45.67,
          transactionId: "TX004567",
          status: "pending",
        },
        {
          name: "Product 6",
          price: 23.45,
          transactionId: "TX002345",
          status: "pending",
        },
        {
          name: "Product 7",
          price: 67.89,
          transactionId: "TX006789",
          status: "pending",
        },
        {
          name: "Product 8",
          price: 89.01,
          transactionId: "TX008901",
          status: "pending",
        },
        {
          name: "Product 9",
          price: 56.12,
          transactionId: "TX005612",
          status: "pending",
        },
        {
          name: "Product 10",
          price: 12.78,
          transactionId: "TX001278",
          status: "pending",
        },
        {
          name: "Product 11",
          price: 34.56,
          transactionId: "TX003456",
          status: "pending",
        },
        {
          name: "Product 12",
          price: 45.67,
          transactionId: "TX004567",
          status: "pending",
        },
        {
          name: "Product 13",
          price: 23.45,
          transactionId: "TX002345",
          status: "pending",
        },
        {
          name: "Product 14",
          price: 67.89,
          transactionId: "TX006789",
          status: "pending",
        },
        {
          name: "Product 15",
          price: 89.01,
          transactionId: "TX008901",
          status: "pending",
        },
      ],
    };
  },
};
</script>
