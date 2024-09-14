<script setup>
import Categories from "@/components/block/Categories.vue";
</script>

<template>
  <section class="w-full max-w-screen-lg mx-auto px-4 py-16 grid gap-12">
    <span class="grid gap-4 py-12">
      <h1 class="text-3xl md:text-5xl text-center font-medium tracking-tighter">
        Delicious Meal Inspiration & Recipes.
      </h1>
      <p class="text-base text-muted-foreground text-center tracking-tighter">
        Explore by Category, Ingredient, Country, Name or First Letter.
      </p>
    </span>
    <Categories />
  </section>
</template>
