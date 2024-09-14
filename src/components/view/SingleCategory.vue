<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const categoryName = ref(route.params.category);
</script>

<template>
  <section class="w-full max-w-screen-lg mx-auto px-4 py-16 grid gap-12">
    <h1 class="text-3xl text-center font-medium tracking-tighter">
      Category: <span class="text-emerald-500">{{ categoryName }}</span>
    </h1>
  </section>
</template>
