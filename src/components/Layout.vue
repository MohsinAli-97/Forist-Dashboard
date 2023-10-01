<template>
  <MainPage />
  <div class="flex border-t border-black w-100">
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
