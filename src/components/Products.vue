<template>
  <div class="rounded-lg px-[10%] pt-[5%]">
    <v-sheet elevation="2" class="border p-5">
      <div class="flex p-10 justify-between items-center">
        <section class="basis-1/3 flex flex-col">
          <lable>Name: </lable>
          <input
            class="p-2 rounded-lg w-70"
            placeholder="Product Name"
            type="text"
          />
        </section>
        <section class="basis-1/3 flex flex-col">
          <lable>Description: </lable>
          <input
            class="p-2 rounded-lg w-70"
            placeholder="Product Description"
            type="text"
          />
        </section>
      </div>
      <div class="flex p-10 justify-between">
        <section class="basis-1/3 flex flex-col">
          <lable>Price: </lable>
          <input
            class="p-2 rounded-lg w-70"
            placeholder="Price"
            type="number"
          />
        </section>
        <section class="basis-1/3 flex flex-col">
          <lable>Stock: </lable>
          <input
            class="p-2 rounded-lg w-70"
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
        <v-btn class="px-10" variant="outlined">Add </v-btn>
      </section>
    </v-sheet>
  </div>
</template>

<style scoped>
input {
  border: 1px black solid;
}
</style>
