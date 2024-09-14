<script setup>
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <!-- <div>
    <h1 class="text-4xl">Hello Meal</h1>
    <Button>Click me</Button>
  </div> -->

  <!-- <p><strong>Current route path:</strong> {{ $route.fullPath }}</p> -->
  <Navbar />
  <main class="min-h-[calc(100vh-56px)] mt-14">
    <RouterView />
  </main>
</template>
