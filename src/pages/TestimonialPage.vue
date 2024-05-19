<script setup lang="ts">
import Testimonial from '@/components/TestimonialCard.vue'
</script>

<template>
  <main class="page">
    <Testimonial/>
  </main>
</template>

<style>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  padding-top: 80px;
  width: 100dvw;
  padding: 24px;
}
</style>
