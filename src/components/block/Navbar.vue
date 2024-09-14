<script setup>
import { ref } from "vue";
const links = ref([
  {
    to: "/",
    level: "Home",
  },
  {
    to: "/about",
    level: "About",
  },
]);
</script>

<template>
  <nav class="w-full fixed top-0 bg-white border-b">
    <div
      class="w-full max-w-screen-lg mx-auto px-4 h-14 flex items-center justify-between gap-4"
    >
      <RouterLink
        to="/"
        class="text-2xl font-medium text-emerald-500 tracking-tighter"
      >
        Meal DB
      </RouterLink>
      <div class="flex items-center gap-6 text-muted-foreground">
        <RouterLink
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="text-base font-medium tracking-tighter"
          activeClass="text-emerald-500"
          exactActiveClass="text-emerald-500"
          >{{ link.level }}</RouterLink
        >
      </div>
    </div>
  </nav>
</template>
