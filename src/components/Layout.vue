<template>
  <MainPage class="bg-white fixed top-0 z-[50] border" />
  <div class="flex w-100 mt-20">
    <section class="">
      <Sidebar />
    </section>
    <section class="w-100">
      <router-view></router-view>
    </section>
  </div>
</template>

<script setup>
import MainPage from "./MainPage.vue";
import Sidebar from "./Sidebar.vue";
</script>
