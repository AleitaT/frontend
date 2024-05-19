<script setup lang="ts">
import Testimonial from '@/components/TestimonialCard.vue'
</script>

<template>
  <main class="page page__testimonial">
    <Testimonial/>
  </main>
</template>

<style lang="postcss">
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  height: fit-content;
  padding-top: 80px;
  width: 100dvw;
  padding: 24px;

  &.page__testimonial {
    --gradient-1: #F9FAFB;
    --gradient-2: #D2D6DB;
    background: rgb(249, 250, 251);
    background: linear-gradient(45deg, rgba(249, 250, 251, 1) 0%, rgba(210, 214, 219, 1) 100%);
  }
}
</style>
