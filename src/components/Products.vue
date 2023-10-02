<template>
  <div class="rounded-lg px-[10%] pt-[5%]">
    <v-sheet elevation="2" class="border p-5 !bg-slate-300 rounded-lg">
      <div class="flex p-10 justify-between items-center">
        <section class="basis-1/3 flex flex-col">
          <lable class="text-lg font-semibold">Name: </lable>
          <input
            v-model="productName"
            class="p-2 rounded-lg w-70 bg-slate-100"
            placeholder="Product Name"
            type="text"
          />
        </section>
        <section class="basis-1/3 flex flex-col">
          <lable class="text-lg font-semibold">Description: </lable>
          <input
            v-model="productDescription"
            class="p-2 rounded-lg w-70 bg-slate-100"
            placeholder="Product Description"
            type="text"
          />
        </section>
      </div>
      <div class="flex p-10 justify-between">
        <section class="basis-1/3 flex flex-col">
          <lable class="text-lg font-semibold">Price: </lable>
          <input
            v-model="productPrice"
            class="p-2 rounded-lg w-70 bg-slate-100"
            placeholder="Price"
            type="number"
          />
        </section>
        <section class="basis-1/3 flex flex-col">
          <lable class="text-lg font-semibold">Stock: </lable>
          <input
            v-model="productStock"
            class="p-2 rounded-lg w-70 bg-slate-100"
            placeholder="Stock units"
            type="number"
          />
        </section>
      </div>
      <section>
        <input
          type="image"
          src="img_submit.gif"
          alt="Submit"
          width="48"
          height="48"
        />
      </section>

      <section class="flex justify-center">
        <v-btn
          @click="getDetails"
          class="px-10 !bg-slate-200"
          variant="outlined"
          >Add
        </v-btn>
      </section>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductStore } from "../store/products";
import { toast } from "vue3-toastify";

const productStore = useProductStore();

const productName = ref("");
const productPrice = ref();
const productDescription = ref("");
const productStock = ref();

function getDetails() {
  if (
    productName.value &&
    productPrice.value !== undefined &&
    productDescription.value &&
    productStock.value !== undefined
  ) {
    productStore.addProductAction({
      name: productName.value,
      price: productPrice.value,
      description: productDescription.value,
      quantity: productStock.value,
    });
    toast.success(` ${productName.value} has been added`);
  } else {
    toast.error("All fields are required");
  }
}
</script>

<style scoped>
input {
  border: 1px black solid;
}
</style>
