<script setup lang="ts">

</script>

<template>
  <span class="pill-tag">
    <slot></slot>
  </span>
</template>

<style lang="postcss">
.pill-tag {
  display: flex;
  padding: 2px 8px;
  align-items: center;
  gap: 0px;
  border-radius: 9999px;
  border: 1px solid var(--green-200);
  background: var(--green-50);
  color: var(--green-700);
  text-align: center;
  font-family: var(--font-family);
  font-size: var(--text-sm);
  line-height: 20px;
}
</style>