<script setup lang="ts">

withDefaults(defineProps<{
  buttonType?: 'a' | 'button' | 'router',
  url?: string | undefined,
  disabled?: boolean
}>(), {
  url: null,
  buttonType: 'a',
  disabled: false
});
</script>

<template>
  <component
    class="styled-button"
    :class="[{ 'm-link' : buttonType === 'a' }]"
    :is="buttonType"
    :disabled="disabled"
    :url="url">
    <span class="styled-button--span">
      <slot></slot>
    </span>
  </component>
</template>

<style lang="postcss">
.styled-button {

  --link-color: #4338CA;
  --link-color-hover: #3730A3;
  --link-color-disabled: #A3A3A3;

  cursor: pointer;
  display: inline-block;
  width: fit-content;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  font-family: var(--font-family);

  &.disabled {
    cursor: none;
    color: var(--link-color-disabled);
  }

  & span.styled-button--span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  &.m-link {
    color: var(--link-color);

    &:hover {
      color: var(--link-color-hover);
    }

    &:active {
      color: var(--link-color-hover);
      box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);
    }
  }
}
</style>