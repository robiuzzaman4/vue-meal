<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const categoryName = route.params.category;

let meals = ref([]);
let isLoading = ref(false);

onMounted(async () => {
  try {
    isLoading.value = true;
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();
    const result = data?.meals;
    meals.value = result;
  } catch (error) {
    console.error("Error fetching categories:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section class="w-full max-w-screen-lg mx-auto px-4 py-16 grid gap-12">
    <h1 class="text-3xl text-center font-medium tracking-tighter">
      Category: <span class="text-emerald-500">{{ categoryName }}</span>
    </h1>
  </section>
</template>
