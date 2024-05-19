<script setup lang="ts">

withDefaults(defineProps<{
  buttonType?: string,
  url: '',

}>(), {
  buttonType: 'button'
});
</script>

<template>
  <component :is="buttonType">
    <slot></slot>
  </component>
</template>