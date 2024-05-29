<script setup lang="ts">

withDefaults(defineProps<{
  text: string,
  disabled?: boolean,
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'link-gray' | 'destructive',
  link?: string | null,
  href?: string | null
}>(), {
  disabled: false,
  variant: 'primary',
  route: null,
  href: null,
  link: null,

});
</script>

<template>
  <component
    class="styled-button"
    :class="[`m-${variant}`]"
    :is="!!link ? 'RouterLink' : (!!href ? 'a' : 'Button')"
    :disabled="disabled">
    <span class="styled-button--icon">
      <slot name="pre"></slot>
    </span>
    <span class="styled-button--text">
      <slot></slot>
    </span>
    <span class="styled-button--icon">
      <slot name="post"></slot>
    </span>
  </component>
</template>

<style lang="postcss">
.styled-button {

  --link-color: #4338CA;
  --link-color-hover: #3730A3;
  --link-color-disabled: #A3A3A3;
  --link-gap: 6px;
  --link-text-padding: 2px;
  --link-active-box-shadow: 0px 0px 0px 4px rgba(68, 76, 231, 0.12);

  /* Primary button style s */
  --button-primary--bg-color: #4338CA;
  --button-primary--bg-color-hover: #3730A3;
  --button-primary--bg-color-focus: #3730A3;
  --button-primary--bg-color-disabled: #F5F5F5;

  --button-primary--color: #FFFFFF;
  --button-primary--color-hover: #FFFFFF;
  --button-primary--color-focus: #FFFFFF;
  --button-primary--color-disabled: #A3A3A3;

  /* Secondary button style s */
  --button-secondary--bg-color: #E6E6E6;
  --button-secondary--bg-color-hover: #E6E6E6;
  --button-secondary--bg-color-focus: #0A0A0A;
  --button-secondary--bg-color-disabled: #A3A3A3;

  --button-secondary--color: #171717;
  --button-secondary--color-hover: #0A0A0A;
  --button-secondary--color-focus: #171717;
  --button-secondary--color-disabled: #F5F5F5;


  --button-bg-tertiary: transparent;

  --button-bg-link: transparent;

  --button-bg-link-gray: #transparent;

  --button-bg-destructive: #DC2626;

  outline: none;
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

  &.m-primary,
  .m-secondary,
  .m-descructive {
    display: block;
  }

  &.m-primary {
    background-color: var(--button-primary--bg-color);
    color: var(--button-primary--color);
  }

  &.m-secondary {
    background-color: var(--button-secondary--bg-color);
    color: var(--button-secondary--color);
  }

  &.m-tertiary {
    background-color: var(--button-tertiary--bg-color);
    color: var(--button-tertiary--color);
  }

  &.m-link {
    background-color: var(--button-link--bg-color);
    color: var(--button-link--color);

    &:hover {
      color: var(--link-color-hover);
    }

    &:active {
      color: var(--link-color-hover);
      box-shadow: var(--link-active-box-shadow);
    }
  }

  &.m-link-gray {
    background-color: var(--button-link-gray--bg-color);
    color: var(--button-link-gray--color);
  }

  &.m-destructive {
    background-color: var(--button-destructive--bg-color);
    color: var(--button-destructive--color);
  }
}
</style>