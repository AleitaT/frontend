<script setup lang="ts">

withDefaults(defineProps<{
  url?: string | undefined,
  disabled?: boolean
}>(), {
  url: undefined,
  disabled: false
});
</script>

<template>
  <a
    class="styled-link"
    :class="['m-link']"
    :disabled="disabled"
    target="_blank"
    :href="url">
    <span class="styled-button--text">
      <slot name="text"></slot>
    </span>
    <span class="styled-button--icon">
      <slot name="icon"></slot>
    </span>
  </a>
</template>

<style lang="postcss">
a.styled-link {

  --link-color: #4338CA;
  --link-color-hover: #3730A3;
  --link-color-disabled: #A3A3A3;
  --link-gap: 6px;
  --link-text-padding: 2px;
  --link-active-box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
  cursor: pointer;
  display: inline-block;
  width: fit-content;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  font-family: var(--font-family);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--link-gap);
  text-decoration: none;

  &.disabled {
    cursor: none;
    color: var(--link-color-disabled);
  }

  & span.styled-button--text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--link-gap);
    padding: 0 var(--link-text-padding);
  }

  & span.styled-button--icon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--link-gap);
  }

  &.m-link {
    color: var(--link-color);

    &:hover {
      color: var(--link-color-hover);
    }

    &:active {
      color: var(--link-color-hover);
      box-shadow: var(--link-active-box-shadow);
    }
  }
}
</style>