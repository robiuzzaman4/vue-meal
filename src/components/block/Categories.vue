<script setup>
import { ref, onMounted } from "vue";

let categories = ref([]);

onMounted(async () => {
  try {
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
  }
});
</script>

<template>
  <div class="flex flex-col gap-6">
    <h1 class="text-3xl font-medium tracking-tighter">
      Explore by Categories:
    </h1>
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
