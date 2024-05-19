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
  min-height: calc(100vh - 80px);
  height: fit-content;
  padding-top: 80px;
  width: 100dvw;
  padding: 24px;
}
</style>
