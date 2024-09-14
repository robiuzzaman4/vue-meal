<script setup>
import { ref, onMounted } from "vue";

let categories = ref([]);
let isLoading = ref(false);

onMounted(async () => {
  try {
    isLoading.value = true;
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();
    const result = data.categories;
    categories.value = result;
  } catch (error) {
    console.error("Error fetching categories:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="flex flex-col gap-6">
    <h1 class="text-3xl font-medium tracking-tighter">
      Explore by Categories:
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
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
    >
      <RouterLink
        v-for="(category, index) in categories"
        :key="index"
        :to="`/category/${category.strCategory}`"
        class="bg-secondary p-1 rounded-xl hover:cursor-pointer"
      >
        <div
          class="h-full w-full flex flex-col items-center justify-center gap-2 bg-background rounded-lg shadow p-4"
        >
          <img
            :src="category?.strCategoryThumb"
            :alt="category?.strCategory"
            class="size-24 object-contain"
          />
          <h4 class="text-xl font-medium tracking-tighter shrink-0">
            {{ category?.strCategory }}
          </h4>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
