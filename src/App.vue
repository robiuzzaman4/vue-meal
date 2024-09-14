<script setup>
import { Button } from "@/components/ui/button";
import Navbar from "@/components/block/Navbar.vue";
</script>

<template>
  <Navbar />
  <main class="min-h-[calc(100vh-56px)] mt-14">
    <RouterView />
  </main>
</template>
