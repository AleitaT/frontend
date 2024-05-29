<script setup>
import StyledButton from '@/components/StyledButton.vue';

</script>

<template>
  <main class="buttons">
    <div class="button-grid">
      <StyledButton>Primary</StyledButton>
      <StyledButton variant="secondary">Secondary</StyledButton>
      <StyledButton variant="tertiary">Tertiary</StyledButton>
      <StyledButton variant="link" link="/">Link</StyledButton>
      <StyledButton variant="link gray" link="/">Link Gray</StyledButton>
      <StyledButton variant="destructive">destructive</StyledButton>
    </div>
  </main>
  
</template>

<style lang="postcss">
.button-grid {
  padding: 1rem;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

}
</style>