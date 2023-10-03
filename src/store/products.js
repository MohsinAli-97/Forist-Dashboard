import { defineStore } from "pinia";
export const useProductStore = defineStore("product", {
  state: () => ({
    totalProducts: 20,

    products: [
      {
        name: "Wireless Bluetooth Headphones",
        price: 129.99,
        description:
          "Noise-cancelling over-the-ear headphones with high-quality sound.",
        quantity: 220,
      },
      {
        name: "Laptop Stand Adjustable",
        price: 39.99,
        description: "Ergonomic stand for laptops up to 17 inches.",
        quantity: 200,
      },
      {
        name: "Smart LED TV 50-inch",
        price: 399.99,
        description: "Ultra HD Smart TV with HDR and Alexa Compatibility.",
        quantity: 80,
      },
      {
        name: "Gaming Mouse RGB",
        price: 49.99,
        description: "High precision laser mouse with customizable RGB lights.",
        quantity: 250,
      },
      {
        name: "Kitchen Blender 700W",
        price: 59.99,
        description: "Multi-speed blender for smoothies, sauces, and more.",
        quantity: 150,
      },
      {
        name: "Portable Camping Tent",
        price: 109.99,
        description: "Waterproof 4-person outdoor tent.",
        quantity: 500,
      },
      {
        name: "Men's Running Shoes",
        price: 89.99,
        description: "Breathable athletic shoes for long-distance running.",
        quantity: 400,
      },
      {
        name: "Digital Camera 24MP",
        price: 199.99,
        description: "Compact digital camera with optical zoom.",
        quantity: 170,
      },
      {
        name: "Yoga Mat Non-slip",
        price: 29.99,
        description: "Eco-friendly, cushioned yoga mat.",
        quantity: 300,
      },
      {
        name: "Electric Toothbrush",
        price: 79.99,
        description: "Rechargeable toothbrush with multiple brushing modes.",
        quantity: 210,
      },
    ],
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    addProductAction(i) {
      this.products.push(i);
      console.log(this.products);
    },
    updateProductFromOrderPlacedAction(item) {
      if (item.status) {
        console.log("Remove product count");
        const productIndex = this.products.findIndex(
          (el) => el.name == item.name
        );
        this.products[productIndex].quantity -= item.totalUnits;
      } else if (!item.status) {
        const productIndex = this.products.findIndex(
          (el) => el.name == item.name
        );
        this.products[productIndex].quantity += item.totalUnits;
        console.log("Add product count");
      }
    },
  },
});
