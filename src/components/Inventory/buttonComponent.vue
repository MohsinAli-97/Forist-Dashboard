<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" @click="onButtonClick" variant="text">
        <v-icon icon="mdi-pencil"></v-icon>
      </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card title="Edit">
        <v-card-text>
          <label
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >Name</label
          >
          <input
            v-model="name"
            placeholder="name"
            class="w-full px-2 py-1 mt-1 text-gray-700 bg-gray-200 rounded"
          />

          <label
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >Price</label
          >
          <input
            v-model="price"
            placeholder="Price"
            class="w-full px-2 py-1 mt-1 text-gray-700 bg-gray-200 rounded"
          />

          <label
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >Units</label
          >
          <input
            v-model="units"
            placeholder="Units"
            class="w-full px-2 py-1 mt-1 text-gray-700 bg-gray-200 rounded"
          />

          <label
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >Description</label
          >
          <input
            v-model="description"
            placeholder="Description"
            class="w-full px-2 py-1 mt-1 text-gray-700 bg-gray-200 rounded"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="updateData">Update</v-btn>
          <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { storeToRefs } from "pinia";
import { useProductStore } from "../../store/products";
import { toast } from "vue3-toastify";

const productStore = useProductStore();
const { products } = storeToRefs(productStore);
export default {
  name: "ButtonRenderer",
  data() {
    return {
      name: this.params.data.name,
      price: this.params.data.price,
      units: this.params.data.quantity,
      description: this.params.data.description,
    };
  },
  methods: {
    onButtonClick() {
      console.log(this.params.data);
    },
    updateData() {
      productStore.updateProduct({
        name: this.name,
        price: parseFloat(this.price),
        quantity: parseInt(this.units),
        description: this.description,
      });
      console.log(products.value);
      toast.success("data has been updated");
    },
  },
};
</script>

<style scoped>
/* You can add custom styles here if required */
</style>
