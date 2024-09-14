<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Button } from "@/components/ui/button";

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
      <RouterLink to="/">Home </RouterLink> / Category:
      <span class="text-emerald-500">{{ categoryName }}</span>
    </h1>
    <div v-if="isLoading" class="w-fit mx-auto py-12 animate-spin">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-loader"
      >
        <path d="M12 2v4" />
        <path d="m16.2 7.8 2.9-2.9" />
        <path d="M18 12h4" />
        <path d="m16.2 16.2 2.9 2.9" />
        <path d="M12 18v4" />
        <path d="m4.9 19.1 2.9-2.9" />
        <path d="M2 12h4" />
        <path d="m4.9 4.9 2.9 2.9" />
      </svg>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(meal, index) in meals"
        :key="index"
        class="bg-secondary p-1 rounded-xl"
      >
        <div
          class="h-full w-full flex flex-col gap-4 bg-background rounded-lg shadow p-4"
        >
          <img
            :src="meal?.strMealThumb"
            :alt="meal?.strMeal"
            class="w-full max-h-64 object-cover rounded-md"
          />
          <h4 class="text-xl font-medium tracking-tighter shrink-0 truncate">
            {{ meal?.strMeal }}
          </h4>
          <Button>View Details</Button>
        </div>
      </div>
    </div>
  </section>
</template>
